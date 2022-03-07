import { Logger, LogLevel } from './types';

type Color = '#000000' | '#0000ff' | '#ff7300' | '#ff4500' | '#ff0000';
type ColorString = `color: ${Color}`;

type ActualLogLevels = Exclude<LogLevel, 'off'>;

type Settings = [ActualLogLevels, ColorString];

const settings: Record<ActualLogLevels, Settings> = {
  debug: ['debug', 'color: #000000'],
  info: ['info', 'color: #0000ff'],
  warn: ['warn', 'color: #ff7300'],
  error: ['error', 'color: #ff4500'],
  fatal: ['fatal', 'color: #ff0000']
};

class ConsoleLogger implements Logger {
  constructor(readonly name: string) {}

  debug(message: unknown, name?: string | undefined): void {
    this.log(message, ...settings.debug, name);
  }

  info(message: unknown, name?: string | undefined): void {
    this.log(message, ...settings.info, name);
  }

  warn(message: unknown, name?: string | undefined): void {
    this.log(message, ...settings.warn, name);
  }

  error(message: unknown, name?: string | undefined): void {
    this.log(message, ...settings.error, name);
  }

  fatal(message: unknown, name?: string | undefined): void {
    this.log(message, ...settings.fatal, name);
  }

  private log(
    message: unknown,
    logLevel: string,
    color: ColorString,
    name?: string
  ): void {
    const logName = name ?? this.name;

    console.log(
      `%c[${logName.toUpperCase()}] [${logLevel.toUpperCase()}] [${new Date().toLocaleString()}]: ${JSON.stringify(
        message,
        null,
        2
      )}`,
      color
    );
  }
}

export { ConsoleLogger };
