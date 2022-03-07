import { ReactElement, ReactNode, useCallback, useMemo } from 'react';

import { LoggerContext } from './LoggerContext';
import { LoggingFactory } from './LoggingFactory';
import { CreateLogger, GetLogger, LogContext, Logger, LogLevel } from './types';

interface LoggerProviderProps {
  readonly children: ReactNode;
  readonly logger: new (name: string) => Logger;
  readonly level?: LogLevel;
}

const factory = new LoggingFactory();

function LoggerProvider(props: LoggerProviderProps): ReactElement {
  const { children, logger: LoggerClass, level = 'debug' } = props;

  const createLogger = useCallback<CreateLogger>(
    (name) => {
      const logger = factory.createLogger(name, level, LoggerClass);

      return logger;
    },
    [level, LoggerClass]
  );

  const getLogger = useCallback<GetLogger>(
    (name) => factory.getLogger(name),
    []
  );

  const logContext = useMemo<LogContext>(
    () => ({
      createLogger,
      getLogger
    }),
    [createLogger, getLogger]
  );

  return (
    <LoggerContext.Provider value={logContext}>
      {children}
    </LoggerContext.Provider>
  );
}

export type { LoggerProviderProps };
export { LoggerProvider };
