import React from 'react';

function Header() {
    return (
        <div style={ headerStyle }>
            <h1>My Todo List</h1>
        </div>
    )
}

const headerStyle = {
    textAlign: 'center',
    background: '#4b6584',
    color: 'white',
    padding: '20px'
}

export default Header
