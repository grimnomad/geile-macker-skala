import { useContext } from 'react';

import { Auth } from './Auth.types';
import { AuthContext } from './AuthContext';

function useAuth(): Auth {
  const auth = useContext(AuthContext);

  if (auth === null) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return auth;
}

export { useAuth };
