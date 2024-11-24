import axios, { AxiosError, AxiosResponse } from 'axios';
import { AUTH_TOKEN } from '@/constants/storage';
// 初始化 Axios 实例
const apiClient = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/',
  timeout: 10000, // 超时时间
});

// 请求拦截器：处理认证、重复请求取消
apiClient.interceptors.request.use(
  (config) => {
    // 设置认证Token
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 处理重复请求取消逻辑...

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器：处理全局错误
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      // 处理不同的 HTTP 状态码错误
      switch (error.response.status) {
        case 401:
          // 未授权，跳转登录或重新获取Token
          break;
        case 403:
          // 权限不足
          break;
        case 500:
          // 服务器错误
          break;
        default:
        // 其他错误
      }
    }
    return Promise.reject(error);
  }
);

export const get = <T>(
  url: string,
  params?: Record<string, any>
): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    apiClient
      .get<T>(url, { params: params || {} })
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: any) => {
        console.error('GET request failed:', error);
        reject(error);
      });
  });
};
export const post = <T>(
  url: string,
  data?: Record<string, any>
): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    apiClient
      .post<T>(url, data)
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((error: any) => {
        console.error('POST request failed:', error);
        reject(error);
      });
  });
};
// export default apiClient;
