import { PostMusic } from "../aplication/CreateMusic";
import { GetAllMusics } from "../aplication/GetAllMusicsUseCase";
import { CreateMusicController } from "./createMusic-controller";
import { InMemoryMusicRepository } from "./createMusicrepository";
import { MusicController } from "./music-controller";
import { AddMusicRepository } from "./music-repository";

const musicRepository = new InMemoryMusicRepository();
const getAllMusicsUseCase = new GetAllMusics(musicRepository);
const musicController = new MusicController(getAllMusicsUseCase); 

export { getAllMusicsUseCase, musicController };

const musicRepositor = new AddMusicRepository();
const createMusic = new PostMusic(musicRepositor);
const PostMusicController = new CreateMusicController(createMusic);

export { createMusic, PostMusicController };