import { Controller, Get } from '@nestjs/common';
import { CoatsService } from './coats.service';

@Controller()
export class CoatsController {
  constructor(private readonly coatsService: CoatsService) {}

  @Get()
  getHello(): object {
    return this.coatsService.getHello();
  }
}
