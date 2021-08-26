import React, { useState, useEffect, useRef, useReducer, SyntheticEvent, useContext } from 'react';
import { Box, Button, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import Axios from 'axios';
import Form from './Form';
import { useRouter } from 'next/dist/client/router';
import {User} from '../../types/User';
import DispatchContext from '../../context/DispatchContext';

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
        let user;

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
    }

    const handleChange = (e: SyntheticEvent): void => {
        const field = (e.target as HTMLInputElement).name;
        const newValue = (e.target as HTMLInputElement).value;

        setFormInput({
            [field]: newValue,
        })
    }

    const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
        e.preventDefault();
        
        try {
            const response = await Axios.post(`${process.env.API_URL}/users/login/`, formInput);

            if (response.status === 200 && response.data?.token) {
                const {token} = response.data;
                localStorage.setItem("todosToken", token);

                const user: User = await getUser(token);

                if (user) {
                    localStorage.setItem("todosUser", JSON.stringify(user));
                    appDispatch({type: "setUser"})
                    router.push("/");
                }
            }
        } catch(err) {
            console.log(err.message);
        }
    }

    return (
        <Form className={classes.form} formInput={formInput} handleChange={handleChange} handleSubmit={handleSubmit} label="LOGIN" />
    )
}

export default FormLogin
