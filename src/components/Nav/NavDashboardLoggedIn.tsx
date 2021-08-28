import React, { useContext } from 'react';
import { Box, Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import DispatchContext from '../../context/DispatchContext';
import StateContext from '../../context/StateContext';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        greeting: {
            marginRight: "20px"
        },
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

    const handleClick = () => {
        appDispatch({type: "logout"})
    }

    return (
        <Box display="flex" flexDirection="row" alignItems="center">
            <Typography className={classes.greeting} color="textSecondary">Welcome, {user.name}</Typography>
            <Button className={classes.button} onClick={handleClick}>LOGOUT</Button>
        </Box>
    )
}

export default NavDashboardLoggedIn