import express from 'express'
import { UserController } from './user/controller'

export function initRoute() {
  const router = express.Router()

  const usersRoute = '/users'
  {
    router.get(`${usersRoute}`, UserController.Index)
    router.post(`${usersRoute}`, UserController.Create)
  }
  return router
}
