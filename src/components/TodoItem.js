import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    getTextStyle = () => {
        return {
            cursor: 'pointer',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'left',
            float: 'left',
            lineHeight: '100px',
            fontSize: '20px',
            textTransform: 'uppercase',
            fontFamily: 'Baloo Thambi, cursive',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ containerStyle }>
                <p style={ this.getTextStyle() } onClick={ this.props.markComplete.bind(this, id) }>{ title }</p>
                <button onClick={ this.props.deleteTodo.bind(this, id) } style={ btnStyle }>x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#eb3b5a',
    color: 'white',
    border: '0',
    outline: '0',
    fontFamily: 'Baloo Thambi, cursive',
    fontSize: '20px',
    display: 'inline-block', 
    cursor: 'pointer',
    float: 'right',
    borderRadius: '25px',
    height: '50px',
    width: '50px',
    position: 'relative',
    top: '50%',
    transform: 'translatey(-50%)'
}

const containerStyle = {
    background: '#778ca3',
    color: 'white',
    padding: '0 20px',
    margin: '20px auto',
    height: '100px',
    width: "80%",
    borderRadius: "20px"
}


export default TodoItem;
