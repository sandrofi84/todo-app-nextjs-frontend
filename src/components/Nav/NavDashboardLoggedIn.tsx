import React, { useContext } from 'react';
import { Box, Button, IconButton, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import DispatchContext from '../../context/DispatchContext';
import StateContext from '../../context/StateContext';
import { AlertSeverity } from '../../types/Alert';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            height: "100%",
            color: theme.palette.primary.contrastText
        }
    })
);

const NavDashboardLoggedIn = () => {
    const classes = useStyles();
    const appDispatch = useContext(DispatchContext);

    const handleLogout = () => {
        appDispatch({type: "showAlert", alert: {severity: AlertSeverity.INFO, message: "You logged out! 🤷‍♂️"}});
        appDispatch({type: "logout"});
    }

    return <Button className={classes.button} onClick={handleLogout}>LOGOUT</Button>
}

export default NavDashboardLoggedIn