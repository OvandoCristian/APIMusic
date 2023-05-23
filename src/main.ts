import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";
import { musicRouter } from "./musics/infrastructure/music-router";
import { userRouter } from "./user/infrastructure/user-router";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/music", musicRouter);
  app.use("/users", userRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
