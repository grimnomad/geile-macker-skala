import { useLogger } from '@gms/components';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAxiosToken, useLogIn } from '../../../api';
import { useAuth } from '../../../components';
import { parseJwt } from '../../../utils';

type UseLoginReturn = (
  input: Parameters<ReturnType<typeof useLogIn>['mutate']>[0]
) => void;

function useLogin(): UseLoginReturn {
  const logger = useLogger(useLogin.name);
  const { login: authLogin } = useAuth();
  const { mutate: logIn } = useLogIn();
  const navigate = useNavigate();
  const { setToken } = useAxiosToken();

  const login = useCallback<UseLoginReturn>(
    (signInDTO) => {
      logIn(signInDTO, {
        onSuccess: (response) => {
          const token = parseJwt(response.data);

          if (token) {
            const { handle } = token;

            authLogin({
              handle,
              token: response.data,
              onLogin: () => {
                logger.info('User has successfully logged in.');
                navigate('/dashboard');
                setToken(response.data);
              }
            });
          }
        }
      });
    },
    [authLogin, logIn, logger, navigate, setToken]
  );

  return login;
}

export { useLogin };
