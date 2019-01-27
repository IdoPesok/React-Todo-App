import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    onChange = (e) => {
        this.setState({ title: e.target.value })
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit } style={ formStyle }>
                <input value={ this.state.title } onChange={ this.onChange } style={ inputStyle } type="text" name="title" placeholder="Add Todo..."/>
                <input style={ submitStyle } type="submit" value="Submit"/>
            </form>
        )
    }
}

const formStyle = {
    height: '40px',
    marginBottom: '40px'
}

const inputStyle = {
    width: '90%',
    float: 'left',
    height: '100%',
    background: '#ecf0f1',
    color: 'black',
    paddingLeft: '20px',
    border: '0'
}

const submitStyle = {
    cursor: 'pointer',
    background: '#353b48',
    height: '100%',
    width: '10%',
    float: 'right',
    color: 'white',
    border: '0',
    outline: '0'
}

export default AddTodo;
