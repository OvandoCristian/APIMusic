import { Request, Response } from "express";

import { GetAllMusics } from "../aplication/GetAllMusicsUseCase";

export class MusicController {
  constructor(private readonly getAllMusicsUseCase: GetAllMusics) {}

  async getAllMusics(req: Request, res: Response) {
    try {
      const musics = await this.getAllMusicsUseCase.execute();
      res.status(200).send(musics);
    } catch (error) {
      res.status(500).json({ error: "Failed to get musics" });
    }
  }
}
