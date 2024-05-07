import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  @Inject(UserService)
  private userService: UserService;

  constructor(private readonly appService: AppService) {}
  @Get('create')
  create(): string {
    console.log('create');
    return 'create';
    // return this.userService.create({ username: 'john' });
  }

  @Get()
  getHello(): string {
    return this.appService.getHello() + '!!!';
  }
}
