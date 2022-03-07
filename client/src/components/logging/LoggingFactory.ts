import { noOp } from '../../utils';
import { LogLevels } from './LogLevels';
import { Logger, LogLevel } from './types';

class LoggingFactory {
  private loggerMap = new Map<string, Logger>();

  createLogger(
    name: string,
    level: LogLevel,
    LoggerFactory: new (name: string) => Logger
  ): Logger {
    const logger = new LoggerFactory(name);

    for (const [key, value] of Object.entries(LogLevels)) {
      const logLevel = LogLevels[level];

      if (logLevel > value) {
        Object.defineProperty(logger, key, { value: noOp });
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
