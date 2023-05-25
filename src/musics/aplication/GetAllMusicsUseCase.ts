import { Music } from "../domain/music";
import { MusicRepository } from "../domain/music-repository";

export class GetAllMusics {
  constructor(private readonly musicRepository: MusicRepository) {}
  async execute(): Promise<Music[]> {
    const music = await this.musicRepository.getAll();
    return music;
  }
}
