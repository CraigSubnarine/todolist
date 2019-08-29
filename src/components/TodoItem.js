import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component{
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecorationLine: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render(){
        const {id, title, completed} = this.props.todo;
        return(
            <div id="todoItem" style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={completed} onChange={this.props.toggleComplete.bind(this, id)}/>
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteItem.bind(this, id)}>Delete</button>
                </p>
            </div>
        )
        
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '2px',
    cursor: 'pointer',
    float: 'right'
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default TodoItem