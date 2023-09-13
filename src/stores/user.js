import {defineStore} from 'pinia'
import { ref } from 'vue'
import {getLoginInfoAPI} from '@/apis/user'
 export const useUserStore= defineStore('user',()=>{
    const userInfo=ref({})
    const getUserInfo=async({account,password})=>{
     const res= await  getLoginInfoAPI({account,password})
     userInfo.value=res.result
    }
    return {
        userInfo,
        getUserInfo
    }
 })