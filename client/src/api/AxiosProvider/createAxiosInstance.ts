import Axios, { AxiosInstance } from 'axios';

function createAxiosInstance(baseURL: string): AxiosInstance {
  const instance = Axios.create({ baseURL });

  instance.interceptors.response.use((response) => response.data);

  return instance;
}

export { createAxiosInstance };
