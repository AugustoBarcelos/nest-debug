import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TaskDTO } from './shared/dto/task.dto';
import { Task } from './shared/task';
import { TaskService } from './shared/task.service';

@Controller('tasks')
@ApiTags('Endpoints for test in mongodb')
export class TasksController {
  constructor(private taskService: TaskService) {}
  @ApiOperation({
    summary: 'Get all tasks',
  })
  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }
  @ApiOkResponse({
    type: TaskDTO,
  })
  @ApiOperation({
    summary: 'Get Task by ID',
  })
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getById(id);
  }
  @ApiOperation({
    summary: 'Create a new Task',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiBody({
    description: 'Create new task',
    type: TaskDTO,
  })
  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }
  @ApiOperation({
    summary: 'Update a task',
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body() task: Task): Promise<Task> {
    return this.taskService.update(id, task);
  }
  @ApiOperation({
    summary: 'Delete a task',
  })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.taskService.delete(id);
    return 'Deleted Successfully';
  }
}
