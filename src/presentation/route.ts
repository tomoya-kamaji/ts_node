import express from "express";
import { UserController } from "./user/controller";

export function initRoute() {
  const router = express.Router();

  const usersRoute = "/users";
  {
    router.get(`${usersRoute}`, UserController.Index);
  }
  return router;
}
