import React, { useReducer, SyntheticEvent, useContext } from 'react';
import { 
    Box, 
    Button, 
    createStyles, 
    FormControl, 
    makeStyles, 
    MenuItem, 
    Select, 
    TextField, 
    Theme 
} from '@material-ui/core';
import Axios from 'axios';
import { TodoListColor, todoListColorArray } from '../../types/Todo';
import StateContext from '../../context/StateContext';
import DispatchContext from '../../context/DispatchContext';
import { AlertSeverity } from '../../types/Alert';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    form: {
      "& > div": {
        paddingBottom: "10px"
      }
    },
    select: {
        textTransform: "uppercase"
    },
    item: {
        textTransform: "uppercase"
    }
  })
);

const FormAddList = () => {
    const classes = useStyles();
    const { user } = useContext(StateContext);
    const appDispatch = useContext(DispatchContext);

    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({...state, ...newState}), 
        {
            title: "",
            color: TodoListColor.GREEN
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
            "Authorization": `Bearer ${user.token}`
        }
        
        try {
            const response = await Axios.post(`${process.env.API_URL}/todo-lists/`, {...formInput}, {headers});
            if (response.status === 200) {
                appDispatch({type: "updateTodoLists"});
                appDispatch({type: "showAlert", alert: {severity: AlertSeverity.SUCCESS, message: "New List Created! 🥳"}});
            }
        } catch(err) {
            console.log(err);
            appDispatch({type: "showAlert", alert: {severity: AlertSeverity.ERROR, message: "Something went wrong! Please, try again... 😤"}});
        }
    }

    return (
        <Box className={classes.form} component="form" onSubmit={handleSubmit} display="flex" flexDirection="column">
            <TextField onChange={handleChange} type="title" label="title" name="title" variant="outlined" defaultValue={formInput.title} required />
            <FormControl required >
                <Select
                variant="outlined"
                className={classes.select}
                labelId="color-label"
                id="demo-simple-select-required"
                defaultValue={formInput.color}
                value={formInput.color}
                onChange={handleChange}
                name="color"
                >
                {
                    todoListColorArray.map(
                        color => <MenuItem className={classes.item} value={color} key={color}>{color}</MenuItem>
                    )
                }
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">CREATE LIST</Button>
        </Box>
    )
}

export default FormAddList