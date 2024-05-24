import { Controller, Get } from '@nestjs/common';
import { BreedsService } from './breeds.service';

@Controller()
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Get()
  getHello(): object {
    return this.breedsService.getHello();
  }
}
