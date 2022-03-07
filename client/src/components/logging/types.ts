type LogFunction = (message: unknown, name?: string) => void;

interface Logger {
  debug: LogFunction;
  info: LogFunction;
  warn: LogFunction;
  error: LogFunction;
  fatal: LogFunction;
}

type CreateLogger = (name: string) => Logger;
type GetLogger = (name: string) => Logger | undefined;

interface LogContext {
  createLogger: CreateLogger;
  getLogger: GetLogger;
}

type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'off';

export type { CreateLogger, GetLogger, LogContext, Logger, LogLevel };
