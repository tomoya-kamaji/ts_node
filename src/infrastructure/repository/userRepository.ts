import { IUserRepository } from '../../domain/user/user_repository'

class UserRepositoryTypeOrm implements IUserRepository {
  async fetchUser() {
    return []
  }
}
