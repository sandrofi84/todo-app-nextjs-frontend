import { 
    Box, 
    createStyles, 
    IconButton, 
    makeStyles, 
    Paper, 
    Theme, 
    Typography 
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: "45px",
            marginLeft: "12px",
            paddingLeft: "12px",
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.secondary.main
        },
        icon: {
            color: theme.palette.primary.contrastText,
        }
    }))

const NavLoggedInUser = ({name, isLoggedIn}) => {

    const classes = useStyles();

    if (!isLoggedIn) return null;

    return (
        <Paper className={classes.root}>
            <Box display="flex" flexDirection="row" alignItems="center">
                <Typography color="textSecondary">{name}</Typography>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => ""}
                >
                    <AccountCircle className={classes.icon} />
                </IconButton>
            </Box>
        </Paper>
    )
}

export default NavLoggedInUser
