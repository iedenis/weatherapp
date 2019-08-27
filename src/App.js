import React, { Component } from 'react'
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider, Grid, Paper } from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';
import Header from './components/layouts/Header'
import Search from './components/layouts/Search'
import AddToFavourites from './components/layouts/AddToFavourites'
import TodayForecast from './components/layouts/TodayForecast'
import { WeeklyForecast } from './components/layouts/WeeklyForecast';
import Favourites from './components/layouts/Favourites'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloud, faSun, faCloudSun, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { ErrorBoundary } from './components/layouts/ErrorBoundary'
export class App extends Component {
  url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/215854?apikey=z7csEsZvhMGEGXEnWi2HGjF9ZmJUraI2=true`;
  state = {
    favourites: 0,
    location: 'Tel aviv',
    location_key: 215854,
    description: '',
    temperature: 0
  }

  getIconByDescription(description) {
    switch (description) {
      case 'Clear': return ['sun', 'orange'];
      case 'Mostly clear': return ['cloud-sun', 'orange'];
      case 'Sunny': return ['sun', 'orange'];
      case 'Partly sunny' || 'Mostly sunny': return ['cloud-sun', 'orange'];
      case 'Showers': return ['cloud-showers-heavy', '#395877']
      case 'Intermittent clouds': return ['cloud-sun', 'orange']
      default: return ['cloud', '#88c3f1'];

    }
  }


  addToFavouritesClicked = () => {
    let fCities = localStorage.getItem('favouriteCities');
    let arrayOfCities = []
    if (fCities) {
      arrayOfCities = JSON.parse(fCities);
      if (!fCities.includes(this.state.location)) {
        arrayOfCities.push({ location: this.state.location, location_key: this.state.location_key })
        localStorage.setItem('favouriteCities', JSON.stringify(arrayOfCities))
      }
    }
    else {
      arrayOfCities.push({ location: this.state.location, location_key: this.state.location_key })
      localStorage.setItem('favouriteCities', JSON.stringify(arrayOfCities))
    }
  }

  switchHomeFavourites = (nav) => {
    if (nav === 'home') {
      this.setState({ favourites: 0 })
    }
    else {
      this.setState({ favourites: 1 })
    }
  }
  /*
  updating the city from search field
  */
  updateCity = (city) => {
    const name = city.LocalizedName;
    const key = city.Key
    this.setState({ location: name, location_key: key })
  }

  theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: pink,
    },
    status: {
      danger: 'orange',
    },
  });
  componentDidCatch(error, info) {
    console.log("CATCHED ERROR", error)
  }
  render() {
    library.add(faCloud, faSun, faCloudSun, faCloudShowersHeavy)

    const { location_key, location } = this.state
    return (
      <div className="App">
        <MuiThemeProvider theme={this.theme}>
          <Header switcher={this.switchHomeFavourites}></Header>
          <Paper >
            {this.state.favourites ? <ErrorBoundary><Favourites getIconByDescription={this.getIconByDescription}></Favourites></ErrorBoundary> :
              <React.Fragment>

                <Paper style={styles.Paper}>
                  <Grid container>

                    <Grid item xs={12} style={styles.GridItem}>
                      <Search
                        location={this.state.location}
                        updateCity={this.updateCity}
                      ></Search>
                    </Grid>

                    <Grid item xs={6} style={styles.GridItem}>

                      <ErrorBoundary>
                        <TodayForecast
                          location_key={location_key}
                          location={location}
                          getIconByDescription={this.getIconByDescription}
                        >
                        </TodayForecast>
                      </ErrorBoundary>

                    </Grid>
                    <Grid item xs={6} style={styles.GridItem} ><AddToFavourites addToFavourites={this.addToFavouritesClicked} > </AddToFavourites></Grid>



                  </Grid>

                </Paper>


                <Grid item style={styles.GridItem}>
                  <ErrorBoundary>

                    <WeeklyForecast
                      city={location}
                      location_key={location_key}
                      getIconByDescription={this.getIconByDescription}
                    ></WeeklyForecast>
                  </ErrorBoundary>
                </Grid>
              </React.Fragment>

            }


          </Paper>

        </MuiThemeProvider>

      </div>
    )
  }

}

const styles = {
  Paper: {
    width: '100%',
    marginBottom: '20px',
  },
  GridItem: {
    //border: '1px solid'
  }
}
export default App