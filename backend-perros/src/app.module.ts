import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './modules/dogs.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    DogsModule,
    RouterModule.register([
      {
        path: '',
        module: AppModule,
        children: [
          {
            path: 'dogs',
            module: DogsModule,
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
