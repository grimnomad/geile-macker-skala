import { AuthSignInDTO, AuthSignUpDTO } from '@gms/shared';
import { ReactElement, ReactNode, useCallback } from 'react';
import { useQueryClient } from 'react-query';

import { useLogIn, useSignUp } from '../../api';
import { useLocalStorage } from '../../hooks';
import { parseJwt } from '../../utils';
import { AuthContext } from './AuthContext';
import { useSetAuth } from './useSetAuth';

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider(props: AuthProviderProps): ReactElement {
  const { children } = props;

  const queryClient = useQueryClient();

  const { mutate: logIn } = useLogIn();
  const { mutate: signUp } = useSignUp();

  const { set, remove, get } = useLocalStorage('token');

  const token = get();

  const parsedToken = parseJwt(token ?? '');

  const { state, authorize, unauthorize } = useSetAuth({
    handle: parsedToken?.handle ?? null,
    token
  });

  const login = useCallback(
    (signInDTO: AuthSignInDTO, onLogin?: () => void) => {
      logIn(signInDTO, {
        onSuccess: (response) => {
          const token = parseJwt(response.data);

          if (token) {
            authorize(token.handle, response.data);
            set(response.data);
            onLogin?.();
          }
        }
      });
    },
    [authorize, logIn, set]
  );

  const signup = useCallback(
    (signUpDTO: AuthSignUpDTO, onSignup?: () => void) => {
      signUp(signUpDTO, {
        onSuccess: () => {
          const { handle, password } = signUpDTO;

          login({ handle, password }, onSignup);
        }
      });
    },
    [login, signUp]
  );

  const logout = useCallback(
    (onLogout?: () => void) => {
      unauthorize();
      remove();
      queryClient.removeQueries();
      onLogout?.();
    },
    [queryClient, remove, unauthorize]
  );

  return (
    <AuthContext.Provider value={{ login, signup, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
