import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from "@material-ui/core/Grid";
import DayIcon from "@material-ui/icons/WbSunnyRounded";
import NightIcon from "@material-ui/icons/Brightness2";
import FilterVintageRoundedIcon from '@material-ui/icons/FilterVintageRounded';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Toggle extends Component {

  render() {
    return (
      <div className='toggle-conatiner'>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <ButtonGroup size="small" aria-label="small button group">
              <Button onClick={this.props.changeTheme.bind(this, 'light-mode')}>
                <DayIcon className='DayIcon'/>
              </Button>
              <Button onClick={this.props.changeTheme.bind(this, 'dark-mode')}>
                <NightIcon className='NightIcon'/>            
              </Button>
              <Button onClick={this.props.changeTheme.bind(this, 'green-mode')}>
                <FilterVintageRoundedIcon className='GreenIcon'/>
              </Button>
            </ButtonGroup>
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