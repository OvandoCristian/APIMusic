import { BienvenidaSender } from "../application/bienvenida-sender";
import { UserController } from "./user-controller";
import { UserRepository } from "./user-repository";

const userRepository = new UserRepository();
export const bienvenidaSender = new BienvenidaSender(userRepository);
export const userController = new UserController(bienvenidaSender);
