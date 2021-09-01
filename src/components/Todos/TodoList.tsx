import { Box, Button, Card, CardContent, CardActions, Typography, makeStyles, createStyles, Theme, colors, Accordion, AccordionSummary, AccordionDetails, ListItemIcon, Badge } from '@material-ui/core'
import { ExpandMore, List } from '@material-ui/icons';
import React, { JSXElementConstructor } from 'react';
import { makeTodoProps, TodoListProps } from '../../types/Todo';
import Todo from './Todo';

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
  })
);

const TodoList: JSXElementConstructor<TodoListProps> = (props: TodoListProps) => {
    const {todoList} = props;
    const incompleteTodos = todoList.todos ? todoList.todos.filter(todo => !todo.isComplete) : [];
    const classes = useStyles(props);

    return (
        <Card className={classes.root}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h5" className={classes.title} color="textSecondary" gutterBottom>
                {todoList.title}
                </Typography>
                <Badge badgeContent={incompleteTodos.length} color="secondary">
                  <List />
                </Badge>
              </Box>
            </CardContent>
                {
                  todoList.todos &&
                  todoList.todos.map(
                    todo => {
                      const props = makeTodoProps(todo, todoList.color);
                      return <Todo key={props.id} {...props} />
                    }
                  )
                }
        </Card>
    )
}

export default TodoList
