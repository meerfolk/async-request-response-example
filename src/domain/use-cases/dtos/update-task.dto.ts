import { TaskStatusEnum } from './task-status.enum';

export class UpdateTaskDto {
  public readonly status?: TaskStatusEnum;
  public readonly size?: number;

  public constructor(params: { status?: TaskStatusEnum; size?: number }) {
    this.size = params.size;
    this.status = params.status;
  }
}
