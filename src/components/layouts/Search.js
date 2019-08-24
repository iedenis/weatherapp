import React, { Component } from 'react'
import { TextField, Snackbar } from '@material-ui/core';

export class Search extends Component {
    state = {
        cities: [{ Version: 1, Key: "215854", Type: "City", Rank: 21, LocalizedName: "Tel Aviv" }]
    }

    /*
    { Version: 1, Key: "294021", Type: "City", Rank: 10, LocalizedName: "Moscow" },
        { Version: 1, Key: "210666", Type: "City", Rank: 21, LocalizedName: "Mosul" },
        { Version: 1, Key: "5193", Type: "City", Rank: 41, LocalizedName: "Mostaganem" },
        { Version: 1, Key: "313839", Type: "City", Rank: 41, LocalizedName: "Moshi" },
        { Version: 1, Key: "35659", Type: "City", Rank: 45, LocalizedName: "Mossoró" },
        { Version: 1, Key: "126760", Type: "City", Rank: 52, LocalizedName: "Most" },
        { Version: 1, Key: "254949", Type: "City", Rank: 52, LocalizedName: "Moss" },
        { Version: 1, Key: "301197", Type: "City", Rank: 52, LocalizedName: "Mosselbaai" },
        { Version: 1, Key: "85657", Type: "City", Rank: 55, LocalizedName: "Moshan Town" },
        { Version: 1, Key: "2595153", Type: "City", Rank: 55, LocalizedName: "Mosha Town" }

    */

    mysSnackBar = (props) => {
        return <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        //open={open}
        // autoHideDuration={6000}
        // onClose={handleClose}
        >
        </Snackbar>
    }

    handleChange = (e) => {
        const city = e.target.value;
        this.getCities(city);
        if (this.state.cities.length === 0)
            return <Snackbar></Snackbar>
        if (this.state.cities.length === 1) {
            this.props.updateCity(this.state.cities[0])
        }
    }
    getCities = (city) => {
        if (city) {
            const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${city}`
            fetch(url).then(tojson => tojson.json()).then(res => this.setState({ cities: res }))

        }
    }

    submitCity = (e) => {
        e.preventDefault();
        if (this.state.cities.length > 0)
            this.props.updateCity(this.state.cities[0])
        else {

        }
    }

    render() {
        //console.log(this.state.cities)
        const { cities } = this.state
        return (
            <form onSubmit={this.submitCity} noValidate autoComplete="off">
                <TextField
                    style={this.styles}
                    id="standard-textarea"
                    label="Find weather"
                    placeholder={cities.length === 1 ? this.state.cities[0].LocalizedName : this.props.location}
                    margin="normal"
                    fullWidth
                    onChange={this.handleChange}
                />
            </form>

        )
    }
}
export default Search
