import { AxiosInstance } from 'axios';
import { createContext } from 'react';

type SetToken = (token: string) => void;

interface AxiosAPI {
  readonly instance: AxiosInstance;
  readonly setToken: SetToken;
  readonly resetToken: () => void;
}

const AxiosContext = createContext<AxiosAPI | null>(null);

export type { AxiosAPI, SetToken };
export { AxiosContext };
