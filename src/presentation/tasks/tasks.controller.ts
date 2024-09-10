import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UseCaseFactory } from 'src/domain/use-cases';

import { CreateTaskResponseWebDto } from './web-dtos/create-task-response.web-dto';
import { CreateTaskWebDto } from './web-dtos/create-task.web-dto';
import { GetTaskResponseWebDto } from './web-dtos';

@Controller({
  version: '1',
  path: 'tasks',
})
export class TasksController {
  public constructor(private readonly useCaseFactory: UseCaseFactory) {}

  @Post('/')
  public async createTask(
    @Body() dto: CreateTaskWebDto,
  ): Promise<CreateTaskResponseWebDto> {
    const useCase = this.useCaseFactory.createTaskUseCase(dto.size);

    const id = await useCase.execute();

    return {
      id,
    };
  }

  @Get('/:id')
  public async getTask(
    @Param('id') id: string,
  ): Promise<GetTaskResponseWebDto> {
    const useCase = this.useCaseFactory.getTaskUseCase(id);

    const task = await useCase.execute();

    return task;
  }
}
