import React, { useContext, useState } from 'react';
import NavItem from './NavItem';
import { createStyles, makeStyles, Theme, Box, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {links, makeProps, HeaderLinkProps, HeaderLink} from '../Header/header-links';
import StateContext from '../../context/StateContext';
import NavDashboardLoggedOut from './NavDashboardLoggedOut';
import NavDashboardLoggedIn from './NavDashboardLoggedIn';
import LoggedInUser from './LoggedInUser';
import NavLinks from './NavLinks';
import NavDashboard from './NavDashboard';
import NavMenu from './NavMenu';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
        },
        menuIcon: {
            color: theme.palette.primary.contrastText
            }
        })
);

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();
    const {userIsLoggedIn, user} = useContext(StateContext);

    const handleClick = () => {
        setIsOpen(prev => !prev)
    };

    return (
        <nav className={classes.root}>
            <NavMenu isMobile={isMobile} isOpen={isOpen} />
            <LoggedInUser isLoggedIn={userIsLoggedIn} name={user.name} />
            {
                isMobile &&
                <IconButton edge="end" onClick={handleClick}>
                    <MenuIcon className={classes.menuIcon} fontSize="large" />
                </IconButton>
            }
        </nav>
    )
}

export default Navbar
