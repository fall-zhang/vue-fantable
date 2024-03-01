```html
<template>
  <ve-select v-model="selectItems2" is-multiple placeholder="姓名" />
</template>
<script>
export default {
  data() {
    return {
      selectItems2: [
        { value: 0, label: '张三' },
        { value: 1, label: '李四' },
        { value: 2, label: '王二' },
      ],
    }
  },
}
</script>
```
