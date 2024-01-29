:::anchor 基本用法

1、尝试将 “Number”列的值改为非数字<br>
2、尝试修改第一行第一列

:::demo 1、单元格进入编辑状态前首先触发`beforeStartCellEditing`回调，如果返回 false，则会阻止进入编辑状态。<br>2、单元格停止编辑后首先触发`beforeCellValueChange`回调，如果返回 false，则会阻止编辑，单元格还原为编辑前状态。编辑成功将触发`afterCellValueChange`方法<br>3、你可以利用`beforeCellValueChange`做编辑校验功能<br>

fan-table/cell-edit/base-use

:::
