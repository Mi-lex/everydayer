import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findMany(): string[] {
        return ['many'];
    }
}
