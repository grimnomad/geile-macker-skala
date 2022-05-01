import { createContext } from 'react';

import { Auth } from './Auth.types';

const AuthContext = createContext<Auth | null>(null);

export { AuthContext };
