import { createContext } from 'react';

import { Auth } from './Auth.types';

const AuthContext = createContext<Auth<unknown> | null>(null);

export { AuthContext };
