import { createObject } from '@gms/shared';
import { useCallback } from 'react';

import { FetchOptions } from './types';
import { useAPI } from './useAPI';
import { createHeaders, handleFetch, HandleFetchInput } from './utils';

type UseDeleteReturn<T> = (path: string) => Promise<Readonly<T>>;

function useDelete<T>(options: FetchOptions = {}): UseDeleteReturn<T> {
  const { requestOptions, token } = options;
  const url = useAPI();

  const remove = useCallback(
    async (path: string) => {
      const headers = createHeaders(token);

      const requestInit = createObject<RequestInit>({
        headers,
        method: 'DELETE',
        ...requestOptions
      });

      const fetchInput = createObject<HandleFetchInput>({
        path,
        requestInit,
        url
      });

      const data = await handleFetch<T>(fetchInput);

      return data;
    },
    [requestOptions, token, url]
  );

  return remove;
}

export type { UseDeleteReturn };
export { useDelete };
