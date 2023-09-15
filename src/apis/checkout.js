import http from '@/utils/http'
// 结算订单信息
export function getCheckoutInfoAPI(){
    return http({
        url:'/member/order/pre'
    })
}
