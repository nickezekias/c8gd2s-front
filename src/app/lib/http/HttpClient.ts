/* eslint-disable @typescript-eslint/no-explicit-any */
import BaseHttpClient from "@/app/base/http/HttpClient";

import Axios from "axios";
import type { AxiosResponse } from "axios";
// import { logoutOnAuthOrCsrfError } from "@/utils/helpers";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI,
  withCredentials: true,
});

interface HttpInput {
  url: string;
  data?: any;
  config?: any;
}

/*
 *  Interceptor to logout a user on authorized acces or csrf token error (401, 419)
 */
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    // logoutOnAuthOrCsrfError(error, store);
    return Promise.reject(error);
  }
);

export default class HttpClient extends BaseHttpClient<any> {
  get(
    url: HttpInput["url"],
    config?: HttpInput["config"]
  ): Promise<AxiosResponse> {
    return axios.get(url, config);
  }
  post(
    url: HttpInput["url"],
    data: HttpInput["data"],
    config?: HttpInput["config"]
  ): Promise<AxiosResponse> {
    return axios.post(url, data, config);
  }
  put(
    url: HttpInput["url"],
    data: HttpInput["data"],
    config?: HttpInput["config"]
  ): Promise<AxiosResponse> {
    return axios.put(url, data, config);
  }
  delete(
    url: HttpInput["url"],
    config?: HttpInput["config"]
  ): Promise<AxiosResponse> {
    return axios.delete(url, config);
  }
}
