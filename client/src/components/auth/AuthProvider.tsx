import { AuthSignInDTO, AuthSignUpDTO, createObject } from '@gms/shared';
import { ReactElement, ReactNode, useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import { useLogIn, useSignUp } from '../../api';
import { useLocalStorage } from '../../hooks';
import { parseJwt } from '../../utils';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider(props: AuthProviderProps): ReactElement {
  const { children } = props;

  const { set, remove, get } = useLocalStorage('token');

  const token = parseJwt(get() ?? '');

  const [handle, setHandle] = useState<string | null>(token?.handle ?? null);

  const history = useHistory();

  const { mutate: logIn } = useLogIn();
  const { mutate: signUp } = useSignUp();

  const login = useCallback(
    (signInDTO: AuthSignInDTO) => {
      logIn(signInDTO, {
        onSuccess: (response) => {
          const token = parseJwt(response.data);

          if (token) {
            setHandle(token.handle);
            set(response.data);
            history.push('/');
          }
        }
      });
    },
    [history, logIn, set]
  );

  const signup = useCallback(
    (signUpDTO: AuthSignUpDTO) => {
      signUp(signUpDTO, {
        onSuccess: () => {
          const { handle, password } = signUpDTO;
          const signInDTO = createObject<AuthSignInDTO>({
            handle,
            password
          });
          login(signInDTO);
        }
      });
    },
    [login, signUp]
  );

  const logout = useCallback(() => {
    setHandle(null);
    remove();
    history.push('/');
  }, [history, remove]);

  return (
    <AuthContext.Provider
      value={{ handle, login, signup, logout, token: get() }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
