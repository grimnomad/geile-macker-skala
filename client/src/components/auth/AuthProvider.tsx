import { AuthSignInDTO, AuthSignUpDTO } from '@gms/shared';
import { ReactElement, ReactNode, useCallback } from 'react';
import { useQueryClient } from 'react-query';

import { useLogIn, useSignUp } from '../../api';
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

  const { state, authenticate, unauthenticate } = useSetAuth();

  const login = useCallback(
    (signInDTO: AuthSignInDTO, onLogin?: () => void) => {
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
      unauthenticate();
      queryClient.removeQueries();
      onLogout?.();
    },
    [queryClient, unauthenticate]
  );

  return (
    <AuthContext.Provider value={{ login, signup, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
