import { ITasksRepository } from '../interfaces';

import { CreateTaskDto, TaskStatusEnum } from './dtos';

export class CreateTaskUseCase {
  public constructor(
    private readonly size: number,
    private readonly tasksRepository: ITasksRepository,
  ) {}

  public async execute(): Promise<string> {
    const dto = new CreateTaskDto({
      size: this.size,
      status: TaskStatusEnum.NEW,
    });

    const id = this.tasksRepository.createTask(dto);

    return id;
  }
}
