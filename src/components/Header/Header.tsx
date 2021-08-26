import React from 'react';
import Navbar from '../Nav/Navbar';
import {createStyles, makeStyles, Theme} from '@material-ui/core'
import HeaderLogo from './HeaderLogo';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            width: "100%",
            height: "60px",
            backgroundColor: theme.palette.primary.main,
        }
    })
);

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <HeaderLogo/>
            <Navbar/>
        </header>
    )
}

export default Header;
