import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export default class AxiosInterceptor {
  static reqiuestHandler(
    axiosInstance: AxiosInstance,

    resolveCallback?: (
      config: InternalAxiosRequestConfig
    ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>,
    refjectCallback?: ((error: any) => any) | null
  ) {
    return axiosInstance.interceptors.request.use(
      resolveCallback,
      refjectCallback
    );
  }

  // responseHandler(axiosInstance: AxiosInstance, callback: response) {
  //   return axiosInstance.interceptors.response.use((response) => {
  //     console.log('응답 후 실행할 메서드');
  //     return response;
  //   });
  // }
}
