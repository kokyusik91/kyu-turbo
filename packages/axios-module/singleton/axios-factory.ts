import { AxiosInstance, AxiosRequestHeaders } from 'axios';
import CustomAxios from './custom-axios';

// 한번
class AxiosFactory {
  static createInstance(
    baseURL?: string,
    headers?: AxiosRequestHeaders
  ): AxiosInstance {
    // 여기다가 baseURL, headers를 넣어줌
    const axiosInstance = CustomAxios.getAxios(baseURL, headers);

    return axiosInstance;
  }
}

export default AxiosFactory;
