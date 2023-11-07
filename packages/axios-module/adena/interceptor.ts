import { AxiosInstance } from 'axios';

export const basicInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    console.log('basic instance 요청 전');
    return config;
  });

  axiosInstance.interceptors.response.use((config) => {
    console.log('basic instance 응답 받은 후');
    return config;
  });
};

export const authInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    console.log('auth instance 요청 전');
    return config;
  });

  axiosInstance.interceptors.response.use((config) => {
    console.log('auth instance 응답 받은 후');
    return config;
  });
};

export const deviceAuthInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    console.log('device instance 요청 전');
    return config;
  });

  axiosInstance.interceptors.response.use((config) => {
    console.log('device instance 요청 후');
    return config;
  });
};
