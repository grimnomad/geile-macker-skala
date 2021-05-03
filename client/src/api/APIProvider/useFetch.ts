import { createObject } from '@gms/shared';
import produce from 'immer';
import { useCallback, useContext } from 'react';

import { FetchContext } from './APIContext';

interface Headers {
  'Content-Type': string;
  Authorization?: string;
}

interface UseFetchInput {
  path: string;
  token?: string | null;
  requestOptions: Omit<RequestInit, 'body' | 'headers'>;
}

type UseFetchReturn<TInput, TOutput> = (
  input: TInput
) => Promise<Readonly<TOutput>>;

function useFetch<TInput, TOutput>(
  input: UseFetchInput
): UseFetchReturn<TInput, TOutput> {
  const { requestOptions, path, token } = input;
  const url = useContext(FetchContext);

  const retrieve = useCallback(
    async (input: TInput) => {
      const body = JSON.stringify(input);

      let headers = createObject<Headers>({
        'Content-Type': 'application/json;charset=utf-8'
      });

      if (token) {
        headers = produce(headers, (draft) => {
          draft.Authorization = `Bearer ${token}`;
        });
      }

      const requestInit = createObject<RequestInit>({
        headers,
        body,
        ...requestOptions
      });

      const response = await fetch(`${url}${path}`, requestInit);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const payload = await response.json();

      const data = createObject<TOutput>(payload);

      return data;
    },
    [path, requestOptions, token, url]
  );

  return retrieve;
}

export type { UseFetchInput };
export { useFetch };
