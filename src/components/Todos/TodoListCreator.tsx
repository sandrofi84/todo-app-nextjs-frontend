import React, { useState } from 'react';
import { 
    Box, 
    Button,
    Card, 
    CardContent, 
    colors, 
    createStyles, 
    makeStyles, 
    Theme, 
    Typography 
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import FormTodoList from '../Form/FormAddList';

interface Props {
    isOpen: boolean
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) => 
    createStyles({
    root: {
      backgroundColor: colors.grey[200],
      "&:hover": {
        backgroundColor: colors.grey[100]
      }
    },
    icon: {
        color: colors.grey[500],
        transition: ".5s",
        transform: ({isOpen}) => isOpen ? "rotate(45deg)" : "none",
    },
    button: {
        width: "100%"
    },
    title: {
      color: "#000"
    },
  })
);

const TodoListCreator = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const classes = useStyles({isOpen});

    return (
        <Card className={classes.root}>
            <CardContent>
                <Button className={classes.button} onClick={() => setIsOpen(prev => !prev) }>
                    <Box 
                    display="flex" 
                    flexDirection="column" 
                    alignItems="center" 
                    justifyContent="center">
                            <AddCircle className={classes.icon} fontSize="large" />
                    </Box>
                </Button>
                {
                    isOpen &&
                    <FormTodoList />
                }
            </CardContent>
        </Card>
    )
}

export default TodoListCreator
