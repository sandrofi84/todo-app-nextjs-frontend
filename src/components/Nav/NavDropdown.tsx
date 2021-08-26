import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Box, Grow, Button, makeStyles, Paper, Popper, MenuList, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      height: "100%"
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    menuList: {
        display: "flex",
        flexDirection: "column"
    }
  })
);

export default function NavDropdown({children, label, href, className}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
      <Box 
      className={classes.root}
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}>
        <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        className={className}
        >
            { href ?
            <Link href={href}>
                <a href={href}>{label}</a>
            </Link>
            :
            label
            }
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
            <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
            <Paper>
              <MenuList className={classes.menuList} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} variant="menu">
                  {children}
              </MenuList>
            </Paper>
            </Grow>
        )}
        </Popper>
    </Box> 
  );
}