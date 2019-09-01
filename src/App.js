// I set out to complete the objectives of the project, and while doing so I gained more knowledge and a better understanding of React.

// While considering the possibilities of the application I have found that Redux would have been a more applicable choice if the application needed to be scaled. For the purposes of this application handling state with basic react was sufficient.

// I have also come to appreciate cookies and their importance in small web applications. Mainly the ease of use as well as the ability to set an expiration date to them. 
// I was able to store the todo-list data as well and the theme setting so the user would be able to refresh or re-open the application and find it the way they left it. While doing so the problem with "setState" not updating the state of the application on time as found and resolved using a callback function.

// This is my 1st time working with Material-UI and it has shown me that I need more practice with UI elements. I fount it was a bit easier to use compared to the Bootstrap 

// An about page was made just to use Routes in React. 

// In the testing branch, I tried to use a restAPI from https://jsonplaceholder.typicode.com/ but ran into problems due to CORS protocols. 

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
