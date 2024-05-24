import { Module } from '@nestjs/common';
import { CoatsController } from './coats.controller';
import { CoatsService } from './coats.service';

@Module({
  imports: [],
  controllers: [CoatsController],
  providers: [CoatsService],
})
export class CoatsModule {}
