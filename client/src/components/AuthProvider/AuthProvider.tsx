import { useActor, useInterpret } from '@xstate/react';
import { ReactElement, ReactNode, useCallback, useMemo } from 'react';

import { Auth, SignInFunction, SignOutFunction } from './Auth.types';
import { AuthContext } from './AuthContext';
import { authMachine } from './authMachine';

type CheckLoginFunction<T> = () => Promise<T | null>;

interface AuthProviderProps<T> {
  readonly children: ReactNode;
  readonly checkLogin: CheckLoginFunction<T>;
}

function AuthProvider<T>(props: AuthProviderProps<T>): ReactElement {
  const { children, checkLogin } = props;

  const authService = useInterpret(authMachine, {
    services: {
      checkIfLoggedIn: () => async (send) => {
        const user = await checkLogin();

        if (user) {
          send({
            type: 'REPORT_IS_LOGGED_IN',
            user
          });
        } else {
          send('REPORT_IS_LOGGED_OUT');
        }
      }
    }
  });

  const signIn = useCallback<SignInFunction<unknown>>(
    (user, onSignIn) => {
      authService.send({ type: 'LOG_IN', user });
      onSignIn?.();
    },
    [authService]
  );

  const signOut = useCallback<SignOutFunction>(
    (onSignOut) => {
      authService.send('LOG_OUT');
      onSignOut?.();
    },
    [authService]
  );

  const [state] = useActor(authService);

  const auth = useMemo<Auth<unknown>>(() => {
    const { context, meta } = state;
    const { user } = context;
    const status = meta[`${authMachine.config.id}.${state.value}`];

    return { signIn, signOut, user, status };
  }, [signIn, signOut, state]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export type { AuthProviderProps, CheckLoginFunction };
export { AuthProvider };
