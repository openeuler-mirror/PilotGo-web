import request from './request';

// 获取批次
export function getBatches(data:any) {
    return request({
        url: '/batchmanager/batchinfo',
        method: 'get',
        params: data
    })
}