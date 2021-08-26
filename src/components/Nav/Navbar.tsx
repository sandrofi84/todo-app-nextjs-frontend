import React from 'react';
import NavItem from './NavItem';
import { createStyles, makeStyles, Theme, Box } from '@material-ui/core';
import {links, makeProps, HeaderLinkProps, HeaderLink} from '../Header/header-links';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "100%"
        },
    })
);

const Navbar = () => {
    const classes = useStyles();
    return (
        <nav className={classes.root}>
            <Box display="flex" flexDirection="row">
                {
                    links.map(
                        (link: HeaderLink) => {
                            const props: HeaderLinkProps = makeProps(link);

                            if (!props.isDropdown) {
                                return <NavItem key={props.label} {...props} />
                            } else {
                                return (
                                <NavItem key={props.label} {...props}>
                                    {link.subLinks.map(
                                        (sublink: HeaderLink) => {
                                            const props: HeaderLinkProps = makeProps(sublink);

                                            return <NavItem key={props.label} {...props} darkText={true}/>
                                        }
                                    )}
                                </NavItem>
                                )
                            }
                        }
                    )
                }
            </Box>
            <Box display="flex" flexDirection="row">
                <NavItem href="/login" label="login"/>
                <NavItem href="/signup"label="sign up"/>
            </Box>
        </nav>
    )
}

export default Navbar
