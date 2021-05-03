import { ReactElement, ReactNode } from 'react';

import { FetchContext } from './APIContext';

interface APIProviderProps {
  url: string;
  children: ReactNode;
}

function APIProvider(props: APIProviderProps): ReactElement {
  const { children, url } = props;

  return <FetchContext.Provider value={url}>{children}</FetchContext.Provider>;
}

export type { APIProviderProps };
export { APIProvider };
