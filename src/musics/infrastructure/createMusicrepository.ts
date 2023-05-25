import { createPool } from "../../mysql";
import { Music } from "../domain/music";
import { MusicRepository } from "../domain/music-repository";

export class InMemoryMusicRepository implements MusicRepository {
  async getAll(): Promise<Music[]> {
    console.log("Entered InMemoryMusicRepository getAll");
    const connection = await createPool();
    const result: any[] = await connection.query("SELECT * FROM musics");

    if (result.length === 0) {
      return [];
    }
    const musica: any[] = result[0];
    console.log(`prueba ${JSON.stringify(musica)}`);
    return musica.map((music) => {
      return new Music(
        music.id,
        music.title,
        music.genre,
        music.artist,
        music.album,
        music.duration
      );
    });
  }
}
