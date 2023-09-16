import http from '@/utils/http'
export function getLoginInfoAPI({account,password}){
    return http({
        url:'/login',
        method:'post',
        data:{
            account,
            password
        }
    })
}
// 猜你喜欢接口
export const getLikeListAPI = ({ limit = 4 }) => {
    return http({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }