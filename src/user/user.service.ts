import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectEntityManager()
  private manager: EntityManager;

  // create(createUserDto: CreateUserDto) {
  //   return this.manager.save(User, createUserDto);
  // }
  /* eslint-disable */
  findAll(body: any) {
    return this.manager.find(User);
  }
  // findOne(id: number) {
  //   return this.manager.findOne(User, {
  //     where: { id },
  //   });
  // }
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return this.manager.save(User, {
  //     id: +id,
  //     ...updateUserDto,
  //   });
  // }
  // remove(id: number) {
  //   return this.manager.delete(User, +id);
  // }
}
