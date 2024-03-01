<template>
    <div>
        <button class="button-demo" @click="show()">开启 Loading</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      loadingInstance: null,
    }
  },
  mounted() {
    this.loadingInstance = this.$veLoading({
      fullscreen: true,
      name: 'bounce',
      lock: true,
    })
  },
  unmounted() {
    this.loadingInstance.destroy()
  },
  methods: {
    show() {
      this.loadingInstance.show()

      setTimeout(() => {
        this.loadingInstance.close()
      }, 2000)
    },
  },
}
</script>
