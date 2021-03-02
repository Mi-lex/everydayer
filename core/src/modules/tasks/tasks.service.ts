import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    get() {
        return 'task list';
    }
}
