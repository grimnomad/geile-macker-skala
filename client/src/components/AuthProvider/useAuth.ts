import { Context, useContext } from 'react';

import { Auth } from './Auth.types';
import { AuthContext } from './AuthContext';

function useAuth<T = unknown>(): Auth<T> {
  const auth = useContext(AuthContext as Context<Auth<T> | null>);

  if (auth === null) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return auth;
}

export { useAuth };
