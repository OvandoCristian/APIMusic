import { GetUser } from "../domain/get-user";

export class BienvenidaSender {
  constructor(private readonly getUser: GetUser) {}

  async run(userId: number) {
    const user = await this.getUser.getById(userId);
    if (!user) {
      throw new Error(`user id no encontrado ${userId}`);
    }
    return user;
    //console.log("usuario encontrado", user.username, user.email);
  }
}
