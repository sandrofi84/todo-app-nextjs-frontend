import { createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: "100%",
            height: "60px",
            backgroundColor: theme.palette.primary.dark,
            textAlign: "center",
        }
    })
);

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            This is Footer
        </footer>
    )
}

export default Footer
