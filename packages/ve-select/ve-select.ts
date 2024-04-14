import type { App } from 'vue'
import VeSelect from './src/index.jsx'

export default {
  install(Vue: App) {
    Vue.component('FanSelect', VeSelect)
    Vue.component(VeSelect.name, VeSelect)
  }
}
