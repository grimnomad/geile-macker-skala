import { AxiosInstance } from 'axios';
import { ReactElement, ReactNode, useCallback, useMemo, useRef } from 'react';

import { AxiosAPI, AxiosContext, SetToken } from './AxiosContext';
import { createAxiosInstance } from './createAxiosInstance';

interface AxiosProviderProps {
  readonly baseURL: string;
  readonly children: ReactNode;
}

function AxiosProvider(props: AxiosProviderProps): ReactElement {
  const { baseURL, children } = props;

  const axiosRef = useRef<AxiosInstance | null>(null);

  const getInstance = useCallback(() => {
    if (axiosRef.current === null) {
      axiosRef.current = createAxiosInstance(baseURL);
    }

    return axiosRef.current;
  }, [baseURL]);

  const setToken = useCallback<SetToken>(
    (token) => {
      const instance = getInstance();

      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    [getInstance]
  );

  const resetToken = useCallback(() => {
    const instance = getInstance();

    delete instance.defaults.headers.common['Authorization'];
  }, [getInstance]);

  const context = useMemo<AxiosAPI>(
    () => ({ instance: getInstance(), resetToken, setToken }),
    [getInstance, resetToken, setToken]
  );

  return (
    <AxiosContext.Provider value={context}>{children}</AxiosContext.Provider>
  );
}

export type { AxiosProviderProps };
export { AxiosProvider };
