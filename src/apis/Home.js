import http from '@/utils/http'
export function getBannerAPI(){
    return http({
        url:'/home/banner'
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