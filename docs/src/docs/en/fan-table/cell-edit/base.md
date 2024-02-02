:::anchor Basic usage

Trying to change the value of the 'Number' column to a non number

:::demo 1.Before a cell enters the editing state, the `beforeStartCellEditing` callback is first triggered. If false is returned, it will prevent the cell from entering the editing state<br>2.After the cell stops editing, the `beforeCellValueChange` callback is triggered first. If false is returned, the editing will be blocked and the cell will be restored to the state before editing. If the editing is successful, the `afterCellValueChange` method will be triggered<br>3.You can use beforecellvaluechange to verify the contents of cell editing

fan-table/cell-edit/base-use

:::
