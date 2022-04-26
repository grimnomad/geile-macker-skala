import { ReactElement, ReactNode, useCallback, useMemo, useRef } from 'react';

import { LoggerContext } from './LoggerContext';
import { LoggingFactory } from './LoggingFactory';
import { CreateLogger, GetLogger, LogContext, Logger, LogLevel } from './types';

interface LoggerProviderProps {
  readonly children: ReactNode;
  readonly logger: new (name: string) => Logger;
  readonly level?: LogLevel;
}

function LoggerProvider(props: LoggerProviderProps): ReactElement {
  const { children, logger: LoggerClass, level = 'debug' } = props;

  const factoryRef = useRef<LoggingFactory | null>(null);

  const getFactory = useCallback(() => {
    if (factoryRef.current === null) {
      factoryRef.current = new LoggingFactory(LoggerClass, level);
    }

    return factoryRef.current;
  }, [LoggerClass, level]);

  const createLogger = useCallback<CreateLogger>(
    (name) => {
      const factory = getFactory();
      const logger = factory.createLogger(name);

      return logger;
    },
    [getFactory]
  );

  const getLogger = useCallback<GetLogger>(
    (name) => {
      const factory = getFactory();
      const logger = factory.getLogger(name);

      return logger;
    },
    [getFactory]
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
