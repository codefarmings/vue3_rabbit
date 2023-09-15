import { defineStore } from "pinia";
import { ref } from "vue";
import { getLoginInfoAPI } from "@/apis/user";
import {useCartStore} from './cartStore'
import {mergeCartAPI} from '@/apis/cart';
export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore()
    const userInfo = ref({});
    const getUserInfo = async ({ account, password }) => {
      const res = await getLoginInfoAPI({ account, password });
      userInfo.value = res.result;
      // 合并购物车操作
    await mergeCartAPI(cartStore.cartList.map((item)=>{
        return{
          skuId:item.skuId,
          selected:item.selected,
          count:item.count
        }
      }))
      cartStore.updataNewList()
    };

   //  清除用户信息
   const clearUserInfo=()=>{
      userInfo.value={};
      cartStore.clearCart()
   }
    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    };
  },
  {
    persist: true,
  }
);
