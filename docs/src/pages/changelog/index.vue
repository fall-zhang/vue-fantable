<template>
  <div class="changelog-container">
    <DocChangelog class="changelog-text"></DocChangelog>
  </div>
</template>

<script setup>
import DocChangelog from 'vue-fantable/CHANGE-LOG.md'
</script>

<style scoped lang="less">
.changelog-container {
  width: 100%;
  display: flex;
  justify-content: center;

  .changelog-text {
    min-width: calc(760px);
    max-width: calc(1080px);
    margin-top: 80px;
    // margin-left: ;
  }
}
</style>

<script>
export default {
  name: 'DocChangelog'
}
</script>