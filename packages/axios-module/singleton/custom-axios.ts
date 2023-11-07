import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

class CustomAxios {
  static instance: CustomAxios;
  private axiosInstance: AxiosInstance;

  constructor(baseUrl?: string, headerOption?: AxiosRequestHeaders) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl ?? 'http://localhost:3000',
      headers: { ...headerOption },
    });
  }
  // 싱글톤 메서드
  static getAxios(baseUrl?: string, headerOption?: AxiosRequestHeaders) {
    if (!this.instance) {
      this.instance = new CustomAxios(baseUrl, headerOption);
    }
    return this.instance.axiosInstance;
  }
}

export default CustomAxios;
