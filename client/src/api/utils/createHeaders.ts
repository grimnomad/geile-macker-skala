import { AxiosRequestHeaders } from 'axios';

interface CreateHeadersInput {
  token: string | null;
}

function createHeaders(input: CreateHeadersInput): AxiosRequestHeaders {
  const { token } = input;

  const headers: AxiosRequestHeaders = {
    Authorization: `Bearer ${token}`
  };

  return headers;
}

export { createHeaders };
