import { CreateTaskDto } from './create-task.dto';
import { TaskStatusEnum } from './task-status.enum';

export class TaskDto extends CreateTaskDto {
  public readonly id: string;

  public constructor(params: {
    id: string;
    status: TaskStatusEnum;
    size: number;
  }) {
    super({ size: params.size, status: params.status });
    this.id = params.id;
  }
}
