import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography, Grid, CircularProgress } from '@material-ui/core';
export class TodayForecast extends Component {
    state = {
        isLoading: true,
        // location: 'Tel aviv',
        // location_key: 215854,
        today_forecast: undefined,
        description: '',
        temperature: 0
    }




    getTodayWeatherByLocationKey(location_key) {
        this.setState({ isLoading: true })

        const today_url = `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${location_key}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
        fetch(today_url).then((docs) => docs.json()).then(res => this.setState({ today_forecast: res[0], temperature: res[0].Temperature.Value, description: res[0].IconPhrase, isLoading: false }))
    }
    componentDidMount() {
        this.getTodayWeatherByLocationKey(this.props.location_key)
    }
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.getTodayWeatherByLocationKey(this.props.location_key)
        }
        // 
    }
    render() {

        // console.log(this.state.isLoading)
        // console.log(this.props.location);
        const { location } = this.props
        const { description, temperature } = this.state
        const icon = this.props.getIconByDescription(description)
        return (
            this.state.isLoading ? <CircularProgress style={{ marginLeft: '100px' }} />
                : <Grid container >
                    <Grid item xs={6}>
                        <FontAwesomeIcon style={styles.icon} icon={icon[0]} size="9x" color={icon[1]} />

                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={styles.h1}>{location}</Typography>

                        <Typography style={styles.h2}> {temperature}&deg;C </Typography>

                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" style={{ marginBottom: '10px' }}>{description}</Typography>
                    </Grid>
                </Grid>

        )

    }
}
const styles = {
    todayForecast: {
        color: 'blue',
        display: 'inline'
    },
    h1: {
        margin: '10px 34px',
        fontWeight: 'bold'
    },
    h2: {
        margin: '10px 34px'
    },
    icon: {
        float: 'right'
    }
}
export default TodayForecast
