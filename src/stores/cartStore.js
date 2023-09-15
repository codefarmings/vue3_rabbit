// 封装购物车模块
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {useUserStore} from './user'
import {insertCartAPI,findNewCartListAPI,delCartAPI} from '@/apis/cart'
export const useCartStore = defineStore('cart', () => {
  const updataNewList=async()=>{
    const res=await findNewCartListAPI()
    cartList.value=res.result
  }
  // 1. 定义state - cartList
  const cartList = ref([])
  // 判断是否登录
  const userStore=useUserStore()
  const isLogin = computed(()=>userStore.userInfo.token)
  // 2. 定义action - addCart添加购物车
  const addCart = async(goods) => {
    const {skuId,count} = goods
    if(isLogin.value){
      // 登录之后的购物车逻辑
     await insertCartAPI({skuId,count})
     updataNewList()
    }else{
      // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      // 找到了
      item.count++
    } else {
      // 没找到
      cartList.value.push(goods)
    }
    }
    
  };
  // 删除购物车
  const removeCart=async(skuId)=>{
    if(isLogin.value){
    await  delCartAPI([skuId])
    updataNewList()
    }else{
       // 找到要删除项的下标值-findIndex
    // 通过splice方法删除
    const idx=cartList.value.findIndex((item)=>skuId===item.skuId)
    cartList.value.splice(idx,1)
    }
   
  };
  // 单选功能
  const singleCheck=(skuId,selected)=>{
    // 通过skuid找到要修改的那一项,然后把他的selected修改为传过来的selected
    const item=cartList.value.find((item)=>item.skuId===skuId)
    item.selected=selected
  }
  // 全选
  const checkAll=(selected)=>{
    cartList.value.forEach((item)=>
      item.selected=selected
    )
  }
  // 计算属性
  // 计算总件数
  const allCount=computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
  // 计算总价钱
  const allPrice=computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))

  // 计算已选商品的件数
  const selectedCount=computed(()=>cartList.value.filter((item)=>item.selected).reduce((a,c)=>a+c.count,0))
  // 计算已选商品的总价
  const selectedPrice=computed(()=>cartList.value.filter((item)=>item.selected).reduce((a,c)=>a+c.count*c.price,0))
  // 是否全选
  const isAll=computed(()=>cartList.value.every((item)=>item.selected))
  return {
    cartList,
    addCart,
    allCount,
    allPrice,
    removeCart,
    isAll,
    checkAll,
    selectedCount,
    selectedPrice,
    isLogin,
    singleCheck
  }
}, {
  persist: true,
})