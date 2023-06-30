import { Request, Response } from 'express'
import { GetUserResponse, UserResponseModel } from './response'
import { CreateUserUsecase } from '../../usecase/create_user_usecase'
import { UserRepository } from '../../infrastructure/repository/userRepository'

export namespace UserController {
  export const Index = (_: Request, res: Response<GetUserResponse>) => {
    const users: UserResponseModel[] = [
      { id: 1, name: 'User1', email: 'user1@test.local' },
      { id: 2, name: 'User2', email: 'user2@test.local' },
      { id: 3, name: 'User3', email: 'user3@test.local' }
    ]
    res.json(users)
  }
  export const Create = async (_: Request, res: Response<GetUserResponse>) => {
    const usecase = new CreateUserUsecase(new UserRepository())
    const name = 'User1'
    const age = 20
    const user = await usecase.run(name, age)
    console.log(user)
  }
}
