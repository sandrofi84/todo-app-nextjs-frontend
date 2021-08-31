import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {createStyles, makeStyles, Theme, Button} from '@material-ui/core'
import myLogo from '../../public/my-logo.svg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "inline-block",
            height: "100%",
            color: theme.palette.primary.contrastText,
            "&:hover": {
                "&::after": {
                    content: '"Home"',
                    position: 'absolute',
                    transform: "translate(-50px,50px)",
                    color: "#000",
                    backgroundColor: "#FFFF00"
                },
            },
        },
        logo: {
            height: "100%",
            filter: "invert()",
        }
    })
);

const HeaderLogo = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button>
                <Link href="/">
                    <a>
                        <Image className={classes.logo} src={myLogo} height={50} alt="home" />
                    </a>
                </Link>
            </Button>
        </div>
    )
}

export default HeaderLogo
