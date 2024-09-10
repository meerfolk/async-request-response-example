import { CreateTaskDto, TaskDto, UpdateTaskDto } from '../use-cases/dtos';

export interface ITasksRepository {
  createTask: (dto: CreateTaskDto) => Promise<string>;
  getTaskById: (id: string) => Promise<TaskDto>;
  updateTaskById: (id: string, dto: UpdateTaskDto) => Promise<void>;
  getUnhandledTasks: () => Promise<TaskDto[]>;
}
