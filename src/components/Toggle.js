import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/Toggle.css'

class Toggle extends Component {

  render() {
    
    let darkMode=this.props.darkMode

    return (
      <div className='toggle-conatiner'>
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☼</span>
        <span className="toggle">
            <input
              checked={this.props.darkMode}
              onChange={this.props.changeTheme}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
        </span>
        <span style={{ color: darkMode ? "white" : "grey" }}>☽</span>
      </div>
    )
  }
}

// PropTypes
Toggle.propTypes = {
  changeTheme: PropTypes.func.isRequired
}

export default Toggle