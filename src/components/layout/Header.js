import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Toggle from '../Toggle'

class Header extends Component{
        
    render() {

        return (
            <header id='header' >  
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
                    <Grid>
                        <Toggle darkMode={this.props.darkMode} changeTheme={this.props.changeTheme}/>
                    </Grid>

                </Grid>
            </header>
        )
    }
}

export default Header