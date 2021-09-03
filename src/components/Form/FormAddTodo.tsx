import React, { useState, useEffect, useRef, useReducer, SyntheticEvent, useContext } from 'react';
import { Box, Button, createStyles, FormControl, FormHelperText, InputLabel, makeStyles, MenuItem, Select, TextField, Theme } from '@material-ui/core';
import Axios from 'axios';
import Form from './Form';
import { TodoListColor, todoListColorArray } from '../../types/Todo';
import StateContext from '../../context/StateContext';
import DispatchContext from '../../context/DispatchContext';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    form: {
      "& > div": {
        paddingBottom: "10px"
      }
    },
  })
);

const FormAddTodo = ({todoListId}) => {
    const classes = useStyles();
    const { user: {token} } = useContext(StateContext);
    const appDispatch = useContext(DispatchContext);

    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({...state, ...newState}), 
        {
            title: "",
            description: ""
        }
    );

    const handleChange = (e): void => {
        const field = e.target.name;
        const newValue = e.target.value;

        setFormInput({
            [field]: newValue,
        })
    }

    const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
        e.preventDefault();

        const headers = {
            "Authorization": `Bearer ${token}`
        }
        
        try {
            const response = await Axios.post(`${process.env.API_URL}/todos`, {title: formInput.title, desc: formInput.description, isComplete: false, todoListId}, {headers});
            if (response.status === 200) appDispatch({type: "updateTodoLists"});
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <Form className={classes.form} 
            formInput={formInput} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            label="CREATE TODO" />
    )
}

export default FormAddTodo