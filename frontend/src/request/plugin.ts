import request from './request'

// 分页查询插件列表
export function getPluginsPaged(data: any) {
    return request({
        url: '/plugins_paged',
        method: 'get',
        params: data,
    })
}

// 获取插件列表
export function getPlugins() {
    return request({
        url: '/plugins',
        method: 'get',
    })
}