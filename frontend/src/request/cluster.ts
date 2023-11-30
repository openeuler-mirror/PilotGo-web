import request from './request';

// 分页获取部门机器信息
export function getPagedDepartMachines(data: any) {
    return request({
        url: 'macList/machineinfo',
        method: 'get',
        params: data
    })
}

// 获取部门所有机器信息
export function getDepartMachines(data: any) {
    return request({
        url: 'macList/selectmachine',
        method: 'get',
        params: data
    })
}

// 获取指定部门下的子部门
export function getSubDepartment(data: any) {
    return request({
        url: 'macList/depart',
        method: 'get',
        params: data
    })
}

// 获取机器overview信息
export function getMachineOverview(data: any) {
    return request({
        url: 'api/agent_overview',
        method: 'get',
        params: data
    })
}

// 获取所有服务
export function getserviceList(data: any) {
    return request({
        url: 'api/service_list',
        method: 'get',
        params: data
    })
}

// 获取当前机器登录user
export function getCurrentUser(data: any) {
    return request({
        url: 'api/user_info',
        method: 'get',
        params: data
    })
}

// 获取机器上所有user
export function getMachineAllUser(data: any) {
    return request({
        url: 'api/user_all',
        method: 'get',
        params: data
    })
}

// 获取所有服务
export function getServiceList(data: any) {
    return request({
        url: 'api/service_list',
        method: 'get',
        params: data
    })
}

// 关闭一项服务
export function stopService(data: any) {
    return request({
        url: 'agent/service_stop',
        method: 'post',
        data
    })
}

// 开启一项服务
export function startService(data: any) {
    return request({
        url: 'agent/service_start',
        method: 'post',
        data
    })
}

// 重启一项服务
export function restartService(data: any) {
    return request({
        url: 'agent/service_restart',
        method: 'post',
        data
    })
}
