import Axios from 'axios';
import { ReactElement, ReactNode, useRef } from 'react';

import { AxiosContext } from './AxiosContext';

interface AxiosProviderProps {
  readonly baseURL: string;
  readonly children: ReactNode;
}

function AxiosProvider(props: AxiosProviderProps): ReactElement {
  const { baseURL, children } = props;

  const axiosRef = useRef(
    Axios.create({
      baseURL
    })
  );

  axiosRef.current.interceptors.response.use((response) => response.data);

  return (
    <AxiosContext.Provider value={axiosRef.current}>
      {children}
    </AxiosContext.Provider>
  );
}

export type { AxiosProviderProps };
export { AxiosProvider };
