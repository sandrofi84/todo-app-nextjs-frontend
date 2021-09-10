import { createStyles, makeStyles, Theme } from "@material-ui/core"

export const oauthProviders: OauthProvider[] = [
    {
        name: "facebook",
        authLink: `https://www.facebook.com/v11.0/dialog/oauth?response_type=code&redirect_uri=${process.env.OAUTH_REDIRECT_URI}/facebook&scope=email&client_id=${process.env.FACEBOOK_CLIENT_ID}` 
    },
    {
        name: "instagram",
        authLink: `https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_CLIENT_ID}&redirect_uri=${process.env.OAUTH_REDIRECT_URI}/instagram&scope=user_profile,user_media&response_type=code` 
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
        },
        instagram: {
            color: '#fff',
            backgroundColor: '#000',
            '&:hover': {
                backgroundColor: '#606060',
            }
        }
    })
);