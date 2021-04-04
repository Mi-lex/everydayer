import { ApiProperty } from '@nestjs/swagger';
import { IsIn, ArrayUnique } from 'class-validator';
import { TaskTypes, WeekDays } from './../../../enums/tasks.enums';

type TaskTypeUnion = `${TaskTypes}`;

export class CreateTaskDto {
    @ApiProperty()
    @IsIn(Object.values(TaskTypes))
    readonly type: TaskTypeUnion;

    @ApiProperty()
    readonly payload: string;

    @ApiProperty()
    @IsIn(Object.values(WeekDays), { each: true })
    @ArrayUnique()
    execWeekDays?: `${WeekDays}`[];
}
