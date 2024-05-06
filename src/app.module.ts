import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';

// const env = process.env.NODE_ENV;
// console.info('-----env------', env);
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    // PrismaService,
    UserService,
  ],
})
export class AppModule {}
