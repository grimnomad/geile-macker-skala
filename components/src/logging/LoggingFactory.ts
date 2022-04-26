import { noop } from '@gms/utils';

import { LogLevels } from './LogLevels';
import { Logger, LogLevel } from './types';

class LoggingFactory {
  private loggerMap = new Map<string, Logger>();

  constructor(
    private readonly LoggerFactory: new (name: string) => Logger,
    private readonly level: LogLevel
  ) {}

  createLogger(name: string): Logger {
    const logger = new this.LoggerFactory(name);

    for (const [key, value] of Object.entries(LogLevels)) {
      const logLevel = LogLevels[this.level];

      if (logLevel > value) {
        Object.defineProperty(logger, key, { value: noop });
      }
    }

    this.loggerMap.set(name, logger);

    return logger;
  }

  getLogger(name: string): Logger | undefined {
    return this.loggerMap.get(name);
  }
}

export { LoggingFactory };
