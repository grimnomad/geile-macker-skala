import { useLocalStorage, useLogger } from '@gms/components';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLogIn } from '../../api';
import { RouteFactory } from '../../pages';
import { parseJwt } from '../../utils';
import { useAuth } from '../AuthProvider';
import { useAxiosToken } from '../AxiosProvider';

type UseLoginReturn = (
  input: Parameters<ReturnType<typeof useLogIn>['mutate']>[0]
) => void;

function useLogin(to: string = RouteFactory.DASHBOARD): UseLoginReturn {
  const logger = useLogger(useLogin.name);
  const { signIn } = useAuth<string>();
  const { mutate: logIn } = useLogIn();
  const navigate = useNavigate();
  const { setToken } = useAxiosToken();
  const { set } = useLocalStorage('token');

  const login = useCallback<UseLoginReturn>(
    (signInDTO) => {
      logIn(signInDTO, {
        onSuccess: (response) => {
          const token = parseJwt(response.data);

          if (token) {
            const { handle } = token;

            signIn(handle, () => {
              logger.info('User has successfully logged in.');
              navigate(to, { replace: true });
              set(response.data);
              setToken(response.data);
            });
          }
        }
      });
    },
    [logIn, logger, navigate, set, setToken, signIn, to]
  );

  return login;
}

export { useLogin };
