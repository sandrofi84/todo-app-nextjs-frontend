import { Box, Button, Typography, makeStyles, createStyles, Theme, colors, Accordion, AccordionSummary, AccordionDetails, ListItemIcon, Badge } from '@material-ui/core'
import { List, AddCircle, DeleteForever } from '@material-ui/icons';
import React, { JSXElementConstructor } from 'react';
import { makeTodoProps, TodoListProps } from '../../types/Todo';
import Todo from './Todo';
import TodoListControls from './TodoListControls';

const useStyles = makeStyles<Theme, TodoListProps>((theme: Theme) => 
    createStyles({
    root: {
      backgroundColor: (props) => props.todoList.color 
      ? colors[props.todoList.color]["A200"] 
      : theme.palette.secondary.light,
      "&:hover": {
        backgroundColor: (props) => props.todoList.color 
        ? colors[props.todoList.color]["A700"] 
        : theme.palette.secondary.light,
      }
    },
    title: {
      color: "#000"
    },
    head: {
      "& > .MuiAccordionSummary-expandIcon": {
        transform: "none"
      }
    },
    list: {
      display: "flex",
      flexDirection: "column"
    },
    button: {
      width: "48%",
      margin: "1%",
      backgroundColor: colors.grey[300],
      "&:hover": {
        backgroundColor: colors.grey[100]
      }
    },
  })
);

const TodoList: JSXElementConstructor<TodoListProps> = (props: TodoListProps) => {
    const {todoList} = props;
    const incompleteTodos = todoList.todos ? todoList.todos.filter(todo => !todo.isComplete) : [];
    const classes = useStyles(props);

    return (
      <Accordion className={classes.root}>
        <AccordionSummary
        className={classes.head}
        expandIcon={<Badge badgeContent={incompleteTodos.length} color="secondary"><List /></Badge>}
        aria-controls=""
        id={todoList.id}
        >
          <Typography variant="h5" className={classes.title} color="textSecondary" gutterBottom>
            {todoList.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.list}>
          <TodoListControls todoListId={todoList.id} />
          
        {
          todoList.todos &&
          todoList.todos.map(
            todo => {
              const props = makeTodoProps(todo, todoList.color);
              return <Todo key={props.id} {...props} />
            }
          )
        }
        </AccordionDetails>
      </Accordion>
    )
}

export default TodoList
