import { Button, Card, CardContent, CardActions, Typography, makeStyles, createStyles, Theme } from '@material-ui/core'
import React, { JSXElementConstructor } from 'react';
import { TodoListProps } from '../../types/Todo';

const useStyles = makeStyles<Theme, TodoListProps>((theme: Theme) => 
    createStyles({
    root: {
      minWidth: 275,
      backgroundColor: (props) => props.color ? props.color : theme.palette.secondary.light,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

const TodoList: JSXElementConstructor<TodoListProps> = (props: TodoListProps) => {
    const {title, todos} = props;
    const classes = useStyles(props);
    const bull = <span className={classes.bullet}>•</span>;



    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                {title}
                </Typography>
                <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default TodoList
