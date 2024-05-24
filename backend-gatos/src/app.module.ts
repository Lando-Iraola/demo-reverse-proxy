import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { CoatsModule } from './modules/coats/coats.module';
import { BreedsModule } from './modules/breeds/breeds.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    CatsModule,
    CoatsModule,
    BreedsModule,
    RouterModule.register([
      {
        path: '',
        module: AppModule,
        children: [
          {
            path: 'cats',
            module: CatsModule,
          },
          {
            path: 'breeds',
            module: BreedsModule,
          },
          {
            path: 'coats',
            module: CoatsModule,
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
