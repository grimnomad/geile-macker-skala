import { useContext } from 'react';

import { AuthContext } from './AuthContext';
import { Auth } from './types';

function useAuth(): Auth {
  const auth = useContext(AuthContext);

  if (auth === null) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return auth;
}

export { useAuth };
