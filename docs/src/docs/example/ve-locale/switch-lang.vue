<template>
    <div>
        <div>
            <button class="button-demo" @click="englishLang()">英文</button>
            <button class="button-demo" @click="chineseLang()">中文</button>
            <br />
            <br />
        </div>
        <div>
            <ve-pagination :total="600" />
        </div>
    </div>
</template>
<script>
import zhCN from 'vue-fantable/packages/src/locale/lang/zh-CN'
import enUS from 'vue-fantable/packages/src/locale/lang/en-US'

export default {
  methods: {
    englishLang() {
      this.$veLocale.use(enUS)
    },
    chineseLang() {
      this.$veLocale.use(zhCN)
    },
  },
}
</script>
