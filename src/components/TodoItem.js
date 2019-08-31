import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';


class TodoItem extends Component{
    getStyle = () => {
        return {
            textDecorationLine: this.props.todo.completed ? 'line-through' : 'none',
        }
    }


    render(){
        const {id, title, completed} = this.props.todo;
        const labelId = id;
        return(
            <div className="container" id="todoItem" style={this.getStyle()}>
                <Grid container justify='center'>
                <List style={root} >
                    <ListItem button onClick={this.props.toggleComplete.bind(this, id)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                                checked={completed}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId}
                            primary={title}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label="delete" onClick={this.props.deleteItem.bind(this, id)}>
                                <DeleteIcon className='delete'/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
                </Grid>
            </div>
        )
        
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

const root = {
    width: '70%',
    padding: '10px',
    //backgroundColor: theme.palette.background.paper,
}

export default TodoItem