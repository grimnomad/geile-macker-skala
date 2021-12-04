import { AxiosInstance } from 'axios';
import { createContext } from 'react';

const AxiosContext = createContext<AxiosInstance | null>(null);

export { AxiosContext };
