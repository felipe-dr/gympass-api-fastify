import { Prisma } from '@prisma/client'

import { prisma } from '@/lib/prisma'

import { UsersRepository } from '../users-repository'

export class PrismaUsersRepository implements UsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({ data })

    return user
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
    })

    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } })

    return user
  }
}
