import React from 'react';
import Navbar from '../Nav/Navbar';
import {AppBar, Toolbar, createStyles, makeStyles, Theme} from '@material-ui/core'
import HeaderLogo from './HeaderLogo';



const Header = () => {


    return (
        <AppBar>
            <Toolbar variant="dense">
                <HeaderLogo/>
                <Navbar/>
            </Toolbar>
        </AppBar>

    )
}

export default Header;
