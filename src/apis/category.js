import http from '@/utils/http'
export function getCategoryAPI(id){
    return http({
        url:'/category',
        params:{id}
    })
}

// 二级分类面包屑筛选接口
export function getCategoryFilterAPI(id){
    return http({
        url:'/category/sub/filter',
        params:{id}
    })
}