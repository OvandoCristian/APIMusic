import { Request, Response } from "express";

import { GetAllUser } from "../application/getAllUserUseCase";

export class UserController {
  
  constructor(private readonly getUser: GetAllUser) {}
  
  async run(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id);
      const result = await this.getUser.runed(userId);
      console.log(result, "ese es el username");
      
      res.status(200).send(`Bienvenido de nuevo ${result.username}`);
    
    } catch (error) {
      throw error;    
    }
  }
}