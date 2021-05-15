interface Headers {
  'Content-Type': string;
  Authorization?: string;
}

interface FetchOptions {
  token?: string | null;
  requestOptions?: Omit<RequestInit, 'body' | 'headers' | 'method'>;
}

type UseFetchReturn<TInput, TOutput> = (
  input: TInput
) => Promise<Readonly<TOutput>>;

export type { FetchOptions, Headers, UseFetchReturn };
