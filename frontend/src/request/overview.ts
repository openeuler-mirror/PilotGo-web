import request from './request';

// 获取机器集群概览信息
export function machinesOverview() {
  return request({
    url: '/overview/info',
    method: 'get',
  });
}