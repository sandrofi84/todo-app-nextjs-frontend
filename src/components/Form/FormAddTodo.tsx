import React, { useState, useEffect, useRef, useReducer, SyntheticEvent, useContext } from 'react';
import { Box, Button, createStyles, FormControl, FormHelperText, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Theme } from '@material-ui/core';
import Axios from 'axios';
import Form from './Form';
import { TodoListColor, todoListColorArray } from '../../types/Todo';
import StateContext from '../../context/StateContext';
import DispatchContext from '../../context/DispatchContext';
import { AlertSeverity } from '../../types/Alert';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
        padding: "5px",
        marginBottom: "8px"
    },
    form: {
      "& > div": {
        paddingBottom: "10px"
      }
    },
  })
);

const FormAddTodo = ({todoListId, setIsOpen}) => {
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
            if (response.status === 200) {
                appDispatch({type: "updateTodoLists"});
                appDispatch({type: "showAlert", alert: {severity: AlertSeverity.SUCCESS, message: "New Todo Created! 👏"}});
                setIsOpen(false);
            };
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <Paper className={classes.root}>
            <Form className={classes.form} 
                formInput={formInput} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                label="CREATE TODO" />
        </Paper>
    )
}

export default FormAddTodo