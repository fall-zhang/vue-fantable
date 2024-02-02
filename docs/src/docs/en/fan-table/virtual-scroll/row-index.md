:::anchor Row Index

After virtual scrolling is enabled, the row index can be returned through the server. If there are client queries in the table, we need to do some processing. See the following example for details

:::demo 1、`scrolling({ startRowIndex, visibleStartIndex, visibleEndIndex, visibleAboveCount, visibleBelowCount})` is triggered when scrolling. `startRowIndex` is the line number currently starting rendering,`visibleStartIndex`is the starting line number of the currently visible area,`visibleEndIndex` is the end line number of the currently visible area,`visibleAboveCount` is the number of renderings above the currently visible area, `visibleBelowCount` is the number of renderings below the currently visible area<br>2、Calculate the real sequence number of the current virtual scroll through the `scrolling` method combined with the `rowIndex` returned by the `renderbodycell ({row, column, rowindex}` method: `rowIndex + startRowIndex + 1`

fan-table/virtual-scroll/row-index

:::
