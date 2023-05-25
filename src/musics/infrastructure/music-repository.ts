

import { createPool } from "../../mysql";
import { CreateMusic } from "../domain/CreateMusic";
import { Music } from "../domain/music";

export class AddMusicRepository implements CreateMusic {
  async addMusic(
    Id: string,
    Title: string,
    Genre: string,
    Artist: string,
    Album: string,
    Duration: string
  ): Promise<Music | null> {
    const connection = await createPool();
    try {
      const query = `INSERT INTO musics (id, title, genre, artist, album, duration) VALUES (?, ?, ?, ?, ?, ?)`;
      const values = [
        Id,
        Title,
        Genre,
        Artist,
        Album,
        Duration,
      ];
      await connection.query(query, values);

      const music = new Music(
        Id,
        Title,
        Genre,
        Artist,
        Album,
        Duration
      );

      return music;
    } catch (error) {
      throw new Error(`No se pudo agregar la musica: ${error}`);
    } finally {
      connection.end();
    }
  }
}
