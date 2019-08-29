import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import uuid from 'uuid'
import Axios from 'axios';
import cookie from 'react-cookies'

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import About from './components/pages/About'

import './App.css'

class App extends Component{
  
  state = {
    todos:[],
    darkMode: this.getInitialTheme()
  }

  //Gets todo items data form a server
  componentDidMount(){
    Axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=4`)
    .then(res => this.setState({todos: res.data}))
  }

  //Change Item status form done to undone or vice versa
  toggleComplete = (id) => {

    this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })});
  }

  //Delete Item
  deleteItem = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
  }

  //Add Item -- uuid is used to ensure unique id for new item. The demo rest API used does not increment the id past 201 when adding a new item 
  addTodo = (title) => {
    Axios.post(`https://jsonplaceholder.typicode.com/todos`, {title: title,  completed: false})     
    .then(res => this.setState({todos: [...this.state.todos, res.data]}))
    .then(this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === 201){
              todo.id = uuid.v4()
            }
            return todo;
          })}))
  }

  //Changes the class of the main div therefore changing th CSS assosiated with it.
  changeTheme = () => {
    console.log('Need this to work')
    let temp = !this.state.darkMode
    
    this.setState({darkMode:temp})
    
    let themeing = temp ? 'true' : ''

    cookie.save('theme', themeing, {path:'/'})
  }

  //To get stored cookies for theme
  getInitialTheme(){
    const savedTheme = cookie.load('theme');
    return savedTheme ? true : false;
  }

  render() {
    return(
      <BrowserRouter>
        <div className={this.state.darkMode ? "dark-mode" : "light-mode"}>
          <div className='container'>
            <Header darkMode={this.state.darkMode} changeTheme={this.changeTheme}/>
            <Route exact path='/' render = {props => (
              <div>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteItem={this.deleteItem}/>
              </div>
            )}/>
            <Route exact path='/about' component={About}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
