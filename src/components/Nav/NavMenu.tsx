import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import React, { useContext } from 'react'
import StateContext from '../../context/StateContext'
import NavDashboard from './NavDashboard'
import NavLinks from './NavLinks'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        menu: {
            display: "flex",
            flexDirection: "row",
            color: theme.palette.primary.contrastText
        },
        menuMobile: {
            display: "none",
            zIndex: 1000,
            position: "absolute",
            top: "70px",
            right: "5%",
            width: "90%",
            padding: "20px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.light
        },
    })
);

const NavMenu = ({isMobile, isOpen}) => {
    const {userIsLoggedIn} = useContext(StateContext);
    const classes = useStyles();

    const menuStyle = !isOpen ? {} : {display: "flex"}

    return (
        <Box className={isMobile ? classes.menuMobile : classes.menu} style={menuStyle}>
            <NavLinks isLoggedIn={userIsLoggedIn} />
            <NavDashboard isLoggedIn={userIsLoggedIn} />
        </Box>
    )
}

export default NavMenu
