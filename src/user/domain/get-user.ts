import { User } from "./user";

export interface GetUser {
  getById(userId: number): Promise<User | null>;
}
