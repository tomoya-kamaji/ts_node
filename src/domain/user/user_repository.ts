import { User } from './user'

export interface IUserRepository {
  fetchUser(): Promise<User[]>
}
