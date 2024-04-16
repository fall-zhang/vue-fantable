import { App } from 'vue'
import VeIcon from './src/index'

// VeIcon.install = function (Vue: App) {
//   Vue.component('FanIcon', VeIcon)
//   Vue.component(VeIcon.name, VeIcon)
// }

export default {
  install(Vue: App) {
    Vue.component('FanIcon', VeIcon)
    Vue.component(VeIcon.name, VeIcon)
  }
}
