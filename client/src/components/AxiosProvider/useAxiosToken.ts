import { useContext } from 'react';

import { AxiosAPI, AxiosContext } from './AxiosContext';

function useAxiosToken(): Omit<AxiosAPI, 'instance'> {
  const axios = useContext(AxiosContext);

  if (!axios) {
    throw new Error('useAxiosToken must be used within a AxiosProvider');
  }

  const { resetToken, setToken } = axios;

  return {
    resetToken,
    setToken
  };
}

export { useAxiosToken };
