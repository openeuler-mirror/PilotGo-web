import request from './request';

// 用户登录
export function loginByEmail(data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        data,
    });
}

// 用户登出
export function logout() {
    return request({
        url: '/user/logout',
        method: 'get',
    })
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
export function searchUser(data: any) {
    return request({
        url: '/user/userSearch',
        method: 'post',
        data,
    });
}

// 添加用户
export function addUser(data: any) {
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}

// 更新用户信息
export function updateUser(data: any) {
    return request({
        url: '/user/update',
        method: 'post',
        data
    })
}