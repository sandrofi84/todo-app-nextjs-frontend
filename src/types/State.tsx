import { UserWithToken } from "./User";

export interface State {
    user: UserWithToken,
    isLoggedIn: boolean
}