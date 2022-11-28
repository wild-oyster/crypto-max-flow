import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export function request(config: AxiosRequestConfig): Promise<AxiosResponse> {
  return axios(config);
}
