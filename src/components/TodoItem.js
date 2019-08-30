import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';


class TodoItem extends Component{
    getStyle = () => {
        return {
            textDecorationLine: this.props.todo.completed ? 'line-through' : 'none',
        }
    }


    render(){
        const {id, title, completed} = this.props.todo;
        return(
            <div className="container" id="todoItem" style={this.getStyle()}>
                <Container>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={8}>
                                    <input type="checkbox" checked={completed} onChange={this.props.toggleComplete.bind(this, id)}/> 
                                    {' '}
                                    {title}
                                </Col>
                                <Col sm={4}>
                                    <Button variant="danger" onClick={this.props.deleteItem.bind(this, id)}>Delete</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
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

export default TodoItem