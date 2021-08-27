import { Box, Button } from '@material-ui/core'
import React from 'react'

const FormOauthLoginButton = ({provider, handleClick}) => {
    const link = `https://www.facebook.com/v3.2/dialog/oauth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F/login&scope=email&client_id=618026915852607`
    
    return (
        <Box marginTop="10px">
            <Button variant="contained" >
                <a href="https://www.facebook.com/v3.2/dialog/oauth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F/login/facebook&scope=email&client_id=618026915852607">LOGIN WITH {provider}</a>
            </Button>
        </Box>
    )
}

export default FormOauthLoginButton
