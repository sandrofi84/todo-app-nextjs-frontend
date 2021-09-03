import { Box, IconButton, Typography } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import React from 'react'

const LoggedInUser = ({name, isLoggedIn}) => {

    if (!isLoggedIn) return null;

    return (
        <Box>
            <Typography color="textSecondary">{name}</Typography>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => ""}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
        </Box>
    )
}

export default LoggedInUser
