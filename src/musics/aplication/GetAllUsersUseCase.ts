import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

export class GetAllUsers {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(): Promise<User[]> {
    const music = await this.userRepository.getAll();
    return music;
  }
}
