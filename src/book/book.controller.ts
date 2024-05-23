import { Controller, Get } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get('list')
  list() {
    return 'book list';
  }
}
