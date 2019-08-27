import React, { Component } from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import WeatherCard from './WeatherCard'

export class WeeklyForecast extends Component {
    state = {
        dailyForeCasts: [],
        //firstDay:
    }
    daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    getWeatherByKey = (key) => {
        const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
        fetch(url).then(docs => docs.json()).then(res => this.setState({ dailyForeCasts: res.DailyForecasts }))
    }
    componentDidMount() {
        this.getWeatherByKey(this.props.location_key)
    }
    componentDidUpdate(prevProps) {
       // console.log(this.props)
        if (prevProps !== this.props) {
            this.getWeatherByKey(this.props.location_key)
        }
    }
    render() {

        const days = [];
        var firstDay
        const { dailyForeCasts } = this.state
        //console.log(dailyForeCasts);
        if (this.state.dailyForeCasts.length !== 0) {
            firstDay = new Date(dailyForeCasts[0].Date).getUTCDay()
            // console.log(firstDay);
            for (let i = 0, y = firstDay; i < 5; i++ , y = (++y) % 7) {
                days.push(this.daysOfTheWeek[y])
            }
        }


        return (
            dailyForeCasts ?
                <Grid container justify='space-between' >

                    {days.map((day, idx) => <WeatherCard
                        key={day}
                        dayOfTheWeek={day}
                        minTemp={dailyForeCasts[idx].Temperature.Minimum.Value}
                        maxTemp={dailyForeCasts[idx].Temperature.Maximum.Value}
                        description={dailyForeCasts[idx].Day.IconPhrase}
                        getIconByDescription={this.props.getIconByDescription}
                    >
                    </WeatherCard>)

                    }
                </Grid> : <CircularProgress style={{ marginLeft: '100px' }} />
        )
    }
}



export default WeeklyForecast