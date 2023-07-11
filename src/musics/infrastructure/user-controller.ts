import { Request, Response } from "express";

import { GetAllUsers } from "../aplication/GetAllUsersUseCase";

export class UserController {
  constructor(private readonly getAllUsersUseCase: GetAllUsers) {}

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.getAllUsersUseCase.execute();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to get user" });
    }
  }
}
