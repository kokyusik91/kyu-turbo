import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import {
  authInterceptor,
  basicInterceptor,
  deviceAuthInterceptor,
} from './interceptor';

// TODO : axios instance를 생성후, 내부 멤버 변수에 넣어준다.

const SERVICES = {
  common: '/',
  feed: '/feed/',
  market: '/market/',
  community: '/community/',
  user: '/user/',
} as const;

type VersionType = '' | 'v1' | 'v2' | 'v3';

interface ApiRequestConfig {
  service: keyof typeof SERVICES;
  version: VersionType;
  locale?: 'en' | 'ko';
  path: string;
  params?: any;
  data?: any;
  config?: AxiosRequestConfig;
}

export default class CustomAxios {
  axiosInstance: AxiosInstance;

  constructor(headerConfig?: RawAxiosRequestHeaders) {
    this.axiosInstance = axios.create({
      baseURL:
        process.env.NODE_ENV === 'development'
          ? ''
          : process.env.REACT_APP_API_BASE_URL,
      headers: { ...headerConfig },
    });
  }

  generateUrl(
    service: keyof typeof SERVICES,
    version: VersionType,
    locale: 'en' | 'ko' = 'ko',
    path: string
  ) {
    if (SERVICES.hasOwnProperty(service)) {
      return `${SERVICES[service]}${version}${
        locale === 'en' ? '/en' : ''
      }${path}`;
    }
    throw new Error('service is wrong');
  }

  // HTTP GET 메서드 추가
  async get2<T>(config: Omit<ApiRequestConfig, 'data'>): Promise<T> {
    return this.axiosInstance
      .get<T>(
        this.generateUrl(
          config.service,
          config.version,
          config.locale,
          config.path
        ),
        { ...config }
      )
      .then((r) => r.data);
  }

  // HTTP POST 메서드 추가
  async post2<T>(config: ApiRequestConfig) {
    return this.axiosInstance
      .post<T>(
        this.generateUrl(
          config.service,
          config.version,
          config.locale,
          config.path
        ),
        config.data,
        { ...config }
      )
      .then((r) => r.data);
  }

  // HTTP PUT 메서드 추가
  async put2<T>(config: ApiRequestConfig) {
    return this.axiosInstance
      .put<T>(
        this.generateUrl(
          config.service,
          config.version,
          config.locale,
          config.path
        ),
        config.data,
        { ...config }
      )
      .then((r) => r.data);
  }

  // HTTP PUT 메서드 추가
  async patch2<T>(config: ApiRequestConfig) {
    return this.axiosInstance
      .put<T>(
        this.generateUrl(
          config.service,
          config.version,
          config.locale,
          config.path
        ),
        config.data,
        { ...config }
      )
      .then((r) => r.data);
  }

  // HTTP DELETE 메서드 추가
  async delete2<T>(config: ApiRequestConfig) {
    return this.axiosInstance
      .delete<T>(
        this.generateUrl(
          config.service,
          config.version,
          config.locale,
          config.path
        ),
        { ...config }
      )
      .then((r) => r.data);
  }
}

class BasicAxiosClass {
  instance: CustomAxios;
  constructor() {
    this.instance = new CustomAxios();
    basicInterceptor(this.instance.axiosInstance);
  }

  static generateAxios() {
    return new BasicAxiosClass().instance;
  }
}

class AuthAxiosClass {
  instance: CustomAxios;
  constructor() {
    // 기본 header 포함
    this.instance = new CustomAxios({ jamsilcrop: 'kks' });
    authInterceptor(this.instance.axiosInstance);
  }

  static generateAxios() {
    return new AuthAxiosClass().instance;
  }
}

class deviceAuthAxiosClass {
  instance: CustomAxios;
  constructor() {
    // 기본 header 포함
    this.instance = new CustomAxios({ model: 'tts' });
    deviceAuthInterceptor(this.instance.axiosInstance);
  }
  static generateAxios() {
    return new deviceAuthAxiosClass().instance;
  }
}

export const basicInstance2 = BasicAxiosClass.generateAxios();

export const authInstance2 = AuthAxiosClass.generateAxios();

export const deviceInstance2 = deviceAuthAxiosClass.generateAxios();
