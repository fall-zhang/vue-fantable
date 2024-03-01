<template>
  <ve-select v-model="selectItems1" placeholder="姓名" @on-select-change="selectChange" />
</template>
<script>
export default {
  data() {
    return {
      selectItems1: [
        { value: 0, label: '张三' },
        { value: 1, label: '李四' },
        { value: 2, label: '王二' },
      ],
    }
  },
  methods: {
    selectChange(items) {
      console.log('items::', items)
    },
  },
}
</script>