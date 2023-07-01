import { Request, Response } from 'express'
import { CreateUserResponse, GetUserResponse, UserResponseModel } from './response'
import { CreateUserUsecase } from '../../usecase/create_user_usecase'
import { UserRepository } from '../../infrastructure/repository/userRepository'

export namespace UserController {
  export const Index = (_: Request, res: Response<GetUserResponse>) => {
    const users: UserResponseModel[] = []
    res.json(users)
  }
  export const Create = async (_: Request, res: Response<CreateUserResponse>) => {
    const usecase = new CreateUserUsecase(new UserRepository())
    const name = 'User1'
    const age = 20
    const user = await usecase.run(name, age)

    res.status(201).json({
      id: 1,
      name: user.name,
      age: user.age || null
    })
  }
}
