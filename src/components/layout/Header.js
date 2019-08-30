import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

import Toggle from '../Toggle'

class Header extends Component{
        
    render() {

        return (
            <header>  
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand >TodoList</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to='/' style={linkStyle}>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to='/about' style={linkStyle}>About</Link>    
                    </Nav.Link>
                    </Nav>
                    <Toggle darkMode={this.props.darkMode} changeTheme={this.props.changeTheme}/>
                </Navbar>
            </header>
        )
    }
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header