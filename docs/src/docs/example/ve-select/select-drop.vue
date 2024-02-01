<template>
  <ve-select v-model="selectItems3" placeholder="姓名" is-input />
</template>
<script>
export default {
  data() {
    return {
      selectItems3: [
        { value: 0, label: '张三' },
        { value: 1, label: '李四' },
        { value: 2, label: '王二' },
      ],
    }
  },
}
</script>