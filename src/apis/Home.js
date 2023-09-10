import http from '@/utils/http'
export function getBannerAPI(query={}){
    const {distributionSite}=query
    return http({
        url:'/home/banner',
        query:{
            distributionSite
        }
    })
}

export function findNewAPI(){
    return http({
        url:'/home/new'
    })
}
export function getHotAPI(){
    return  http({
        url:'/home/hot'
    })
}
export function getGoodsAPI(){
    return http({
        url: '/home/goods'
    })
}
