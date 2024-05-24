import { Controller, Get } from '@nestjs/common';
import { PersonalService } from './personal.service';

@Controller()
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Get()
  getPersonal(): object {
    return this.personalService.getPersonal();
  }
}
