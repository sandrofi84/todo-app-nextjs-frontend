import { Attributes } from "react";

export interface TodoProps {
    id: string,
    title: string,
    desc: string,
    isComplete: boolean,
    todoListId: string
}

export interface TodoListProps {
    key: any,
    todoList: TodoList,
}

export interface TodoList {
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