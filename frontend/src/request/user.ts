import request from './request';
// 用户登录
export function loginByEmail(data: any) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  });
}
// 获取全部用户信息
export function getUsers(data: any) {
  return request({
    url: '/user/searchAll',
    method: 'get',
    params: data,
  });
}
// 按邮箱查找用户
export function searchUser(data) {
  return request({
    url: '/user/userSearch',
    method: 'post',
    data,
  });
}
