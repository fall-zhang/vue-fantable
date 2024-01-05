/* thanks for  https://github.com/tobiasahlin/SpinKit */
<template>
  <div :style="loadingStyle" :class="['ve-loading', loadingClass]">
    <div :class="clsName('spin-container')">
      <div :class="clsName('spin')">
        <component :is="$attrs.name" v-bind="spinProps"></component>
      </div>
      <div :style="{ color: $attrs.color }" :class="clsName('spin-tip')">
        {{ $attrs.tip }}
      </div>
    </div>
  </div>
</template>
<script>

import { clsName } from './util/index'
import { COMPS_NAME } from './util/constant'
import Plane from './plane.jsx'
import Bounce from './bounce.jsx'
import Wave from './wave.jsx'
import Pulse from './pulse.jsx'
import Flow from './flow.jsx'
import Grid from './grid.jsx'

export default {
  name: COMPS_NAME.VE_LOADING,
  components: { Plane, Bounce, Wave, Pulse, Flow, Grid },
  data() {
    return {
      spinProps: {}
    }
  },
  computed: {
    // loading class
    loadingClass() {
      const { visible, fullscreen } = this.$attrs
      const clsFixed = clsName('fixed')
      const clsHide = clsName('hide')
      return {
        [clsName('overlay')]: true,
        [clsFixed]: fullscreen,
        [clsHide]: !visible,
      }
    },

    // loading style
    loadingStyle() {
      const { overlayBackgroundColor } = this.$attrs

      return {
        'background-color': overlayBackgroundColor,
      }
    },
  },
  created() {
    const { width, height, color } = this.$attrs
    this.spinProps = {
      width,
      height,
      color
    }
  },
  methods: {
    clsName
  }
}
</script>
