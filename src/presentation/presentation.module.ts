import { Module } from '@nestjs/common';

import { DomainModule } from 'src/domain/domain.module';

import { TasksController } from './tasks/tasks.controller';
import { TasksWorker } from './tasks/tasks.worker';

@Module({
  imports: [DomainModule],
  providers: [TasksWorker],
  controllers: [TasksController],
})
export class PresentationModule {}
