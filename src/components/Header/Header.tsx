import React from 'react';
import Navbar from '../Nav/Navbar';
import { AppBar, Toolbar } from '@material-ui/core';
import HeaderLogo from './HeaderLogo';



const Header = () => {


    return (
        <AppBar>
            <Toolbar>
                <HeaderLogo/>
                <Navbar/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
