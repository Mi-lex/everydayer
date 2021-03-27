import {
    IsIn,
    IsString,
    IsArray,
    ArrayUnique,
    IsOptional,
} from 'class-validator';
import { TaskTypes, WeekDays } from './../../../enums/tasks.enums';

type TaskTypeUnion = `${TaskTypes}`;

export class CreateTaskDto {
    @IsIn(Object.values(TaskTypes))
    readonly type: TaskTypeUnion;

    @IsString()
    readonly payload: string;

    @IsOptional()
    @IsArray()
    @IsIn(Object.values(WeekDays), { each: true })
    @ArrayUnique()
    execWeekDays?: `${WeekDays}`[];
}
