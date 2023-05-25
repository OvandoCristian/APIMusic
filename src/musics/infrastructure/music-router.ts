import express from "express";

import { musicController } from "./dependencies";
import { PostMusicController } from "./dependencies";

const musicRouter = express.Router();
musicRouter.get("/", musicController.getAllMusics.bind(musicController));
musicRouter.post("/", PostMusicController.createMusic.bind(PostMusicController));

export { musicRouter };
