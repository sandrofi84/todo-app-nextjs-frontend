import React, { useCallback, useEffect, useRef, useReducer, SyntheticEvent, useContext } from 'react';
import { Box, Button, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import Axios, { CancelTokenSource } from 'axios';
import Form from './Form';
import { useRouter } from 'next/dist/client/router';
import {User, UserWithToken} from '../../types/User';
import DispatchContext from '../../context/DispatchContext';
import FormOauthLoginButton from './FormOauthLoginButton';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    form: {
      "& > div": {
        paddingBottom: "10px"
      }
    }
  })
);

const FormLogin = () => {
    const classes = useStyles();
    const appDispatch = useContext(DispatchContext);
    const router = useRouter();

    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({...state, ...newState}), 
        {
            email: "",
            password: ""
        }
    );

    const getUser = async (token: string): Promise<User> => {
        let user: User;

        const headers = {
            "Authorization": `Bearer ${token}`
        }

        try {
            const response = await Axios.get(`${process.env.API_URL}/whoAmI`, {headers});

            if (response.status === 200) user = response.data;

        } catch(err) {
            console.log(err.message);
        }

        return user;
    };

    const getUserAndRedirect = useCallback(async (accessToken: string): Promise<void> => {

        const user = await getUser(accessToken);

        if (user) {
            const userWithToken: UserWithToken = {...user, token: accessToken};
            appDispatch({type: "login", user: userWithToken});
            router.push("/");
        }
        // else display authentication failed
    }, [appDispatch, router]);

    const oauthAuthenticateAndLogin = useCallback(async (provider: string | string[], authCode: string | string[], cleanUpRef: CancelTokenSource) => {
        if (Array.isArray(provider)) provider = provider[0];
        if (Array.isArray(authCode)) authCode = authCode[0];

        try {
            const response = await Axios
                .get(
                    `${process.env.API_URL}/auth/thirdparty/${provider}/callback?code=${authCode}`, 
                    { cancelToken: cleanUpRef.token }
                    );
            
            const { status, data } = response;

            if (status === 200 && data?.token) {
                const {token} = response.data;
                
                getUserAndRedirect(token);
            }

        } catch(err) {
            console.log(err);
        }
    }, [getUserAndRedirect]);

    const handleClick = async (link: string): Promise<void> => {
        
        try {
            const response = await Axios.get(link);
            console.log(response);

        } catch(err) {
            console.log(err);
        }
    };

    const handleChange = (e: SyntheticEvent): void => {
        const field = (e.target as HTMLInputElement).name;
        const newValue = (e.target as HTMLInputElement).value;

        setFormInput({
            [field]: newValue,
        })
    };

    const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
        e.preventDefault();
        
        try {
            const response = await Axios.post(`${process.env.API_URL}/users/login/`, formInput);

            if (response.status === 200 && response.data?.token) {
                const {token} = response.data;

                getUserAndRedirect(token);
            }
        } catch(err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        const { code, provider } = router.query;
        let myRequest: CancelTokenSource;
        
        if (code) {
            myRequest = Axios.CancelToken.source();
            oauthAuthenticateAndLogin(provider, code, myRequest);
        }

        return () => {
            if (myRequest) myRequest.cancel();
        }
    }, [router.query, router, oauthAuthenticateAndLogin]);

    return (
        <>
            <Form className={classes.form} formInput={formInput} handleChange={handleChange} handleSubmit={handleSubmit} label="LOGIN" />
            <FormOauthLoginButton provider="facebook" handleClick={handleClick} />
        </>
    )
}

export default FormLogin
