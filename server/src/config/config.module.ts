import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppConfigService } from './app.service';
import { JWTConfigService } from './jwt.service';
import { MongoDBConfigService } from './mongodb.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      expandVariables: true
    })
  ],
  providers: [
    ConfigService,
    MongoDBConfigService,
    JWTConfigService,
    AppConfigService
  ],
  exports: [MongoDBConfigService, JWTConfigService, AppConfigService]
})
class AppConfigModule {}

export { AppConfigModule };
