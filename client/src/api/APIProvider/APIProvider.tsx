import { ReactElement, ReactNode } from 'react';

import { APIContext } from './APIContext';

interface APIProviderProps {
  url: string;
  children: ReactNode;
}

function APIProvider(props: APIProviderProps): ReactElement {
  const { children, url } = props;

  return <APIContext.Provider value={url}>{children}</APIContext.Provider>;
}

export type { APIProviderProps };
export { APIProvider };
