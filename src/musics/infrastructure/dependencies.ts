import { GetAllMusics } from "../aplication/GetAllMusicsUseCase";
import { InMemoryMusicRepository } from "./in-memory-music-repository";
import { MusicController } from "./music-controller";

const musicRepository = new InMemoryMusicRepository();
const getAllMusicsUseCase = new GetAllMusics(musicRepository);
const musicController = new MusicController(getAllMusicsUseCase); // Agrega esta línea

export { getAllMusicsUseCase, musicController }; // Agrega movieController a las exportaciones


