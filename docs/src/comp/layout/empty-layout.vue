<template>
  <router-view #="{ Component }">
    <keep-alive v-if="$route.meta.keepAlive">
      <component :is="Component"></component>
    </keep-alive>
    <component :is="Component" v-else></component>
  </router-view>
</template>
