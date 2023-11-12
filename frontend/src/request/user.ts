import request from './request'
// 用户登录
export function loginByEmail(data:any) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
