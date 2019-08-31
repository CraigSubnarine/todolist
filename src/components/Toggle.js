import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DayIcon from "@material-ui/icons/WbSunnyRounded";
import NightIcon from "@material-ui/icons/Brightness2";
// import PropTypes from "prop-types";

import color from '@material-ui/core/colors/blue';

class Toggle extends Component {

  render() {
    
    let darkMode=this.props.darkMode

    return (
      <div className='toggle-conatiner'>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <DayIcon style={{ color: darkMode ? "grey" : "crimson" }}/>
          </Grid>
          <Grid item>
            <Switch checked={darkMode} onChange={this.props.changeTheme} />
          </Grid>
          <Grid item>
            <NightIcon style={{ color: darkMode ? "white" : "grey" }}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

// PropTypes
Toggle.propTypes = {
  changeTheme: PropTypes.func.isRequired
}

// const sun = {
//   color: '#FFFF00',
// }

export default Toggle