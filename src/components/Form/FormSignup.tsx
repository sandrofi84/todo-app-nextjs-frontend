import React, { useReducer, SyntheticEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Axios from 'axios';
import Form from './Form';
import { useRouter } from 'next/dist/client/router';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    form: {
      "& > div": {
        paddingBottom: "10px"
      }
    }
  })
);

const FormSignup = () => {

    const classes = useStyles();
    const router = useRouter();

    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({...state, ...newState}), 
        {
            username: "",
            email: "",
            password: ""
        }
    );

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
            const response = await Axios.post(`${process.env.API_URL}/signup/`, formInput);
            if (response.status === 200) router.push("/login");
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <Form className={classes.form} formInput={formInput} handleChange={handleChange} handleSubmit={handleSubmit} label="SIGN UP" />
    )
}

export default FormSignup
