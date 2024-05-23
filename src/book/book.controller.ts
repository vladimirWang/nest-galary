import { Controller, Get } from '@nestjs/common';

@Controller('api/book')
export class BookController {
  @Get('list')
  list() {
    return 'book list';
  }
}
