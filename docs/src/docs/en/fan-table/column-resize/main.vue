<template>
    <div>
        <h2>Column Resize</h2>
        <Explain />
        <Basic />
        <DisableResizing />
        <API title="API" anchor="API" />
    </div>
</template>
<script>
import Explain from './explain.md'
import Basic from './basic.md'
import DisableResizing from './disable-resizing.md'
import API from '../api/column-width-resize-option-props.vue'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    Basic,
    DisableResizing,
    API,
  },
}
</script>
