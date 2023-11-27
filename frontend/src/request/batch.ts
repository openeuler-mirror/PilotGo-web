import request from './request';

// 获取批次
export function getBatches(data: any) {
    return request({
        url: '/batchmanager/batchinfo',
        method: 'get',
        params: data
    })
}

// 获取批次详情
export function getBatchDetail(data: any) {
    return request({
        url: '/batchmanager/batchmachineinfo',
        method: 'get',
        params: data
    })
}

export function deleteBatch(data: any) {
    return request({
        url: '/batchmanager/deletebatch',
        method: 'post',
        data,
    })
}
