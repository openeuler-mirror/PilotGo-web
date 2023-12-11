import request from './request'

// 分页获取角色列表
export function getRolesPaged(data: any) {
    return request({
        url: '/user/roles_paged',
        method: 'get',
        params: data
    })
}

// 获取所有角色列表
export function getRoles() {
    return request({
        url: '/user/roles',
        method: 'get',
    })
}

// 修改角色权限
export function changeRolePermission(data: any) {
    return request({
        url: '/user/roleChange',
        method: 'post',
        data
    })
}

// 删除角色
export function deleteRole(data: any) {
    return request({
        url: '/user/delRole',
        method: 'post',
        data
    })
}