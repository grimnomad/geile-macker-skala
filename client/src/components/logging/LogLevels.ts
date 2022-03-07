import { LogLevel } from './types';

const LogLevels: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  fatal: 4,
  off: 5
};

export { LogLevels };
