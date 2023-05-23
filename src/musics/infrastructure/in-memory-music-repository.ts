import { RowDataPacket } from "mysql2/typings/mysql";

import { pool } from "../../mysql";
import { Music } from "../domain/music";
import { MusicRepository } from "../domain/music-repository";

export class InMemoryMusicRepository implements MusicRepository {
  async getAll(): Promise<Music[]> {
    console.log("Entered InMemoryMusicRepository getAll");
    const [result] = await pool.query("SELECT * FROM musics");
    const musics: RowDataPacket[] = result as RowDataPacket[];


    if (musics.length === 0) {
      return [];
    }

    return musics.map((music) => {
      return new Music(
        music.id,
        music.title,
        music.genre,
        music.artist,
        music.album,
        music.duration,
      );
    });
  }
}
