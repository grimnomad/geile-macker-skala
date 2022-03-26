import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth';
import { AppConfigModule, MongoDBConfigService } from './config';
import { ScaleModule } from './scale';
import { MorganMiddleware } from './utils';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [MongoDBConfigService],
      useFactory: (configService: MongoDBConfigService) => ({
        uri: configService.URI
      })
    }),
    AuthModule,
    ScaleModule
  ]
})
class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(MorganMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}

export { AppModule };
