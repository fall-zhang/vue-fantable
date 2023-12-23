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
      const { visible, fullscreen } = this
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
      const { overlayBackgroundColor } = this

      return {
        'background-color': overlayBackgroundColor,
      }
    },
  },

  render() {
    const { width, height, color } = this

    const spinProps = {
      props: {
        width,
        height,
        color
      }
    }

    return (
      <div
        style={this.loadingStyle}
        class={['ve-loading', this.loadingClass]}
      >
        <div class={clsName('spin-container')}>
          <div class={clsName('spin')}>
            <this.name {...spinProps}></this.name>
          </div>
          <div style={{ color }} class={clsName('spin-tip')}>
            {this.tip}
          </div>
        </div>
      </div>
    )
  },
}
