import { User } from '../domain/user/user'
import { IUserRepository } from '../domain/user/user_repository'

export class CreateUserUsecase {
  private userRepository: IUserRepository
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async run(name: string, age: number | undefined) {
    const user = User.create(name, age)
    return this.userRepository.save(user)
  }
}
