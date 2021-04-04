import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import env from './config/env';

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: true,
            validationError: {
                target: false,
                value: false,
            },
            transformOptions: {
                enableImplicitConversion: true,
            },
        }),
    );

    const config = new DocumentBuilder()
        .setTitle(`${env.PROJECT_NAME}`)
        .setDescription(`The ${env.PROJECT_NAME} API description`)
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(env.API_DOC_PATH, app, document, {
        customSiteTitle: `${env.PROJECT_NAME} api doc`,
    });

    await app.listen(env.PORT);
};
bootstrap();
