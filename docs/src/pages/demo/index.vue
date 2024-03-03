<template>
  <div class="demo-page">
    <div class="site-demo-container">
      <h1 class="main-title">
        <FoldingFan /> vue-fantable
      </h1>
      <div class="demo-title">
        <div class="demo-title-text">
          {{ currentLocal.demo1.selection }}
        </div>
      </div>
      <NormalDataGrid />
      <div class="demo-title last">
        <div class="demo-title-text">
          {{ currentLocal.demo2.selection }}
        </div>
      </div>
      <SpreadSheet />
    </div>
  </div>
</template>

<script>
import locale from '@/comp/locale'
import FoldingFan from '@/components/icons/folding-fan.vue'
import I18nMixins from '@/comp/mixins/i18n-mixins'
import NormalDataGrid from './normal-data-grid.vue'
import SpreadSheet from './SpreadSheet.vue'
import Icon from 'vue-fantable/packages/src/icon/fantable.svg'
export default {
  name: 'DemoPage',
  components: {
    NormalDataGrid,
    SpreadSheet,
    FoldingFan
  },
  mixins: [I18nMixins],
  data() {
    return {
      Icon
    }
  },
  computed: {
    // current local
    currentLocal() {
      return locale[this.currentDocLang].completeDemo
    },
  },
}
</script>

<style lang="less">
.demo-page {
  display: flex;
  justify-content: center;
}

.main-title {
  // display: ;
  font-size: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.site-demo-container {
  min-width: calc(240px + 760px);
  max-width: calc(280px + 1080px);
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-top: 62px;
  padding: 10px 0;

  .demo-title {
    display: flex;
    height: 60px;
    align-items: center;
    // background: #1890ffb3;
    font-size: 30px;
    padding: 0 100px;
    font-weight: bold;
    color: #555;

    .demo-title-text {
      display: inline;
      padding: 0 8px;
      border-left: 4px solid #555;
    }

    &.last {
      margin-top: 40px;
    }
  }
}
</style>
