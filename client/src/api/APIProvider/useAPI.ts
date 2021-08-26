import { useContext } from 'react';

import { APIContext } from './APIContext';

function useAPI(): string {
  const url = useContext(APIContext);

  return url;
}

export { useAPI };
