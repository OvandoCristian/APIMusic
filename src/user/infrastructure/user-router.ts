import express from "express";

import { userController } from "./dependencies";

const userRouter = express.Router();

userRouter.post("/:id", userController.run.bind(userController));

export { userRouter };
