import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.title === ''){
      alert('This is not a valid input')
      return
    }else{
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
    }
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <TextField
          id="outlined-full-width"
          style={{ margin: 8 }}
          fullWidth
          placeholder="e.g. Walk the Dog"
          margin="normal"
          variant="outlined"
          name="title" 
          value={this.state.title}
          onChange={this.onChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" color="primary" type="submit" value="Submit">
          <SaveIcon/>
          Save
        </Button>
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo