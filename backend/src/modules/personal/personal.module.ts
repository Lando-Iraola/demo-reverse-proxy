import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';

@Module({
  imports: [],
  controllers: [PersonalController],
  providers: [PersonalService],
})
export class PersonalModule {}
