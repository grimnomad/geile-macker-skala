import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { EnvironmentVariables } from '../types';

@Injectable()
class JWTConfigService {
  constructor(private configService: ConfigService<EnvironmentVariables>) {}

  get SECRET(): string {
    return this.configService.get('JWT_SECRET', 'secret');
  }
}

export { JWTConfigService };
