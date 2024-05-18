<template>
  <div class="main">
    <DocBanner></DocBanner>
    <router-view #="{ Component }">
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component"></component>
      </keep-alive>
      <component :is="Component" v-else></component>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
// provide('groupData', 'groupData')
// import mitt from 'mitt'
// const eventC = mitt()
// eventC.on('dd', () => console.log(66464))
// eventC.on('dd', () => console.log(664655))
// eventC.emit('dd')
</script>

<style lang="less">
@import '@/assets/css/App.less';
</style>
