import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component{
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecorationLine: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render(){
        const {id, title} = this.props.todo;
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/>
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
    todo: PropTypes.object.isRequired
}

export default TodoItem