import { randomUUID } from 'crypto';

import { Injectable } from '@nestjs/common';

import { ITasksRepository } from 'src/domain/interfaces';
import {
  CreateTaskDto,
  TaskDto,
  TaskStatusEnum,
} from 'src/domain/use-cases/dtos';

import { SqliteStorageService } from './sqlite-storage.service';
import { UpdateTaskDto } from 'src/domain/use-cases/dtos/update-task.dto';

@Injectable()
export class SqliteTasksRepository implements ITasksRepository {
  public constructor(private readonly storageService: SqliteStorageService) {}

  public async createTask(dto: CreateTaskDto): Promise<string> {
    const { size, status } = dto;
    const id = randomUUID();

    await this.storageService.insert(
      `INSERT INTO tasks (id, status, size) VALUES(?, ?, ?)`,
      [id, status, size],
    );

    return id;
  }

  public async getTaskById(id: string): Promise<TaskDto> {
    const task = await this.storageService.get<TaskDto>(
      `SELECT * FROM tasks WHERE id=?`,
      [id],
    );

    return task;
  }

  public async updateTaskById(id: string, dto: UpdateTaskDto): Promise<void> {
    const setStrings = [];
    const setValues = [];

    if (dto.size) {
      setStrings.push(`size=?`);
      setValues.push(dto.size);
    }

    if (dto.status) {
      setStrings.push(`status=?`);
      setValues.push(dto.status);
    }

    if (setStrings.length === 0) {
      return;
    }

    await this.storageService.update(
      `UPDATE tasks SET ${setStrings.join(' ')} WHERE id=?`,
      [...setValues, id],
    );
  }

  public async getUnhandledTasks(): Promise<TaskDto[]> {
    return this.storageService.getAll(`SELECT * FROM tasks WHERE status=?`, [
      TaskStatusEnum.NEW,
    ]);
  }
}
