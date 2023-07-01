import express from 'express'
import { UserController } from './user/controller'

export function initRoute(app: express.Express) {
  const usersRoute = '/users'
  {
    app.get(`${usersRoute}`, UserController.Index)
    app.post(`${usersRoute}`, UserController.Create)
  }
}
