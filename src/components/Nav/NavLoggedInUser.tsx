import { Box, createStyles, IconButton, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "45px",
      marginLeft: "12px",
      paddingLeft: "12px",
      paddingRight: "12px",
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.main
    },
    icon: {
      color: theme.palette.primary.contrastText
    },
    pictureContainer: {
      marginLeft: "10px",
      height: "35px",
      width: "35px",
      borderRadius: "50%",
      overflow: "hidden"
    },
    picture: {
      width: "100%"
    }
  })
);

const NavLoggedInUser = ({ name, picture, isLoggedIn }) => {
  const classes = useStyles();

  if (!isLoggedIn) return null;

  return (
    <Link href="/profile">
      <a>
        <Paper className={classes.root}>
          <Box display="flex" flexDirection="row" alignItems="center" height="100%">
            <Typography color="textSecondary">{name}</Typography>
            {picture ? (
              <Box className={classes.pictureContainer}>
                <Image className={classes.picture} src={picture} alt={name} width={35} height={35} />
              </Box>
            ) : (
              <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={() => ""}>
                <AccountCircle className={classes.icon} />
              </IconButton>
            )}
          </Box>
        </Paper>
      </a>
    </Link>
  );
};

export default NavLoggedInUser;
