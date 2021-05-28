import { createObject } from '@gms/shared';
import { useCallback, useContext } from 'react';

import { APIContext } from './APIContext';
import { createHeaders } from './createHeaders';
import { handleFetch, HandleFetchInput } from './handleFetch';
import { FetchOptions, UseFetchReturn } from './types';

function useDelete<TOutput>(
  path: string,
  options: FetchOptions = {}
): UseFetchReturn<unknown, TOutput> {
  const { requestOptions, token } = options;
  const url = useContext(APIContext);

  const remove = useCallback(async () => {
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

    const data = await handleFetch<TOutput>(fetchInput);

    return data;
  }, [path, requestOptions, token, url]);

  return remove;
}

export { useDelete };
