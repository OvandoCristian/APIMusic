import { Request, Response } from "express";

import { PostMusic } from "../aplication/CreateMusic";

export class CreateMusicController {
  constructor(private readonly postMusic: PostMusic) {}

  async createMusic(req: Request, res: Response) {
    const Id = req.body.id;
    const Title = req.body.title;
    const Genre = req.body.genre;
    const Artist = req.body.artist;
    const Album = req.body.album;
    const Duration = req.body.duration;

    const resultado = await this.postMusic.createMusic(
      Id,
      Title,
      Genre,
      Artist,
      Album,
      Duration
    );
    console.log("controller", resultado.title);
    res
      .status(200)
      .send(
        `La solicitud ${resultado.title} fue éxitoso`
      );
  }
}
