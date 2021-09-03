import { Box, Button } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import oauthIcons from '../../public/images/logos';
import { useStyles } from './form-oauth-providers';

const FormOauthLoginButton = ({provider, authLink}) => {
    const classes = useStyles();

    return (
        <Box marginTop="10px">
            <Button className={classes[provider]} variant="contained" startIcon={<Image src={oauthIcons[provider]} width={25} height={25} alt="icon" />}>
                <a href={authLink}>LOGIN WITH {provider}</a>
            </Button>
        </Box>
    )
}

export default FormOauthLoginButton
