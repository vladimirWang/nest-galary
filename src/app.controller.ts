import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
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
