:::anchor body 自定义单元格

:::demo 1、`column`配置中，支持通过属性 `renderBodyCell({row,column,rowIndex},h)`传入渲染函数，此处为 jsx 语法,书写和模板语法接近。更多 jsx 知识请参考[Vue.js 考官方文档](https://vuejs.org/v2/guide/render-function.html#JSX)<br>2、渲染函数接收三个参数，`row`:当前行数据、`column`:当前列配置、`rowIndex`:行索引

fan-table/cell-custom/body-cell

:::
