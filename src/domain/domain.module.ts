import { Module, Provider } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { UseCaseFactory } from './use-cases/use-case.factory';
import { SqliteTasksRepository } from 'src/infrastructure/sqlite-tasks.repository';

const useCaseFactoryProvider: Provider = {
  provide: UseCaseFactory,
  useFactory: (tasksRepository: SqliteTasksRepository) =>
    new UseCaseFactory(tasksRepository),
  inject: [SqliteTasksRepository],
};

@Module({
  imports: [InfrastructureModule],
  providers: [useCaseFactoryProvider],
  exports: [UseCaseFactory],
})
export class DomainModule {}
