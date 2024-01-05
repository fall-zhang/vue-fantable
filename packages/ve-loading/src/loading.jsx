/* thanks for  https://github.com/tobiasahlin/SpinKit */

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

  render() {
    console.log(this)
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
            <this.$attrs.name {...spinProps}></this.$attrs.name>
          </div>
          <div style={{ color: this.$attrs.color }} class={clsName('spin-tip')}>
            {this.$attrs.tip}
          </div>
        </div>
      </div>
    )
  },
}
