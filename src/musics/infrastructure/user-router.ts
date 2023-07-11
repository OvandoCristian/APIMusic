import express from "express";

import { userController } from "./dependencies";
import { PostUserController } from "./dependencies";

const userRouter = express.Router();
userRouter.get("/", userController.getAllUsers.bind(userController));
userRouter.post("/", PostUserController.createUser.bind(PostUserController));

export { userRouter };
