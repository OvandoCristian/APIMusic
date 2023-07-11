import { User } from "./user";

export interface CreateUser {
  addUser(
    Id: string,
    Username: string,
    Password: string,
  ): Promise<User | null>;
}
