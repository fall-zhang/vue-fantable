import type { App } from 'vue'
import VeSelect from './src/index'

export default {
  install(Vue: App) {
    Vue.component('FanSelect', VeSelect)
    Vue.component(VeSelect.name, VeSelect)
  }
}
