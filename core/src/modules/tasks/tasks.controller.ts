import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './../tasks/tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    findMany() {
        return this.tasksService.findMany();
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.create(createTaskDto);
    }
}
