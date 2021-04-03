import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule } from './modules/users/users.module';
import env from './config/env';

@Module({
    imports: [MongooseModule.forRoot(env.MONGO_URL), TasksModule, UsersModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
