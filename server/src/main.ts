import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { AppConfigService, MongoDBConfigService } from './config';
import { setupInterceptors } from './setup';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const { PORT } = app.get(AppConfigService);
  const { URI: MONGODB_URI } = app.get(MongoDBConfigService);

  const interceptors = setupInterceptors();

  app.useGlobalInterceptors(...interceptors);
  app.enableCors();

  Logger.log(`Server started on PORT: ${PORT}`, bootstrap.name);
  Logger.log(
    `Create connection to MongoDB via: ${MONGODB_URI}`,
    bootstrap.name
  );

  await app.listen(PORT);
}

bootstrap();
