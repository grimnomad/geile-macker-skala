import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { EnvironmentVariables } from '../types';

@Injectable()
class MongoDBConfigService {
  constructor(private configService: ConfigService<EnvironmentVariables>) {}

  get URI(): string {
    return this.configService.get('MONGODB_URI', 'mongodb://localhost/gms');
  }
}

export { MongoDBConfigService };
