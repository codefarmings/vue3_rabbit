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