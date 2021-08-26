import { createObject } from '@gms/shared';
import { useCallback } from 'react';

import { FetchOptions } from './types';
import { useAPI } from './useAPI';
import { createHeaders, handleFetch, HandleFetchInput } from './utils';

type UsePostReturn<TInput, TOutput> = (
  path: string,
  input: TInput
) => Promise<Readonly<TOutput>>;

function usePost<TInput, TOutput>(
  options: FetchOptions = {}
): UsePostReturn<TInput, TOutput> {
  const { requestOptions, token } = options;
  const url = useAPI();

  const post = useCallback(
    async (path: string, input: TInput) => {
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
    [requestOptions, token, url]
  );

  return post;
}

export type { UsePostReturn };
export { usePost };
