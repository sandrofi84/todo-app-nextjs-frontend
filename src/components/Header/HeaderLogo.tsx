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
                        <Image className={classes.logo} src={myLogo} height={50} alt="" />
                    </a>
                </Link>
            </Button>
        </div>
    )
}

export default HeaderLogo
