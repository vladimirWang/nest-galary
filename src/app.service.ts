import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private entityManager: EntityManager) {}
  getHello(): string {
    return 'hello world';
  }
}
