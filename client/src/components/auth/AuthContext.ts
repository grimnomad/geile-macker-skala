import { createContext } from 'react';

import { Auth } from './types';

const AuthContext = createContext<Auth | null>(null);

export { AuthContext };
