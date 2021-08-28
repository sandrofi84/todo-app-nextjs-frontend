import React from 'react';
import { Box } from '@material-ui/core';
import NavItem from './NavItem';

const NavDashboardLoggedOut = () => {
    return (
        <Box display="flex" flexDirection="row">
            <NavItem href="/login" label="login"/>
            <NavItem href="/signup"label="sign up"/>
        </Box>
    )
}

export default NavDashboardLoggedOut
