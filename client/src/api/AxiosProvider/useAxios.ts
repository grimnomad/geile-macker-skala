import { AxiosInstance } from 'axios';
import { useContext } from 'react';

import { AxiosContext } from './AxiosContext';

function useAxios(): AxiosInstance {
  const axios = useContext(AxiosContext);

  if (!axios) {
    throw new Error('useAxios must be used within a AxiosProvider');
  }

  return axios;
}

export { useAxios };
