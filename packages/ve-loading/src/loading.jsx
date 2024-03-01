/* thanks for  https://github.com/tobiasahlin/SpinKit */

import { clsName } from './util/index'
import { nextTick } from 'vue'
import { COMPS_NAME } from './util/constant'
import { addClass, removeClass } from '../../src/utils/dom'
import Plane from './components/plane.jsx'
import Bounce from './components/bounce.jsx'
import Wave from './components/wave.jsx'
import Pulse from './components/pulse.jsx'
import Flow from './components/flow.jsx'
import Grid from './components/grid.jsx'
const PARENT_LOCK_CLASS = clsName('parent-lock')
const PARENT_RELATIVE_CLASS = clsName('parent-relative')

export default {
  name: COMPS_NAME.VE_LOADING,
  components: { Plane, Bounce, Wave, Pulse, Flow, Grid },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    loadingClass() {
      const { fullscreen } = this.$attrs
      const { loading } = this
      const clsFixed = clsName('fixed')
      const clsHide = clsName('hide')
      const result = {
        [clsName('overlay')]: true,
        [clsFixed]: fullscreen,
        [clsHide]: !loading,
      }
      return result
    },

    // loading style
    loadingStyle() {
      const { overlayBackgroundColor } = this.$attrs

      return {
        'background-color': overlayBackgroundColor,
      }
    },
    loadIcon() {
      const name = this.$attrs.name
      const map = { Plane, Bounce, Wave, Pulse, Flow, Grid }
      const result = name.at(0).toUpperCase() + name.slice(1)

      return map[result]
    }
  },
  methods: {
    show() {
      nextTick(() => {
        if (this.lock) {
          addClass(this.$el, PARENT_LOCK_CLASS)
        }
        this.loading = true
      })
    },
    close() {
      nextTick(() => {
        if (this.lock) {
          removeClass(this.parent__, PARENT_LOCK_CLASS)
        }
        this.loading = false
      })
    },
    unmounted () {
      removeClass(this.parent__, PARENT_RELATIVE_CLASS)
      removeClass(this.parent__, PARENT_LOCK_CLASS)

      if (this.$el && this.$attrs.parent__) {
        this.$el.remove()
      }
      this.$destroy()
      this.loading = false
    }
  },
  render() {
    const { width, height, color } = this.$attrs

    const spinProps = {
      width,
      height,
      color
    }
    return (
      <div
        style={this.loadingStyle}
        class={['ve-loading', this.loadingClass]}
      >
        <div class={clsName('spin-container')}>
          <div class={clsName('spin')}>
            <Grid {...spinProps}></Grid>
          </div>
          <div style={{ color: this.$attrs.color }} class={clsName('spin-tip')}>
            {this.$attrs.tip}
          </div>
        </div>
      </div>
    )
  },
}
