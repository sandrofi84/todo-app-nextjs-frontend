export interface TodoProps {
    id: string,
    title: string,
    desc: string,
    isComplete: boolean,
    todoListId: string
}

export interface TodoListProps {
    id: string,
    userId: string,
    title: string,
    color: TodoListColor,
    todos: TodoProps[]
}

export enum TodoListColor {
    YELLOW = "yellow",
    RED = "red",
    GREEN = "green"
  }