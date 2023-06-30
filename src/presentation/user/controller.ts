import { Request, Response } from "express";
import { GetUserResponse, UserResponseModel } from "./response";

export namespace UserController {
  export const Index = (req: Request, res: Response<GetUserResponse>) => {
    const users: UserResponseModel[] = [
      { id: 1, name: "User1", email: "user1@test.local" },
      { id: 2, name: "User2", email: "user2@test.local" },
      { id: 3, name: "User3", email: "user3@test.local" },
    ];
    res.json(users);
  };
}
