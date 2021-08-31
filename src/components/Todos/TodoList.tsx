import { Button, Card, CardContent, CardActions, Typography, makeStyles, createStyles, Theme } from '@material-ui/core'
import React, { JSXElementConstructor } from 'react';
import { TodoListProps } from '../../types/Todo';

const useStyles = makeStyles<Theme, TodoListProps>((theme: Theme) => 
    createStyles({
    root: {
      minWidth: 275,
      backgroundColor: (props) => props.todoList.color ? props.todoList.color : theme.palette.secondary.light,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      color: "#000"
    },
    pos: {
      marginBottom: 12,
    },
  })
);

const TodoList: JSXElementConstructor<TodoListProps> = (props: TodoListProps) => {
    const {todoList} = props;
    const classes = useStyles(props);
    const bull = <span className={classes.bullet}>•</span>;



    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                {todoList.title}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Number of Todos: {todoList.todos.length}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default TodoList
