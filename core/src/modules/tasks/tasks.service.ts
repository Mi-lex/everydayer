import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    findMany() {
        return 'task list';
    }

    create(createTaskDto: CreateTaskDto) {
        return createTaskDto;
    }
}
