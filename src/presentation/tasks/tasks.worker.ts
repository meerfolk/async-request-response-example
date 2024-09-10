import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { UseCaseFactory } from 'src/domain/use-cases';

@Injectable()
export class TasksWorker {
  public constructor(private readonly useCaseFactory: UseCaseFactory) {}

  @Cron('0 * * * * *')
  public cron(): void {
    const useCase = this.useCaseFactory.handleTaskUseCase();

    useCase.execute().then().catch();
  }
}
