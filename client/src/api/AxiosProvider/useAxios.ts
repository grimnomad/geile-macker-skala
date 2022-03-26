import { useContext } from 'react';

import { AxiosAPI, AxiosContext } from './AxiosContext';

function useAxios(): AxiosAPI['instance'] {
  const axios = useContext(AxiosContext);

  if (!axios) {
    throw new Error('useAxios must be used within a AxiosProvider');
  }

  return axios.instance;
}

export { useAxios };
