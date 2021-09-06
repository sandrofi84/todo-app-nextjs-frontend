import { createStyles, makeStyles, Theme } from "@material-ui/core"

export const oauthProviders: OauthProvider[] = [
    {
        name: "facebook",
        authLink: `https://www.facebook.com/v11.0/dialog/oauth?response_type=code&redirect_uri=${process.env.OAUTH_REDIRECT_URI}/facebook&scope=email&client_id=${process.env.OAUTH_CLIENT_ID}` 
    }
]

export interface OauthProvider {
    name: string,
    authLink: string
}

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        facebook: {
            color: '#fff',
            backgroundColor: '#4267B2',
            '&:hover': {
                backgroundColor: '#597ec9',
            }
        }
    })
);