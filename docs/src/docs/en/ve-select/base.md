<fa-anchor  label="基本功能"></fa-anchor>
:::demo

```html
<template>
    <ve-select v-model="selectItems1" placeholder="姓名" />
</template>
<script>
    export default {
        data() {
            return {
                selectItems1: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
</script>
```

:::

<fa-anchor  label="设置 width"></fa-anchor>
:::demo

```html
<template>
    <ve-select v-model="selectItems1" placeholder="姓名" :width="120" />
</template>
<script>
    export default {
        data() {
            return {
                selectItems1: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
</script>
```

:::

<fa-anchor  label="多选功能"></fa-anchor>
:::demo

```html
<template>
    <ve-select v-model="selectItems2" is-multiple placeholder="姓名" />
</template>
<script>
    export default {
        data() {
            return {
                selectItems2: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
</script>
```

:::

<fa-anchor  label="input 文本框下拉"></fa-anchor>
:::demo

```html
<template>
    <ve-select v-model="selectItems3" placeholder="姓名" isInput />
</template>
<script>
    export default {
        data() {
            return {
                selectItems3: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
</script>
```

:::

<fa-anchor  label="事件"></fa-anchor>
:::demo

```html
<template>
    <ve-select v-model="selectItems1" placeholder="姓名" @on-select-change="selectChange" />
</template>
<script>
    export default {
        data() {
            return {
                selectItems1: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
        methods: {
            selectChange(items) {
                console.log("items::", items);
            },
        },
    };
</script>
```

:::
