import request from './request';

// 获取部门机器信息
export function getDepartMachines(data: any) {
    return request({
        url: 'macList/machineinfo',
        method: 'get',
        params: data
    })
}
