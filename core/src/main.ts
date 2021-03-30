import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/env';

// const bootstrap = async () => {
const bootstrap = async() => {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: true,
            validationError: {
                target: false,
                value: false,
            },
        }),
    );
    await app.listen(env.PORT);
};
bootstrap();
