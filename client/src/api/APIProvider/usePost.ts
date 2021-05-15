import { createObject } from '@gms/shared';
import { useCallback, useContext } from 'react';

import { FetchContext } from './APIContext';
import { createHeaders } from './createHeaders';
import { handleFetch, HandleFetchInput } from './handleFetch';
import { FetchOptions, UseFetchReturn } from './types';

function usePost<TInput, TOutput>(
  path: string,
  options: FetchOptions = {}
): UseFetchReturn<TInput, TOutput> {
  const { requestOptions, token } = options;
  const url = useContext(FetchContext);

  const post = useCallback(
    async (input: TInput) => {
      const headers = createHeaders(token);

      const body = JSON.stringify(input);

      const requestInit = createObject<RequestInit>({
        headers,
        body,
        method: 'POST',
        ...requestOptions
      });

      const fetchInput = createObject<HandleFetchInput>({
        path,
        requestInit,
        url
      });

      const data = await handleFetch<TOutput>(fetchInput);

      return data;
    },
    [path, requestOptions, token, url]
  );

  return post;
}

export { usePost };
