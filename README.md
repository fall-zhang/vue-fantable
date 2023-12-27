

# 还在加紧适配中
# still work on adept vue3

# vue-fantable

[![license](https://img.shields.io/npm/l/vue-easytable.svg?maxAge=2592000)](http://www.opensource.org/licenses/mit-license.php)

[English](./README-EN.md) | **中文**

> 如果我看的更远，那是因为我站在巨人的肩膀上。

## 介绍

本项目由 vue-easytable 更新而来，使用 rollup 替代 webpack 和 gulp，支持 Vue3

## 特点

- 采用虚拟滚动技术，支持 30 万行数据展示和实时编辑
- 永久开源免费。当然你也可以选择捐赠，保证项目长期维护和功能加速开发

## API & 文档

- [官方文档 (Github)](http://happy-coding-clans.github.io/vue-easytable/)
- [官方文档 (国内)](http://huangshuwei.gitee.io/vue-easytable/)

## 安装

确保 Vue 版本至少为 3.2

```
npm install vue-fantable
```

or

```
yarn add vue-fantable
```

## 使用

讲一下内容添加到 main.js:

```javascript
import Vue from "vue";
import "vue-easytable/libs/theme-default/index.css";
import VueEasytable from "vue-easytable";

Vue.use(VueEasytable);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

示例:

```vue
<template>
  <ve-table :columns="columns" :table-data="tableData" />
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          { field: "name", key: "a", title: "Name", align: "center" },
          { field: "date", key: "b", title: "Date", align: "left" },
          { field: "hobby", key: "c", title: "Hobby", align: "right" },
          { field: "address", key: "d", title: "Address" },
        ],
        tableData: [
          {
            name: "John",
            date: "1900-05-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Shanghai",
          },
          {
            name: "Dickerson",
            date: "1910-06-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Beijing",
          },
          {
            name: "Larsen",
            date: "2000-07-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Chongqing",
          },
          {
            name: "Geneva",
            date: "2010-08-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Xiamen",
          },
          {
            name: "Jami",
            date: "2020-09-20",
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Shenzhen",
          },
        ],
      };
    },
  };
</script>
```

## 功能支持

**其它基础组件**

- [Loading 组件加载状态](https://happy-coding-clans.github.io/vue-easytable/#/zh/doc/base/loading)
- [Pagination 分页组件](https://happy-coding-clans.github.io/vue-easytable/#/zh/doc/base/pagination)
- [Contextmenu 右键菜单组件](https://happy-coding-clans.github.io/vue-easytable/#/zh/doc/base/contextmenu)
- [Icon 图标组件](https://happy-coding-clans.github.io/vue-easytable/#/zh/doc/base/icon)
- [Locale 国际化组件](https://happy-coding-clans.github.io/vue-easytable/#/zh/doc/base/locale)

**Table 组件**

- [国际化](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/locale)
- [主题定制 & 内置主题](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/theme)
- [虚拟滚动](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/virtual-scroll)
- [自定义事件](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/event-custom)
- [更多](#更多功能支持)

## 开发计划

- [x] 保证项目可以打包构建
  - [x] 更新项目依赖
  - [x] 打包 CSS、less 内容
  - [x] 保证项目示例（文档）可以运行
  - [x] 移除其它包依赖，只依赖 vue
  - [ ] 添加页面或者能运行该组件的内容
  - [ ] 模块拆分，打包优化
  - [ ] 尝试 unplugin-vue 替代 rollup-plugin-vue
- [ ] 之后加上 TS
  - [ ] 添加测试用例
- [ ] 最后支持原生（无框架依赖）

如果没有你想要的的功能，请告诉[我们]()

## 支持环境

- 所有现代浏览器

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Edge                                                         | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |

## 贡献者们

感谢 [easytable](https://github.com/Happy-Coding-Clans/vue-easytable) 原项目工作者们，以及维护者 [huangshuwei](https://github.com/Happy-Coding-Clans) 🙏，本项目继承自 vue-easytable@2.27.1。

### 如何贡献

- 点击 :star: 让更多的人了解到我们
- 如果你希望参与贡献，欢迎 Pull Request

## 讨论组

- [加入 gitter 讨论](https://gitter.im/vue-easytable/community)
- [加入 discord 讨论](https://discord.gg/gBm3k6r)

## License

http://www.opensource.org/licenses/mit-license.php

### 更多功能支持

- [国际化](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/locale)
- [主题定制 & 内置主题](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/theme)
- [虚拟滚动](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/virtual-scroll)
- [自定义事件](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/event-custom)
- [更多](http://happy-coding-clans.github.io/vue-easytable)

- [列固定](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/column-fixed)
- [列隐藏](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/column-hidden)
- [表头固定](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/header-fixed)
- [表头分组](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/header-grouping)
- [筛选](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/header-filter)
- [排序](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/header-sort)
- [列宽拖动](https://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/column-resize)
- [单元格样式](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/cell-style)
- [单元格自定义](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/cell-custom)
- [单元格合并](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/cell-span)
- [单元格选择（键盘操作）](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/cell-selection)
- [单元格自动填充](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/cell-autofill)
- [单元格编辑](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/cell-edit)
- [剪贴板](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/clipboard)
- [右键菜单](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/contextmenu)
- [单元格省略](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/cell-ellipsis)
- [行单选](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/row-radio)
- [行多选](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/row-checkbox)
- [行展开](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/row-expand)
- [行样式](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/row-style)
- [footer 汇总](http://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/footer-summary)
