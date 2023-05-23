import { Request, Response } from "express";

import { BienvenidaSender } from "../application/bienvenida-sender";

export class UserController {
  constructor(private readonly bienvenidaSender: BienvenidaSender) {}

  async run(req: Request, res: Response) {
    const userId = parseInt(req.params.id);
    const result = await this.bienvenidaSender.run(userId);
    res.status(200).send(`Bienvenido de nuevo ${result.username}`);
  }
}
