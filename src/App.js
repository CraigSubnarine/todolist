import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import uuid from 'uuid'
import cookie from 'react-cookies'

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import About from './components/pages/About'

import './App.css'

class App extends Component{
  
  state = {
    todos:this.getInitialList(),
    themeMode: this.getInitialTheme()
  }

  //Change Item status form done to undone or vice versa
  toggleComplete = (id) => {

    this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })},() => cookie.save('Todolist', this.state.todos, {path:'/'}));
      console.log(cookie.load('Todolist'))    
  }

  //Delete Item
  deleteItem = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}, () => cookie.save('Todolist', this.state.todos, {path:'/'})) 
    // console.log(this.state.todos)    
  }

  //Add Item -- uuid is used to ensure unique id for new item. The demo rest API used does not increment the id past 201 when adding a new item 
  addTodo = (title) => {
    if((this.state.todos.find((todo)=> todo.title.toLowerCase() === title.toLowerCase())) === undefined){
      const newTodo = {id:uuid.v4(), title: title,  completed: false} 
      this.setState({todos: [...this.state.todos, newTodo]}, () => cookie.save('Todolist', this.state.todos, {path:'/'}))      
    }else{
      alert('Already Exists')
    }
    
    // console.log(cookie.load('Todolist'))
  }

  //Changes the class of the main div therefore changing th CSS assosiated with it.
  changeTheme = (theme) => {
    //console.log(theme)
 
    this.setState({themeMode:theme},() => console.log(this.state.todos))
    cookie.save('theme', theme, {path:'/'})
  }

  //To get stored cookies for theme
  getInitialTheme(){
    const savedTheme = cookie.load('theme');
    // console.log(savedTheme)
    if (savedTheme){
      return savedTheme
    }else{
      return 'light-mode'
    }
  }

  getInitialList(){
    const savedList = cookie.load('Todolist');
    // console.log(savedTheme)
    if (savedList){
      return savedList
    }else{
      return []
    }
  }

  render() {
    return(
      <BrowserRouter>
        <div className={this.state.themeMode}>
          <div className='container'>
            <Header themeMode={this.state.themeMode} changeTheme={this.changeTheme}/>
            <Route exact path='/' render = {props => (
              <div>
                <br/>
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
