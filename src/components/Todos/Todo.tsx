import { 
    Accordion, 
    AccordionDetails, 
    AccordionSummary, 
    alpha, 
    Checkbox, 
    colors, 
    createStyles, 
    FormControlLabel, 
    makeStyles, 
    Theme, 
    Typography 
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { CancelTokenSource } from 'axios';
import React, { 
    SyntheticEvent, 
    useContext, 
    useEffect, 
    useState 
} from 'react';
import usePrevious from '../../hooks/usePrevious';
import { TodoProps } from '../../types/Todo'
import { UserWithToken } from '../../types/User';
import Axios from 'axios';
import StateContext from '../../context/StateContext';
import DispatchContext from '../../context/DispatchContext';

const useStyles = makeStyles<Theme, Partial<TodoProps>>((theme: Theme) => 
    createStyles({
    root: {
        backgroundColor: ({isComplete, color}) => isComplete ? colors[color][50] : colors[color][100]
    },
    label: {
        color: ({isComplete}) => isComplete ? alpha("#000", .4) : "black",
        textDecoration: ({isComplete}) => isComplete ? "line-through" : "none"
    }
  })
);

const Todo = (props: TodoProps) => {

    const {id, title, desc, isComplete, color} = props;
    const { user } = useContext(StateContext);
    const appDispatch = useContext(DispatchContext);
    const [todoIsComplete, setTodoIsComplete] = useState<boolean>(isComplete);
    const classes = useStyles({isComplete: todoIsComplete, color});
    const previousValue = usePrevious<boolean>(todoIsComplete);

    const handleClick = (e: SyntheticEvent) => {
        e.stopPropagation();
        setTodoIsComplete(prev => !prev);
    };

    useEffect(() => {
        let myRequest: CancelTokenSource;

        if (previousValue !== null && previousValue !== todoIsComplete) {
            myRequest = Axios.CancelToken.source();
            // update Todo
            const updateTodo = async (id: string, user: UserWithToken, cleanUpRef: CancelTokenSource) => {
                const headers = {
                    "Authorization": `Bearer ${user.token}`
                }
            
                try {
                    const response = await Axios
                        .patch(
                            `${process.env.API_URL}/todos/${id}`,
                            {isComplete: todoIsComplete},
                            { headers, cancelToken: cleanUpRef.token }
                            );
            
                    const { status } = response;
            
                    if (status === 204) appDispatch({type: "updateTodoLists"});
            
                } catch(err) {
                    console.log(err);
                }
            }

            updateTodo(id, user, myRequest);
        }

        return () => {
            if (myRequest) myRequest.cancel();
        }
    }, [todoIsComplete, previousValue, appDispatch, id, user])
    
    return (
        <Accordion className={classes.root}>
            <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls=""
            id={id}
            >
                <FormControlLabel className={classes.label}
                    aria-label="Acknowledge"
                    onClick={handleClick}
                    onFocus={(e) => e.stopPropagation()}
                    control={<Checkbox checked={todoIsComplete} />}
                    label={title}
                />
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{desc}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Todo
