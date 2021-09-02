import React, { SyntheticEvent, useContext } from 'react';
import { Box, Button, ButtonGroup, makeStyles, createStyles, Theme, colors } from '@material-ui/core'
import { AddCircle, DeleteForever } from '@material-ui/icons';
import DispatchContext from '../../context/DispatchContext';
import Axios from 'axios';
import StateContext from '../../context/StateContext';
import TodoListCreator from './TodoListCreator';

const useStyles = makeStyles<Theme>((theme: Theme) => 
    createStyles({
        root: {
            width: "100%",
            transform: "translateY(-8px)"
        },
        button: {
            width: "100%",
            backgroundColor: colors.grey[300],
            "&:hover": {
                backgroundColor: colors.grey[100]
            }
        },
    })
);

const TodoListControls = ({todoListId}) => {

    const classes = useStyles();
    const { user: { token } } = useContext(StateContext);
    const appDispatch = useContext(DispatchContext);

    const handleDelete = async (): Promise<void> => {

        const headers = {
            "Authorization": `Bearer ${token}`
        }
        
        try {
            const response = await Axios.delete(`${process.env.API_URL}/todo-lists/${todoListId}`, {headers});
            if (response.status === 204) appDispatch({type: "updateTodoLists"});
        } catch(err) {
            console.log(err);
        }
    };


    return (
            <ButtonGroup className={classes.root} variant="contained">
                <Button className={classes.button} onClick={handleDelete}>
                    <DeleteForever/>
                </Button>
                <Button className={classes.button}>
                    <AddCircle/>
                </Button>
            </ButtonGroup>
    )
}

export default TodoListControls
