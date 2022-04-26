import { useContext } from 'react';

import { LoggerContext } from './LoggerContext';
import { Logger } from './types';

function useLogger(name: string): Logger {
  const context = useContext(LoggerContext);

  if (!context) {
    throw new Error('useLogger must be used within a LoggerProvider.');
  }

  const { createLogger, getLogger } = context;

  let logger = getLogger(name);

  if (!logger) {
    logger = createLogger(name);
  }

  return logger;
}

export { useLogger };
