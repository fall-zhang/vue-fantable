:::tip
1、通过 `editOption`属性配置单元格编辑功能<br>
2、通过 `columns` 对象设置`edit=true`允许编辑的列<br>
:::

:::anchor 快捷键

可编辑单元格支持以下快捷键（参考 excel 快捷键）：

| 功能                                         | 快捷键            |
| :------------------------------------------- | :---------------- |
| 活动单元格进入编辑状态                       | `F2`              |
| 停止编辑状态，并停留在当前单元格             | `Ctrl` + `Enter`  |
| 单元格内文本换行                             | `Alt` + `Enter`   |
| 清空活动单元格内容                           | `Delete`          |
| 清空活动单元格内容，并进入编辑状态           | `BackSpace`       |
| 清空活动单元格内容并填入空格                 | `Space`           |
| 停止编辑状态并向下移动活动单元格             | `Enter`           |
| 停止编辑状态并向上移动活动单元格             | `Shift` + `Enter` |
| 停止编辑状态并向右移动活动单元格             | `Tab`             |
| 停止编辑状态并向左移动活动单元格             | `Shift` + `Tab`   |
| 支持在可编辑单元格直接输入文本并进入编辑状态 | -                 |
| 支持长文本输入时，编辑框自动伸缩功能         | -                 |

:::anchor 基本用法

1、尝试将 “Number”列的值改为非数字<br>
2、尝试修改第一行第一列

:::demo 1、单元格进入编辑状态前首先触发`beforeStartCellEditing`回调，如果返回 false，则会阻止进入编辑状态。<br>2、单元格停止编辑后首先触发`beforeCellValueChange`回调，如果返回 false，则会阻止编辑，单元格还原为编辑前状态。编辑成功将触发`afterCellValueChange`方法<br>3、你可以利用`beforeCellValueChange`做编辑校验功能<br>

fan-table/cell-edit/base-use

:::

:::anchor 实例方法

:::demo 1、通过实例方法`startEditingCell({ rowKey, colKey, defaultValue })`编辑指定的单元格

fan-table/cell-edit/instance-method

:::

:::anchor 结合固定列

:::demo

fan-table/cell-edit/combine-column-fixed

:::

:::anchor 结合 element-ui

:::demo 1、你也可以结合 element-ui 组件做日期、数字、下拉等编辑功能<br/>2、注意：组件本身可能会和第三方库组件的快捷键冲突，此时你可以通过 `cellSelectionOption`去禁用单元格选择功能

fan-table/cell-edit/combine-element-ui

:::
