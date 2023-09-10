<script setup>
import LayoutNav from './components/LayoutHeader.vue'
import LayoutHeader from './components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import {useCategoryStore} from '@/stores/category.js'
import { onMounted } from 'vue'
const categoryStore= useCategoryStore()
onMounted(()=>categoryStore.getCategory())
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key，破坏复用机制，强制销毁重建     ！！！不建议使用，浪费性能 -->
  <!-- <RouterView :key="$route.fullPath"/> -->
  <RouterView/>
  <LayoutFooter />
</template>