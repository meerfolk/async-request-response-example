import { ITasksRepository } from '../interfaces';

import { CreateTaskUseCase } from './create-task.use-case';
import { GetTaskUseCase } from './get-task.use-case';
import { HandleTaskUseCase } from './handle-task.use-case';

export class UseCaseFactory {
  public constructor(private readonly tasksRepository: ITasksRepository) {}

  public createTaskUseCase(size: number): CreateTaskUseCase {
    return new CreateTaskUseCase(size, this.tasksRepository);
  }

  public getTaskUseCase(id: string): GetTaskUseCase {
    return new GetTaskUseCase(id, this.tasksRepository);
  }

  public handleTaskUseCase(): HandleTaskUseCase {
    return new HandleTaskUseCase(this.tasksRepository);
  }
}
