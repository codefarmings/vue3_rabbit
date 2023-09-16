import http from '@/utils/http'
// 结算订单信息
export function getCheckoutInfoAPI(){
    return http({
        url:'/member/order/pre'
    })
}

// 创建订单接口
export function createOrderAPI(data){
    return http({
        url:'/member/order',
        method:'post',
        data
    })
}
