import { User } from './user'

export interface IUserRepository {
  save(user: User): Promise<User>
  fetch(): Promise<User[]>
}
