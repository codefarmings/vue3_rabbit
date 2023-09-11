import http from '@/utils/http'
// 获取详情页的接口
export function getDetailAPI(id){
    return http({
        url:'/goods',
        params:{id}
    })
}