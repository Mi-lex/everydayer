import { TasksService } from './../tasks/tasks.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    get() {
        return this.tasksService.get();
    }
}
