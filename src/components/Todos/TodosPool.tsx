import { Box } from '@material-ui/core'
import React, { useContext } from 'react'
import StateContext from '../../context/StateContext'
import TodoList from './TodoList';

const TodosPool = () => {

    const { todoLists } = useContext(StateContext);


    return (
        <Box>
            {
                todoLists.length ?

                todoLists.map(
                    todoList => (
                        <div key={todoList.id}>
                            <TodoList todoList={todoList} />
                        </div>
                    )
                )

                :

                "You don't have any todos yet"
            }
        </Box>
    )
}

export default TodosPool