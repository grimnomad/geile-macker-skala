import { useLogger } from '@gms/components';
import { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { useAuth, useAxiosToken } from '../../../components';
import { RouteFactory } from '../../routes';

function useLogout(): () => void {
  const { logout: authLogout } = useAuth();
  const navigate = useNavigate();
  const logger = useLogger(useLogout.name);
  const queryClient = useQueryClient();
  const { resetToken } = useAxiosToken();

  const logout = useCallback(() => {
    authLogout(() => {
      logger.info('User has successfully logged out.');
      queryClient.removeQueries();
      navigate(RouteFactory.HOME);
      resetToken();
    });
  }, [authLogout, logger, navigate, queryClient, resetToken]);

  return logout;
}

export { useLogout };
