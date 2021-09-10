import { Picture } from "./Picture";

export interface User {
  id: string;
  username: string;
  displayName: string;
  profilePicture: string;
  pictures?: Picture[] | [];
  userId: string;
}

export interface UserWithToken {
  token: string;
  id: string;
  username: string;
  displayName: string;
  profilePicture: string;
  pictures?: Picture[] | [];
  userId: string;
}
