import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import StateContext from '../../context/StateContext';
import TodoList from './TodoList';
import TodoListCreator from './TodoListCreator';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: "100%",
            paddingTop: "40px",
            paddingLeft: "clamp(10px, 3vw, 400px)",
            paddingRight: "clamp(10px, 3vw, 400px)"
        }
    })
);

const TodosPool = () => {

    const { todoLists } = useContext(StateContext);
    const classes = useStyles();

    return (
        <Grid className={classes.root} container direction="row" spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <TodoListCreator />
            </Grid>
            {
                todoLists.length ?

                todoLists.map(
                    todoList => (
                    <Grid key={todoList.id} item xs={12} sm={6} md={4} lg={3}>
                        <TodoList todoList={todoList} />
                    </Grid>
                    )
                )

                :

                "You don't have any todos yet"
            }
        </Grid>
    )
}

export default TodosPool