import { Request, Response } from "express";

import { PostUser } from "../aplication/CreateUser";

export class CreateUserController {
  constructor(private readonly postUser: PostUser) {}

  async createUser(req: Request, res: Response) {
    const Id = req.body.Id;
    const Username = req.body.Username;
    const Password = req.body.Password;


    const resultado = await this.postUser.createUser(
      Id,
      Username,
      Password,
    );
    console.log("controller", resultado.username);
    res
      .status(200)
      .send(
        `La solicitud ${resultado.username} fue éxitoso`
      );
  }
}
