interface Headers {
  'Content-Type': string;
  Authorization?: string;
}

interface FetchOptions {
  token?: string | null;
  requestOptions?: Omit<RequestInit, 'body' | 'headers' | 'method'>;
}

export type { FetchOptions, Headers };
