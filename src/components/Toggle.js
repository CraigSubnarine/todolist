import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Toggle extends Component {

  render() {
    return (
      <div className='toggle-conatiner'>
        <button onClick={this.props.changeTheme}>Toggle</button>
      </div>
    )
  }
}

// PropTypes
Toggle.propTypes = {
  changeTheme: PropTypes.func.isRequired
}

export default Toggle