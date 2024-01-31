:::anchor 行序号问题

开启虚拟滚动后，行号可以通过服务端返回。如果表格存在客户端查询的情况，需要需要我们做一些处理。具体见下面示例

:::demo 1、滚动时会触发`scrolling({ startRowIndex, visibleStartIndex, visibleEndIndex, visibleAboveCount, visibleBelowCount})`。`startRowIndex`为当前开始渲染的行号，`visibleStartIndex`为当前可见区域的开始行号，`visibleEndIndex`为当前可见区域的结束行号，`visibleAboveCount`为当前可见区域上方渲染的数量，`visibleBelowCount`为当前可见区域下方渲染的数量<br>2、通过`scrolling`方法结合`renderBodyCell({ row, column, rowIndex })`方法返回的`rowIndex` 算出当前虚拟滚动的真实序号，为`rowIndex + startRowIndex + 1`

fan-table/virtual-scroll/row-index

:::
