<template>
    <div>
        <h2>Instance Methods</h2>
        <Explain />
        <ScrollTo />
        <ScrollToColKey />
        <ScrollToRowKey />
        <API title="API" anchor="API" desc="Instance Methods" />
    </div>
</template>
<script>
import Explain from './explain.md'
import ScrollTo from './scroll-to.md'
import ScrollToColKey from './scroll-to-col-key.md'
import ScrollToRowKey from './scroll-to-row-key.md'
import API from '../api/instance-methods.vue'

export default {
  name: 'BasicMain',
  components: {
    Explain,
    ScrollTo,
    ScrollToColKey,
    ScrollToRowKey,
    API,
  },
}
</script>
