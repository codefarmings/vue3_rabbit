// 封装购物车模块
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useCartStore = defineStore('cart', () => {
  // 1. 定义state - cartList
  const cartList = ref([])
  // 2. 定义action - addCart
  const addCart = (goods) => {
    console.log('添加', goods)
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
  };
  // 删除购物车
  const removeCart=(skuId)=>{
    // 找到要删除项的下标值-findIndex
    // 通过splice方法删除
    const idx=cartList.value.findIndex((item)=>skuId===item.skuId)
    cartList.value.splice(idx,1)
  };
  // 单选功能
  const singleCheck=(skuId,selected)=>{
    // 通过skuid找到要修改的那一项,然后把他的selected修改为传过来的selected
    const item=cartList.value.find((item)=>item.skuId===skuId)
    item.selected=selected
  }
  // 计算属性
  // 计算总件数
  const allCount=computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
  // 计算总价钱
  const allPrice=computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))
  return {
    cartList,
    addCart,
    allCount,
    allPrice,
    removeCart,
    singleCheck
  }
}, {
  persist: true,
})