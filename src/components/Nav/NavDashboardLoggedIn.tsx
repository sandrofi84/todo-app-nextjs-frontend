import React, { useContext } from 'react';
import { Button, createStyles, makeStyles, Theme} from '@material-ui/core';
import DispatchContext from '../../context/DispatchContext';
import { AlertSeverity } from '../../types/Alert';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            height: "100%",
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

    return <Button className={classes.button} onClick={handleLogout} color="inherit">LOGOUT</Button>
}

export default NavDashboardLoggedIn