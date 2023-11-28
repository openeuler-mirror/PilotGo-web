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