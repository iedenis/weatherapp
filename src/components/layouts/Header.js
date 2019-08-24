import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs'
import { Tab, Typography, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar'

export class Header extends Component {
  state = {
    value: 0
  }
  handleChange = (e, tab) => {
    this.setState({ value: tab })
  }
  render() {
    const { switcher } = this.props
    return (
      <div >
        <AppBar
          position="static"
        >
          <Toolbar>

            <Typography variant="h6" >
              Herolo weather task
          </Typography>
            <Tabs
              style={styles.Tabs}
              value={this.state.value}
              onChange={this.handleChange}
              aria-label="simple tabs example">


              <Tab label="Home" onClick={()=>switcher('home')} />
              <Tab label="Favourites" onClick={()=>switcher('favourites')} />
            </Tabs>
          </Toolbar>

        </AppBar>
        {/* <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
        */}
      </div>)
  }
}
const styles = {
  Tabs: {
    marginLeft: 'auto'
  }
}
export default Header
