import {
  AxiosError,
  AxiosResponse,
  AxiosResponseHeaders,
  InternalAxiosRequestConfig,
  RawAxiosResponseHeaders,
} from 'axios';

export type ResVo<T = any, D = any> = {
  data: T;
  status: number;
  statusFormat: '성공' | '실패';
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: InternalAxiosRequestConfig<D>;
  request?: any;
};

// 공통 res
export const resVoFromJson = <T>(response: AxiosResponse): ResVo<T> => {
  return {
    ...response,
    statusFormat: '성공',
  };
};

export const resVoFromError = (error: AxiosError) => {
  return {
    ...error,
    statusFormat: '실패',
  };
};
