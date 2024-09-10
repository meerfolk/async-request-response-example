import { ITasksRepository } from '../interfaces';

import { TaskDto } from './dtos';

export class GetTaskUseCase {
  public constructor(
    private readonly id: string,
    private readonly tasksRepository: ITasksRepository,
  ) {}

  public async execute(): Promise<TaskDto> {
    const dto = await this.tasksRepository.getTaskById(this.id);

    return dto;
  }
}
