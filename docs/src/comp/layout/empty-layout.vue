<template>
  <div>
    <router-view #="{ Component }">
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component"></component>
      </keep-alive>
      <component v-else :is="Component"></component>
    </router-view>
  </div>
</template>
