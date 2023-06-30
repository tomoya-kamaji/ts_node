import { User } from '../domain/user/user'
import { IUserRepository } from '../domain/user/user_repository'

export class CreateUserUsecase {
  private userRepository: IUserRepository
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async run() {
    const user = User.create('Alice', 20)
    return this.userRepository.save(user)
  }
}
