import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { PresentationModule } from './presentation/presentation.module';

import applicationConfig from './config/application';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [applicationConfig],
    }),
    PresentationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
