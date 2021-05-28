import { createObject } from '@gms/shared';
import { useCallback, useContext } from 'react';

import { APIContext } from './APIContext';
import { createHeaders } from './createHeaders';
import { handleFetch, HandleFetchInput } from './handleFetch';
import { FetchOptions, UseFetchReturn } from './types';

function useGet<TOutput>(
  path: string,
  options: FetchOptions = {}
): UseFetchReturn<unknown, TOutput> {
  const { requestOptions, token } = options;
  const url = useContext(APIContext);

  const get = useCallback(async () => {
    let headers = createHeaders(token);

    let requestInit = createObject<RequestInit>({
      method: 'GET',
      headers,
      ...requestOptions
    });

    const input = createObject<HandleFetchInput>({ path, requestInit, url });

    const data = await handleFetch<TOutput>(input);

    return data;
  }, [path, requestOptions, token, url]);

  return get;
}

export { useGet };
