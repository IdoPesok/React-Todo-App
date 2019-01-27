import React, { Component } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import uuid from 'uuid';
import './App.css';


class App extends Component {
    state = {
        todos: []
    }

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(), 
            title: title,
            completed: false
        }
        const updatedTodos = this.state.todos
        updatedTodos.push(newTodo)

        this.setState({ todos: updatedTodos  })
    }

    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }

            return todo
        })})
        console.log(this.state.todos)
    }

    deleteTodo = (id) => {
        this.setState({ todos: this.state.todos.filter((todo) => {
            return todo.id !== id
        })})
    }

    render() {
        return (
            <div className="App">
                <Header />
                <AddTodo addTodo={ this.addTodo }/>
                <Todos todos={ this.state.todos } markComplete={ this.markComplete } deleteTodo={ this.deleteTodo }/>
            </div>
        );
    }
}


export default App;
