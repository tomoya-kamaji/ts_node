import { IUserRepository } from '../domain/user/user_repository'

export class FetchUserUsecase {
  private userRepository: IUserRepository
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async run() {
    const users = await this.userRepository.fetchUser()
    return users
  }
}
