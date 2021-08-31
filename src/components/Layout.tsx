import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core';
import Footer from './Footer';
import Header from './Header/Header';
import FlashAlerts from './FlashAlerts';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            paddingTop: "120px"
        }
    })
);

const Layout = ({children}) => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <main className={classes.main}>
                {children}
            </main>
            <Footer />
            <FlashAlerts />
        </>
    )
}

export default Layout
