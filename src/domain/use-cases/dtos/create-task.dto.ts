import { TaskStatusEnum } from './task-status.enum';

export class CreateTaskDto {
  public readonly size: number;
  public readonly status: TaskStatusEnum;

  public constructor(params: { size: number; status: TaskStatusEnum }) {
    this.size = params.size;
    this.status = params.status;
  }
}
