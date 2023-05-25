import { GetUser } from "../domain/get-user";

export class GetAllUser {
  constructor(private readonly getUser: GetUser) {}

  async runed(userId: number) {
    const user = await this.getUser.getById(userId);
    if (!user) {
      throw new Error(`user id no encontrado ${userId}`);
    }
    return user;
  }
}
