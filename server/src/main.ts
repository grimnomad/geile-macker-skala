import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { EnvironmentVariables } from './types';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService<EnvironmentVariables> = app.get(
    ConfigService
  );

  const PORT = configService.get<number>('PORT');
  const MONGODB_URI = configService.get<string>('MONGODB_URI');

  Logger.log(`Server started on PORT: ${PORT}`, bootstrap.name);
  Logger.log(
    `Create connection to MongoDB via: ${MONGODB_URI}`,
    bootstrap.name
  );

  await app.listen(PORT);
}

bootstrap();
