import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.services';

@Module({
  imports: [],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
