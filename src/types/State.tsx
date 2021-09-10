import { Alert } from "./Alert";
import { TodoListProps } from "./Todo";
import { UserWithToken } from "./User";

export interface State {
  user: UserWithToken;
  userIsLoggedIn: boolean;
  todoLists: TodoListProps[];
  alert: Alert;
  alertIsVisible: boolean;
  requestCounter: number;
}
