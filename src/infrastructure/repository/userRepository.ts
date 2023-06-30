import { PrismaClient } from '@prisma/client'
import { IUserRepository } from '../../domain/user/user_repository'
import { User } from '../../domain/user/user'

const prisma = new PrismaClient()

export class UserRepository implements IUserRepository {
  async fetch() {
    const newUser = await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
        posts: {
          create: { title: 'Hello World', content: 'Welcome to Prisma' }
        }
      }
    })
    return []
  }

  async save() {
    const newUser = await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
        posts: {
          create: { title: 'Hello World', content: 'Welcome to Prisma' }
        }
      }
    })

    return User.reconstruct(newUser.name, newUser.age || undefined)
  }
}
