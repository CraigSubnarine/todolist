import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class NavBar extends Component{
        
    render() {

        return (
            <div id='navbar' >  
                <Grid container justify='space-between'>
                    <Grid>
                        <Button color="primary">
                            <Link to='/' className='link'>Home</Link>                    
                        </Button>
                    </Grid>
                    <Grid>
                        <Button color="primary">
                            <Link to='/about'className='link'>About</Link>                    
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default NavBar