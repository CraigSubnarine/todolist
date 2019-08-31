import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

import Toggle from '../Toggle'
import NavBar from './NavBar'

class Header extends Component{
        
    render() {

        return (
            <header id='header' >  
                <Grid container justify='space-between'>
                    <Grid>
                        <NavBar/>
                    </Grid>
                    <Grid>
                        <Toggle themeMode={this.props.themeMode} changeTheme={this.props.changeTheme}/>
                    </Grid>

                </Grid>
            </header>
        )
    }
}

export default Header