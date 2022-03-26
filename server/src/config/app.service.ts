import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { EnvironmentVariables } from '../types';

@Injectable()
class AppConfigService {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>
  ) {}

  get PORT(): number {
    return this.configService.get('PORT', 3001);
  }
}

export { AppConfigService };
