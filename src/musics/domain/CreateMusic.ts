import { Music } from "./music";

export interface CreateMusic {
  addMusic(
    Id: string,
    Title: string,
    Genre: string,
    Artist: string,
    Album: string,
    Duration: string
  ): Promise<Music | null>;
}
