<template>
    <div>
        <h2>单元格选择</h2>
        <Explain />
        <ShortCuts />
        <Base />
        <DisableSelection />
        <SingleSelectionInstanceMethods />
        <RangeSelectionInstanceMethods />
        <API title="API" anchor="API" desc="cellSelection 单元格选择配置" />
    </div>
</template>
<script>
import Explain from './explain.md'
import ShortCuts from './shortcuts.md'
import Base from './base.md'
import DisableSelection from './disable-selection.md'
import SingleSelectionInstanceMethods from './single-selection-instance-methods.md'
import RangeSelectionInstanceMethods from './range-selection-instance-methods.md'
import API from '../api/cell-selection-option-props.vue'

export default {
  name: 'CellSelection',
  components: {
    Explain,
    ShortCuts,
    Base,
    DisableSelection,
    SingleSelectionInstanceMethods,
    RangeSelectionInstanceMethods,
    API,
  },
}
</script>
