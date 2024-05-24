import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalModule } from './modules/personal/personal.module';
import { FinanzasModule } from './modules/finanzas/finanzas.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [PersonalModule, FinanzasModule,
    RouterModule.register([
      {
        path: "",
        children: [
          {
            path: "personal",
            module: PersonalModule
          },
          {
            path: "finanzas",
            module: FinanzasModule
          }
        ]
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
