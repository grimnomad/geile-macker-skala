import { createObject } from '@gms/shared';

interface HandleFetchInput {
  readonly url: string;
  readonly path: string;
  readonly requestInit: RequestInit;
}

async function handleFetch<T>(input: HandleFetchInput): Promise<T> {
  const { path, requestInit, url } = input;
  const response = await fetch(`${url}${path}`, requestInit);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const payload = await response.json();

  const data = createObject<T>(payload);

  return data;
}

export type { HandleFetchInput };
export { handleFetch };
