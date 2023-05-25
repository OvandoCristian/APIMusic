import { Music } from "./music";

export interface MusicRepository {
  getAll(): Promise<Music[]>;
}
