import request from './request'

// 获取日志列表
export function getLogs(data) {
  return request({
    url: '/log/log_all',
    method: 'get',
    params: data
  })
}