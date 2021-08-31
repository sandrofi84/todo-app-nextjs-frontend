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
    const { user } = useContext(StateContext);
    const appDispatch = useContext(DispatchContext);

    const handleLogout = () => {
        appDispatch({type: "showAlert", alert: {severity: AlertSeverity.INFO, message: "You logged out! 🤷‍♂️"}});
        appDispatch({type: "logout"});
    }

    return (
        <Box display="flex" flexDirection="row" alignItems="center">
            <Typography color="textSecondary">{user.name}</Typography>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => ""}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            <Button className={classes.button} onClick={handleLogout}>LOGOUT</Button>
        </Box>
    )
}

export default NavDashboardLoggedIn