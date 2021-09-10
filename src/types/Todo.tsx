export interface Todo {
  id: string;
  title: string;
  desc: string;
  isComplete: boolean;
  todoListId: string;
}

export interface TodoProps {
  key?: string;
  id?: string;
  color?: TodoListColor;
  title?: string;
  desc?: string;
  isComplete?: boolean;
  todoListId?: string;
}

export const makeTodoProps = (todo: Todo, color: TodoListColor): Partial<TodoProps> => {
  return {
    id: todo.id,
    color: color,
    title: todo.title,
    desc: todo.desc,
    isComplete: todo.isComplete,
    todoListId: todo.todoListId
  };
};

export interface TodoList {
  id: string;
  userId: string;
  title: string;
  color: TodoListColor;
  todos: Todo[];
}

export interface TodoListProps {
  key?: any;
  todoList: TodoList;
}

export enum TodoListColor {
  YELLOW = "yellow",
  RED = "red",
  GREEN = "green"
}

export const todoListColorArray = [...Object.values(TodoListColor)];
