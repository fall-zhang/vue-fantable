> 已经基本完成[文档](https://fall-zhang.github.io/vue-fantable/#/zh/doc/intro)的开发
> vue-fantable 开发已经初步完成，如果遇到了任何组件和文档有关问题，可以提交 [issue](https://github.com/fall-zhang/vue-fantable/issues)

# vue-fantable

[![license](https://img.shields.io/npm/l/vue-fantable.svg)](http://www.opensource.org/licenses/mit-license.php)

[English](./README-EN.md) | **中文**

> 如果我看的更远，那是因为我站在巨人的肩膀上。

## 介绍

如果你的项目使用 vue2，建议使用 [vue-easytable](https://www.npmjs.com/package/vue-easytable)

本项目由 vue-easytable 更新而来，支持 Vue3，使用 ESM（建议 node V18+）体积更小，像使用 vue-easytable 一样，使用 vue-fantable 吧。

## 特点

- 采用虚拟滚动技术，支持 30 万行数据展示和实时编辑
- 永久开源免费。当然你也可以选择捐赠，保证项目长期维护和功能加速开发

## API & 文档

> 文档正在逐步完善，大家可以参照 [vue-easytable](https://happy-coding-clans.github.io/vue-easytable/#/zh/doc/intro) 的文档。组件使用方式和原组件一致。

- [vue-fantable 文档](https://fall-zhang.github.io/vue-fantable/#/zh/doc/intro)
- [CHANGE_LOG](./CHANGE-LOG.md)

## 安装

确保 Vue 版本至少为 3.2

```
npm install vue-fantable
# or
yarn add vue-fantable
```

## 使用

讲一下内容添加到 main.js:

```javascript
import { createApp } from "vue";
import "vue-fantable/libs/theme-default.css";
import App from './app.vue'
import VueFantable from "vue-fantable";
const app = createApp(App)
app.use(VueFantable);

app.mounted('#app')
```

### 示例 1

```vue
<template>
  <fan-table :columns="columns" :table-data="tableData" :max-height="400"/>
</template>

<script >
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

### 示例 2

```vue
<template>
  <div class="spreadsheet">
    <fan-table style="word-break: break-word" fixed-header :scroll-width="0" :max-height="500" border-y :columns="columns"
      :table-data="tableData" row-key-field-name="rowKey" :virtual-scroll-option="virtualScrollOption"
      :cell-autofill-option="cellAutofillOption" :edit-option="editOption"
      :contextmenu-body-option="contextmenuBodyOption" :contextmenu-header-option="contextmenuHeaderOption"
      :row-style-option="rowStyleOption" :column-width-resize-option="columnWidthResizeOption" />
  </div>
</template>

<script lang="jsx">

const COLUMN_KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']
export default {
  name: 'SpreadSheet',
  data() {
    return {
      // start row index
      startRowIndex: 0,
      columnWidthResizeOption: {
        enable: true,
      },
      virtualScrollOption: {
        // 是否开启
        enable: true,
        scrolling: this.scrolling,
      },
      cellAutofillOption: {
        directionX: true,
        directionY: true,
        beforeAutofill: ({
          direction,
          sourceSelectionRangeIndexes,
          targetSelectionRangeIndexes,
          sourceSelectionData,
          targetSelectionData,
        }) => { },
        afterAutofill: ({
          direction,
          sourceSelectionRangeIndexes,
          targetSelectionRangeIndexes,
          sourceSelectionData,
          targetSelectionData,
        }) => { },
      },
      // edit option 可控单元格编辑
      editOption: {
        beforeCellValueChange: ({ row, column, changeValue }) => { },
        afterCellValueChange: ({ row, column, changeValue }) => { },
      },
      // contextmenu header
      contextmenuHeaderOption: {
        //  before contextmenu show. 你可以在这里更改 contextmenu 配置
        beforeShow: ({
          isWholeColSelection,
          selectionRangeKeys,
          selectionRangeIndexes,
        }) => {
          // do something
        },
        afterMenuClick: ({
          type,
          selectionRangeKeys,
          selectionRangeIndexes,
        }) => {
          // do something
        },
        contextmenus: [
          { type: 'CUT', },
          { type: 'COPY', },
          { type: 'SEPARATOR', },
          { type: 'EMPTY_COLUMN', },
          { type: 'SEPARATOR', },
          { type: 'LEFT_FIXED_COLUMN_TO', },
          { type: 'CANCEL_LEFT_FIXED_COLUMN_TO', },
          { type: 'RIGHT_FIXED_COLUMN_TO', },
          { type: 'CANCEL_RIGHT_FIXED_COLUMN_TO', },
        ],
      },
      contextmenuBodyOption: {
        //  before contextmenu show. 你可以在这里更改 contextmenu 配置
        beforeShow: ({
          isWholeRowSelection,
          selectionRangeKeys,
          selectionRangeIndexes,
        }) => {
          console.log('---contextmenu body beforeShow--')
          console.log('isWholeRowSelection::', isWholeRowSelection)
          console.log('selectionRangeKeys::', selectionRangeKeys)
          console.log(
            'selectionRangeIndexes::',
            selectionRangeIndexes,
          )
        },
        afterMenuClick: ({
          type,
          selectionRangeKeys,
          selectionRangeIndexes,
        }) => {
          console.log('---contextmenu body afterMenuClick--')
          console.log('type::', type)
          console.log('selectionRangeKeys::', selectionRangeKeys)
          console.log('selectionRangeIndexes::', selectionRangeIndexes)
        },
        contextmenus: [
          { type: 'CUT', },
          { type: 'COPY', },
          { type: 'SEPARATOR', },
          { type: 'INSERT_ROW_ABOVE', },
          { type: 'INSERT_ROW_BELOW', },
          { type: 'SEPARATOR', },
          { type: 'REMOVE_ROW', },
          { type: 'EMPTY_ROW', },
          { type: 'EMPTY_CELL', },
        ],
      },
      rowStyleOption: {
        clickHighlight: false,
        hoverHighlight: false,
      },
      tableData: [],
    }
  },
  computed: {
    // current local
    columns() {
      let columns = [
        {
          field: 'index',
          key: 'index',
          // is operation column
          operationColumn: true,
          title: '',
          width: 55,
          fixed: 'left',
          renderBodyCell: this.renderRowIndex,
        },
      ]
      columns = columns.concat(
        COLUMN_KEYS.map((keyValue) => {
          return {
            title: keyValue,
            field: keyValue,
            key: keyValue,
            width: 90,
            edit: true,
          }
        }),
      )
      return columns
    },
  },
  created() {
    this.initTableData()
  },
  methods: {
    // 渲染 row index
    renderRowIndex({ row, column, rowIndex }) {
      return (<span>{rowIndex + this.startRowIndex + 1}</span>)
    },
    scrolling({
      startRowIndex,
      visibleStartIndex,
      visibleEndIndex,
      visibleAboveCount,
      visibleBelowCount,
    }) {
      this.startRowIndex = startRowIndex
    },
    initTableData() {
      const tableData = []
      for (let i = 0; i < 5000; i++) {
        const dataItem = {
          rowKey: i,
        }
        COLUMN_KEYS.forEach((keyValue) => {
          dataItem[keyValue] = ''
        })
        if (i === 1 || i === 3) {
          dataItem.C = 'YOU'
          dataItem.D = 'CAN'
          dataItem.E = 'TRY'
          dataItem.F = 'ENTER'
          dataItem.G = 'SOME'
          dataItem.H = 'WORDS'
          dataItem.I = '!!!'
        }
        tableData.push(dataItem)
      }
      this.tableData = tableData
    },
  },
}
</script>
<style lang="less">
.spreadsheet {
  padding: 0 100px;
  margin: 30px 0;
}
</style>
```

## 功能支持

**其它基础组件**

- [Loading 组件加载状态]()
- [Pagination 分页组件]()
- [Contextmenu 右键菜单组件]()
- [Icon 图标组件]()
- [Locale 国际化组件]()

**Table 组件**

- [轻量]()
- [国际化]()
- [主题定制 & 内置主题]()
- [虚拟滚动]()
- [自定义事件]()
- [更多](##更多功能支持)

## 开发计划

开发计划详情可看：https://flowus.cn/share/7fea404b-8e1f-4eaa-8ccf-cacb79a929f6

- [x] 保证项目的打包构建
- [x] 修复升级到 Vue3 后的问题
- [x] 发布文档，并解决文档中遇到的问题，详情查看 [文档](./docs/README.md)
- [ ] 测试
  - [x] 舍弃 jest 全局 API 使用 vitest api
  - [ ] 调整适配原测试内容
  - [ ] 添加新的测试
- [ ] 关注性能和优化
  - [ ] 减少 DOM，使用 transform 代替 position:absolute
  - [ ] 加上防抖和节流
  - [ ] 减少更新渲染卡顿问题（单次渲染时长超过 100ms）
  - [ ] 移除过时以及兼容性 API（使用新的 web 标准）
  - [ ] setTimeout 优化
  - [x] 使用 CSS 变量
  - [x] 重写 Loading 组件
  - [ ] 异步加载模式，拆分为三步进行加载
- [ ] 使用 TS 重构应用（V1.0）
  - [x] 将组件改写为 vue setup 形式
  - [x] 添加 TS 类型支持
  - [ ] TS 重写组件
- [ ] 最后支持原生（V2.0无框架依赖）
  - [ ] 使用 shadow dom 替代

如果没有你想要的的功能，请告诉[我](https://github.com/fall-zhang/vue-fantable/issues)

## 支持环境

- 所有现代浏览器

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" /></br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Edge                                                         | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |

## 贡献者们

感谢 [easytable](https://github.com/Happy-Coding-Clans/vue-easytable) 原项目工作者们，以及维护者 [huangshuwei](https://github.com/Happy-Coding-Clans) 🙏，本项目继承自 vue-easytable@2.27.1。

### 如何贡献

- 点击 :star: 让更多的人了解到我们
- 如果你希望参与贡献，欢迎 Pull Request

## 讨论组

- [加入 gitter 讨论](https://github.com/fall-zhang/vue-fantable/issues)

## License

http://www.opensource.org/licenses/mit-license.php

## 更多功能支持

- [国际化]()
- [主题定制 & 内置主题]()
- [虚拟滚动]()
- [自定义事件]()
- [列隐藏]()
- [表头固定]()
- [表头分组]()
- [筛选]()
- [排序]()
- [列宽拖动]()
- [单元格样式]()
- [单元格自定义]()
- [单元格合并]()
- [单元格选择（键盘操作）]()
- [单元格自动填充]()
- [单元格编辑]()
- [剪贴板]()
- [右键菜单]()
- [单元格省略]()
- [行单选]()
- [行多选]()
- [行展开]()
- [行样式]()
- [footer 汇总]()
