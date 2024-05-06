import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  // @Inject(PrismaService)
  // private prisma: PrismaService;

  // Prisma.UserCreateInput
  async create(data) {
    return 'create user success';
    // return await this.prisma.user.create({
    //   data,
    //   select: {
    //     id: true,
    //   },
    // });
  }
}
