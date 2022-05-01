import { ReactElement, ReactNode, useCallback, useMemo } from 'react';

import { Auth, LoginFunction, LogoutFunction } from './Auth.types';
import { AuthContext } from './AuthContext';
import { useSetAuth } from './useSetAuth';

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider(props: AuthProviderProps): ReactElement {
  const { children } = props;

  const { state, authenticate, unauthenticate } = useSetAuth();

  const login = useCallback<LoginFunction>(
    (input) => {
      const { handle, token, onLogin } = input;

      authenticate(handle, token);
      onLogin?.();
    },
    [authenticate]
  );

  const logout = useCallback<LogoutFunction>(
    (onLogout) => {
      unauthenticate();
      onLogout?.();
    },
    [unauthenticate]
  );

  const auth = useMemo<Auth>(
    () => ({ login, logout, ...state }),
    [login, logout, state]
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthProvider };
