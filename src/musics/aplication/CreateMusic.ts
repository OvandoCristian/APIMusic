import { CreateMusic } from "../domain/CreateMusic";

export class PostMusic {
  constructor(private readonly addMusic: CreateMusic) {}

  async createMusic(
    Id: string,
    Title: string,
    Genre: string,
    Artist: string,
    Album: string,
    Duration: string
  ) {
    try {
      const music = await this.addMusic.addMusic(
        Id,
        Title,
        Genre,
        Artist,
        Album,
        Duration
      );
      if (!music) {
        throw new Error(`music ${Title} no se agregado`);
      }
      return music;
    } catch (error) {
      throw error;
    }
  }
}
