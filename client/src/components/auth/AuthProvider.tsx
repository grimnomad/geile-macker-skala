import { ReactElement, ReactNode, useCallback, useMemo } from 'react';
import { useQueryClient } from 'react-query';

import { useLogIn, useSignUp } from '../../api';
import { parseJwt } from '../../utils';
import { AuthContext } from './AuthContext';
import { Auth, LoginFunction, LogoutFunction, SignupFunction } from './types';
import { useSetAuth } from './useSetAuth';

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider(props: AuthProviderProps): ReactElement {
  const { children } = props;

  const queryClient = useQueryClient();

  const { mutate: logIn } = useLogIn();
  const { mutate: signUp } = useSignUp();

  const { state, authenticate, unauthenticate } = useSetAuth();

  const login = useCallback<LoginFunction>(
    (signInDTO, onLogin) => {
      logIn(signInDTO, {
        onSuccess: (response) => {
          const token = parseJwt(response.data);

          if (token) {
            authenticate(token.handle, response.data);
            onLogin?.();
          }
        }
      });
    },
    [authenticate, logIn]
  );

  const signup = useCallback<SignupFunction>(
    (signUpDTO, onSignup) => {
      signUp(signUpDTO, {
        onSuccess: () => {
          const { handle, password } = signUpDTO;

          login({ handle, password }, onSignup);
        }
      });
    },
    [login, signUp]
  );

  const logout = useCallback<LogoutFunction>(
    (onLogout) => {
      unauthenticate();
      queryClient.removeQueries();
      onLogout?.();
    },
    [queryClient, unauthenticate]
  );

  const auth = useMemo<Auth>(
    () => ({ login, logout, signup, ...state }),
    [login, logout, signup, state]
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthProvider };
