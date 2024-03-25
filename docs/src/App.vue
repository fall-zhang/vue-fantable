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

<script>
export default {
  components: {},
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="less">
@import '@/assets/css/App.less';
</style>
