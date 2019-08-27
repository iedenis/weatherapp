import React, { Component } from 'react'
import WeatherCard from './WeatherCard'
import { Grid, Typography } from '@material-ui/core';
export class Favourites extends Component {
    state = {
        cities: [],
        citiesForeCasts: []
    }

    removeFromFavourites = (city) => {
        const { cities, citiesForeCasts } = this.state;
        const retArray = []
        const retArrayOfForecasts = []
        cities.map((element, index) => {
            if (element.location !== city) {
                retArray.push(element)
                retArrayOfForecasts.push(citiesForeCasts[index])
            }
        })
        localStorage.setItem('favouriteCities', JSON.stringify(retArray))
        this.setState({ cities: retArray, citiesForeCasts: retArrayOfForecasts });
    }

    fetchWeather = () => {
        this.state.cities.map((city, idx) => {
            const today_url = `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${city.location_key}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
            fetch(today_url).then((docs) => docs.json()).then(res => {
                const { citiesForeCasts } = this.state;
                citiesForeCasts[idx] = res[0]
                this.setState({ citiesForeCasts: citiesForeCasts })
            }
            )
        })
    }
    componentDidMount() {

        const favouriteCities = localStorage.getItem('favouriteCities')
        // let arr =[]
        if (favouriteCities) {
            this.setState({ cities: JSON.parse(favouriteCities) }, this.fetchWeather)
        }

    }
    render() {
        const { cities, citiesForeCasts } = this.state
        return (
            <div>
                {
                    cities.length === 0 ? <Typography color='primary' variant='h4' style={styles.h4}>No favourite cities added</Typography> :
                        citiesForeCasts.length !== cities.length ? "Waiting for wather" :
                            <Grid container>
                                {cities.map((city, idx) => {
                                    return <WeatherCard
                                        removeFromFavourites={this.removeFromFavourites}
                                        hasButton='true' key={city.location_key}
                                        city={city.location}

                                        temperature={citiesForeCasts[idx].Temperature.Value}
                                        description={citiesForeCasts[idx].IconPhrase}
                                        getIconByDescription={this.props.getIconByDescription}
                                    >
                                    </WeatherCard>
                                })}
                            </Grid>

                }
            </div>
        )
    }
}
const styles = {
    h4: {
        textAlign: 'center'
    },
    card: {
        maxWidth: 170,
        marginBottom: '10px'
    },
    media: {
    },
    cardIcon: {
        color: "orange",
        verticalAlign: 'middle',
    },

};

export default Favourites
