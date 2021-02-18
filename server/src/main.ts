import { Logger, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { UnauthorizedExceptionInterceptor } from './interceptors';
import { EnvironmentVariables } from './types';

function setupInterceptors(): NestInterceptor[] {
  const unauthorizedExceptionInterceptor = new UnauthorizedExceptionInterceptor();

  const interceptors: NestInterceptor[] = [];

  interceptors.push(unauthorizedExceptionInterceptor);

  return interceptors;
}

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService<EnvironmentVariables> = app.get(
    ConfigService
  );

  const interceptors = setupInterceptors();

  app.useGlobalInterceptors(...interceptors);

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
