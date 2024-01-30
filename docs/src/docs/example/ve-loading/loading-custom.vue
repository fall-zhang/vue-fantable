<template>
    <div>
        <button class="button-demo" @click="show()">开启 Loading</button>
        <button class="button-demo" @click="close()">关闭 Loading</button>
        <br />
        <br />
        <div
            id="custom-loading-container"
            style="width:100%;height:250px;background-color:#2980b9;"
        ></div>
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
      target: document.querySelector('#custom-loading-container'),
      name: 'wave',
      color: '#fff',
      tip: 'loading...',
      overlayBackgroundColor: 'rgba(255, 255, 255, 0.1)',
    })
    this.show()
  },
  unmounted() {
    this.loadingInstance.destroy()
  },
  methods: {
    show() {
      this.loadingInstance.show()
    },
    close() {
      this.loadingInstance.close()
    },
  },
}
</script>
