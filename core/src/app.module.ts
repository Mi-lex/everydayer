import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import env from './config/env';

@Module({
    imports: [TasksModule, MongooseModule.forRoot(env.MONGO_URL)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
