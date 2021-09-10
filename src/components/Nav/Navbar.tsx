import React, { useContext, useState } from 'react';
import { 
    createStyles, 
    makeStyles, 
    Theme, 
    IconButton, 
    useMediaQuery, 
    useTheme 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import StateContext from '../../context/StateContext';
import NavLoggedInUser from './NavLoggedInUser';
import NavMenu from './NavMenu';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            height: "100%",
        },
        menuIcon: {
            color: theme.palette.primary.contrastText
            }
        })
);

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();
    const {userIsLoggedIn, user} = useContext(StateContext);

    const handleClick = () => {
        setIsOpen(prev => !prev)
    };

    return (
        <nav className={classes.root}>
            <NavMenu isMobile={isMobile} isOpen={isOpen} />
            <NavLoggedInUser isLoggedIn={userIsLoggedIn} name={user.displayName} picture={user.profilePicture}/>
            {
                isMobile &&
                <IconButton edge="end" onClick={handleClick}>
                    <MenuIcon className={classes.menuIcon} fontSize="large" />
                </IconButton>
            }
        </nav>
    )
}

export default Navbar
