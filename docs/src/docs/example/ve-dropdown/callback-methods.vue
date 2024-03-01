<template>
    <ve-dropdown v-model="options" hide-by-item-click :before-visible-change="beforeVisibleChange">
        <div style="color:blue;cursor: pointer;">点击这里</div>
    </ve-dropdown>
</template>
<script>
export default {
  data() {
    return {
      options: [
        { value: 0, label: '张三' },
        { value: 1, label: '李四' },
        { value: 2, label: '王二' },
      ],
    }
  },
  methods: {
    beforeVisibleChange({ nextVisible }) {
      console.log('nextVisible::', nextVisible)
    },
  },
}
</script>
