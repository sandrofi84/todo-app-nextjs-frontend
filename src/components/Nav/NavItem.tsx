import React from 'react';
import NavDropdown from './NavDropdown';
import NavLink from './NavLink';
import {Button, makeStyles, createStyles, Theme} from '@material-ui/core';

export interface NavItemProps {
    children?: JSX.Element | JSX.Element[],
    isLink?: boolean,
    isDropdown?: boolean,
    href?: string,
    label: string,
    darkText?: boolean,
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        button: {
            height: "100%",
        },
        buttonDarkText: {
            color: theme.palette.secondary.dark
        },
    })
);

const NavItem = ({children, isDropdown, href, label, darkText}: NavItemProps) => {
    const classes = useStyles();

    if (isDropdown) return <NavDropdown className={darkText ? classes.buttonDarkText : classes.button} href={href} label={label}>{children}</NavDropdown>

    return <NavLink className={darkText ? classes.buttonDarkText : classes.button} href={href}>{label}</NavLink>
                
}

export default NavItem
