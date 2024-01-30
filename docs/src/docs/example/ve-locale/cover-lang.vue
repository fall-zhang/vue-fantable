<template>
    <div>
        <div>
            <button class="button-demo" @click="coverLang()">修改文案</button>
            <br />
            <br />
        </div>
        <div>
            <ve-pagination :total="600" />
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    coverLang() {
      const lang = {
        pagination: {
          goto: '跳转到',
        },
      }
      this.$veLocale.update(lang)
    },
  },
}
</script>
