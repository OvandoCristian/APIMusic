import { GetAllUser } from "../application/getAllUserUseCase";
import { UserController } from "./user-controller";
import { UserRepository } from "./user-repository";

const userRepository = new UserRepository();
export const getAllUser = new GetAllUser(userRepository);
export const userController = new UserController(getAllUser);
