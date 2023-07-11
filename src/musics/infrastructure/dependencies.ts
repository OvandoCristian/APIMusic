import { PostUser } from "../aplication/CreateUser";
import { GetAllUsers } from "../aplication/GetAllUsersUseCase";
import { CreateUserController } from "./createUser-controller";
import { InMemoryUserRepository } from "./createUserRepository";
import { UserController } from "./user-controller";
import { AddUserRepository } from "./user-repository";

const userRepository = new InMemoryUserRepository();
const getAllUsersUseCase = new GetAllUsers(userRepository);
const userController = new UserController(getAllUsersUseCase); 

export { getAllUsersUseCase, userController };

const userRepositor = new AddUserRepository();
const createUser = new PostUser(userRepositor);
const PostUserController = new CreateUserController(createUser);

export { createUser, PostUserController };