import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  listAll(): object {
    return this.catsService.listAll();
  }

  @Get("/byName/:name")
  findByName(@Param("name") name: string): object{
    return this.catsService.findByName(name)
  }

  @Get("/byCoat/:coat")
  findByCoat(@Param("coat") coat: string): object{
    return this.catsService.findByCoat(coat)
  }

  @Get("/byBreed/:breed")
  findByBreed(@Param("breed") breed: string): object{
    return this.catsService.findByBreed(breed)
  }
  @Get("/byBreed/:breed/andCoat/:coat")
  findByCoatAndBreed(@Param("breed") breed: string, @Param("coat") coat: string): object{
    return this.catsService.findByBreedAndCoat(breed, coat)
  }
}
