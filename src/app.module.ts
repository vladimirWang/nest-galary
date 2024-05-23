import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    UserModule,
    BookModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '123456',
    //   database: 'galary2',
    //   synchronize: true,
    //   logging: true,
    //   entities: [User],
    //   poolSize: 10,
    //   connectorPackage: 'mysql2',
    //   extra: {
    //     authPlugins: 'sha256_password',
    //   },
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
