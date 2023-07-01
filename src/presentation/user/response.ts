export type GetUserResponse = UserResponseModel[]
export type CreateUserResponse = UserResponseModel

export type UserResponseModel = {
  id: number
  name: string
  age: number | null
}
