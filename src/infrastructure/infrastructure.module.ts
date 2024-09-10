import { Module } from '@nestjs/common';
import { SqliteTasksRepository } from './sqlite-tasks.repository';
import { SqliteStorageService } from './sqlite-storage.service';

@Module({
  providers: [SqliteTasksRepository, SqliteStorageService],
  exports: [SqliteTasksRepository],
})
export class InfrastructureModule {}
