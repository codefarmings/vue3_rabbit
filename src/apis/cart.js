import http from '@/utils/http'
// 加入购物车接口
export const insertCartAPI=({skuId,count})=>{
    return http({
        url: '/member/cart',
        method:'post',
        data:{
            skuId,
            count
        }
    })
}

// 获取最新购物车列表接口
export const findNewCartListAPI=()=>{
    return http({
        url:'/member/cart',
    })
}