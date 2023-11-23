import { request } from './request'

// 分页查询插件列表
export function getPluginsPaged(data) {
    return request_v1({
        url: '/plugins_paged',
        method: 'get',
        params: data,
    })
}