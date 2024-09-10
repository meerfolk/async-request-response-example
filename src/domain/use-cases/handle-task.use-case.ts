import { ITasksRepository } from '../interfaces';
import { TaskStatusEnum } from './dtos';

export class HandleTaskUseCase {
  public constructor(private readonly tasksRepository: ITasksRepository) {}

  public async execute(): Promise<void> {
    const tasks = await this.tasksRepository.getUnhandledTasks();

    tasks.forEach(async (task) => {
      await this.startTask(task.id);
      setTimeout(
        () => this.finishTask(task.id).then().catch(),
        task.size * 1000,
      );
    });
  }

  private async startTask(id: string): Promise<void> {
    await this.tasksRepository.updateTaskById(id, {
      status: TaskStatusEnum.IN_PROGRESS,
    });
  }

  private async finishTask(id: string): Promise<void> {
    await this.tasksRepository.updateTaskById(id, {
      status: TaskStatusEnum.DONE,
    });
  }
}
