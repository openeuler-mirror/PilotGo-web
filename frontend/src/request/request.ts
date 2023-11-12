import axios from 'axios';

// 创建一个axios实例
const instance = axios.create({
  baseURL: '/api/v1', // 设置你的API的基本URL
  timeout: 10000, // 设置请求超时时间
});

// 添加请求拦截器，你可以在这里添加请求头等配置
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些事情
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 添加响应拦截器，你可以在这里处理响应数据
instance.interceptors.response.use(
  (response) => {
    // 在响应之前做些事情
    return response.data; // 只返回响应数据部分
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

// 封装通用的request函数
export default function request(config: any) {
  return instance(config);
}