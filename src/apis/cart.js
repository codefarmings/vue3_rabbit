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


// 删除购物车接口
export const delCartAPI=(ids)=>{
    return http({
        url:'/member/cart',
        method:'delete',
        data:{
            ids
        }
    })
}

// 合并购物车接口
export const mergeCartAPI=(data)=>{
    return http({
        url:'/member/cart/merge',
        method:'post',
        data
    })
}