import { createObject } from '@gms/shared';
import produce from 'immer';

type RequestOptions = Omit<RequestInit, 'method' | 'headers' | 'body'>;

interface Headers {
  'Content-Type': string;
  Authorization?: string;
}

function createPost<T>(
  data: T,
  requestOptions?: RequestOptions | null,
  token?: string | null
): Readonly<RequestInit> {
  const body = JSON.stringify(data);

  let headers = createObject<Headers>({
    'Content-Type': 'application/json;charset=utf-8'
  });

  if (token) {
    headers = produce(headers, (draft) => {
      draft.Authorization = `Bearer ${token}`;
    });
  }

  const requestInit = createObject<RequestInit>({
    method: 'POST',
    headers,
    body,
    ...requestOptions
  });

  return requestInit;
}

export { createPost };
