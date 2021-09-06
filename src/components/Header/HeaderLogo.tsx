import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {createStyles, makeStyles, Theme, Button, Box} from '@material-ui/core';
import myLogo from '../../public/my-logo.svg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: "100%",
            color: theme.palette.primary.contrastText,
        },
        button: {
            height: "100%"
        },
        logo: {
            height: "100%",
            filter: "invert()",
        },
    })
);

const HeaderLogo = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.button}>
                <Link href="/">
                    <a>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Image className={classes.logo} src={myLogo} layout="intrinsic" height={50} alt="home" />
                        </Box>
                    </a>
                </Link>
            </Button>
        </div>
    )
}

export default HeaderLogo
