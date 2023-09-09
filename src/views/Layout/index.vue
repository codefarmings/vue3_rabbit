<script setup>
import LayoutNav from './components/LayoutHeader.vue'
import LayoutHeader from './components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>