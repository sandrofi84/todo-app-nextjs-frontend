import React, { useContext } from 'react';
import { createStyles, makeStyles, Snackbar, Theme } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import StateContext from '../context/StateContext';
import DispatchContext from '../context/DispatchContext';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            bottom: "120px"
        }
    })
);

const FlashAlerts = () => {

    const classes = useStyles();

    const { alert, alertIsVisible } = useContext(StateContext);
    const appDispatch = useContext(DispatchContext);

    const handleClose = () => {
        appDispatch({type: "hideAlert"});
    };

    return (
        <Snackbar 
        className={classes.root} 
        open={alertIsVisible} 
        autoHideDuration={3500} 
        onClose={handleClose}>
            <Alert elevation={6} variant="filled" severity={alert.severity}>
                {alert.message}
            </Alert>
        </Snackbar>
    )
}

export default FlashAlerts
