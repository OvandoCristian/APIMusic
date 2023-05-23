import {Music} from "./music";

export interface MusicRepository {

  getAll(): Promise<Music[]>;
}

export interface MusicRepositoryCreate {
  createUser(music: Music): Promise<Music>;
}
