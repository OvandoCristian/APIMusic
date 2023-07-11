import { CreateUser } from "../domain/CreateUser";

export class PostUser {
  constructor(private readonly addUser: CreateUser) {}

  async createUser(
    Id: string,
    Username: string,
    Password: string,
  ) {
    try {
      const user = await this.addUser.addUser(
        Id,
        Username,
        Password,
      );
      if (!user) {
        throw new Error(`music ${Username} no se agregado`);
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}
