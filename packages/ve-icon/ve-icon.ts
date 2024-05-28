import type { App, Plugin } from 'vue'
import VeIcon from './src/index'

VeIcon.install = function (Vue: App) {
  Vue.component('FanIcon', VeIcon)
  Vue.component(VeIcon.name!, VeIcon)
}

export {
  VeIcon
}

export default VeIcon as typeof VeIcon & Plugin