import { createObject } from '@gms/shared';
import { useCallback } from 'react';

import { FetchOptions } from './types';
import { useAPI } from './useAPI';
import { createHeaders, handleFetch, HandleFetchInput } from './utils';

type UseGetReturn<T> = (path: string) => Promise<Readonly<T>>;

function useGet<T>(options: FetchOptions = {}): UseGetReturn<T> {
  const { requestOptions, token } = options;
  const url = useAPI();

  const get = useCallback(
    async (path: string) => {
      let headers = createHeaders(token);

      let requestInit = createObject<RequestInit>({
        method: 'GET',
        headers,
        ...requestOptions
      });

      const input = createObject<HandleFetchInput>({ path, requestInit, url });

      const data = await handleFetch<T>(input);

      return data;
    },
    [requestOptions, token, url]
  );

  return get;
}

export type { UseGetReturn };
export { useGet };
