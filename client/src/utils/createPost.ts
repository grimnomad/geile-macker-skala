import { createObject } from '@gms/shared';

type RequestOptions = Omit<RequestInit, 'method' | 'headers' | 'body'>;

function createPost<T>(
  data: T,
  requestOptions?: RequestOptions
): Readonly<RequestInit> {
  const body = JSON.stringify(data);

  const requestInit = createObject<RequestInit>({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body,
    ...requestOptions
  });

  return requestInit;
}

export { createPost };
