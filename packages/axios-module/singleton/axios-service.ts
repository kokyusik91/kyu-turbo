import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import AxiosFactory from './axios-factory';
import AxiosInterceptor from './axios-interceptor';
import { ResVo, resVoFromError, resVoFromJson } from './response';

class AxiosService {
  service: AxiosInstance;

  constructor() {
    this.service = AxiosFactory.createInstance();
    AxiosInterceptor.reqiuestHandler(this.service, (config) => {
      console.log('요청 전에 호출하는 함수');
      return config;
    });
  }

  async get2<T>(
    url: string,
    conifg?: AxiosRequestConfig<any>
  ): Promise<ResVo<T>> {
    return new Promise<ResVo>((resolve, reject) => {
      this.service
        .get(url, { ...conifg })
        .then((res: AxiosResponse) => {
          const response = resVoFromJson(res);
          resolve(response);
        })
        .catch((e: AxiosError) => {
          const error = resVoFromError(e);
          reject(error);
        });
    });
  }

  static gerateKKSAxios() {
    return new AxiosService();
  }
}

export default AxiosService.gerateKKSAxios();
