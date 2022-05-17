import { useLocalStorage, useLogger } from '@gms/components';
import { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { RouteFactory } from '../../pages';
import { useAuth } from '../AuthProvider';
import { useAxiosToken } from '../AxiosProvider';

function useLogout(): () => void {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const logger = useLogger(useLogout.name);
  const queryClient = useQueryClient();
  const { resetToken } = useAxiosToken();
  const { remove } = useLocalStorage('token');

  const logout = useCallback(() => {
    signOut(() => {
      logger.info('User has successfully logged out.');
      queryClient.removeQueries();
      navigate(RouteFactory.HOME);
      resetToken();
      remove();
    });
  }, [logger, navigate, queryClient, remove, resetToken, signOut]);

  return logout;
}

export { useLogout };
