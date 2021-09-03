import React from 'react';
import { Box } from '@material-ui/core';
import NavItem from './NavItem';

const NavDashboardLoggedOut = () => {
    return (
        <>
            <NavItem href="/login" label="login"/>
            <NavItem href="/signup"label="sign up"/>
        </>
    )
}

export default NavDashboardLoggedOut
