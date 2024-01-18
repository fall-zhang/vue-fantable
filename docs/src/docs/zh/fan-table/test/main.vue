<template>
    <div>
        <h2>测试</h2>

        <!--  <div>
            <vue-anchor label="性能测试" />
            <performance />
        </div> -->
        <div>
            <vue-anchor label="性能测试" />
            <performance />
        </div>
    </div>
</template>
<script>
import performance from './performance.md'

export default {
  name: 'TestPage',
  components: {
    performance,
  },
}
</script>
