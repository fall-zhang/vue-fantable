<template>
    <div>
        <h2>行展开</h2>
        <Explain />
        <Base />
        <ExpandTrigger />
        <ExpandColumn />
        <Expandable />
        <DefaultExpand />
        <ExpandEvent />
        <ExpandControl />
        <ExpandChart />
        <ExpandTable />
        <API title="API" anchor="API" desc="expandOption 行展开配置" />
    </div>
</template>
<script>
import Explain from './explain.md'
import Base from './base.md'
import ExpandTrigger from './expand-trigger.md'
import ExpandColumn from './expand-column.md'
import Expandable from './expandable.md'
import DefaultExpand from './default-expand.md'
import ExpandControl from './expand-control.md'
import ExpandEvent from './expand-event.md'
import ExpandChart from './expand-chart.md'
import ExpandTable from './expand-table.md'
import API from '../api/expand-option-props.vue'

export default {
  name: 'CustomCell',
  components: {
    Explain,
    Base,
    ExpandTrigger,
    ExpandColumn,
    Expandable,
    DefaultExpand,
    ExpandControl,
    ExpandEvent,
    ExpandChart,
    ExpandTable,
    API,
  },
}
</script>
