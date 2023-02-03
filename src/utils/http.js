import axios from 'axios';
import { getToken } from './auth';

// baseURL

const instance = axios.create({
  withCredentials: true,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    // 请求头 token配置
    const token = getToken();

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: token,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

