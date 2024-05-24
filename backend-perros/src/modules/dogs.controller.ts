import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.services';

@Controller()
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getHello(): string {
    return this.dogsService.getBark();
  }
}
