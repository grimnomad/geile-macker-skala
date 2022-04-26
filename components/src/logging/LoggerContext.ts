import { createContext } from 'react';

import { LogContext } from './types';

const LoggerContext = createContext<LogContext | null>(null);

export { LoggerContext };
