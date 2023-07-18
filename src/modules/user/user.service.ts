import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../core/prisma/prisma.service";
import { UserCreateDto } from "./dto/userCreateDto";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {
  }

  async create({ firstName, lastName, ...data }: UserCreateDto) {
    return this.prisma.user.create({
      data: {
        userInfo: {
          create: {
            firstName,
            lastName
          }
        },
        ...data
      }
    });
  }

  async getAll() {
    return this.prisma.user.findMany({
      include: {
        userInfo: true
      }
    });
  }

  async get(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      include: {
        userInfo: true
      }
    });
  }

  async update(id: string, { firstName, lastName, ...data }: UserCreateDto) {
    return this.prisma.user.update({
      where: {
        id
      },
      data: {
        userInfo: {
          update: {
            firstName,
            lastName
          }
        },
        ...data
      }
    });
  }

  async delete(id: string) {
    return this.prisma.user.delete({
      where: {
        id
      }
    });
  }

}
