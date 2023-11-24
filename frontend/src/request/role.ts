import request from './request'

// 获取角色列表
export function getRolesPaged(data: any) {
    return request({
        url: '/user/roles_paged',
        method: 'get',
        params: data
    })
}