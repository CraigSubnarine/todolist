import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import Toggle from '../Toggle'

class Header extends Component{
        
    render() {
        // this.props.changeTheme()
        return (
            <header style={headerStyle}>
                <div>
                    <h1>TodoList</h1>
                </div>
                <div>
                    <Link to='/' style={linkStyle}>Home</Link> 
                    | 
                    <Link to='/about' style={linkStyle}>About</Link>
                </div>
                <div>
                    <Toggle darkMode={this.props.darkMode} changeTheme={this.props.changeTheme}/>
                </div>
            </header>
        )
    }
}

const headerStyle = {
    background: '#333',
    color:'#fff',
    textAlign: 'center',
    padding: '20px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header