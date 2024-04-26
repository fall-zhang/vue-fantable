import { App } from 'vue'
import VeCheckbox from './src/index.vue'

VeCheckbox.install = function (Vue: App) {
  Vue.component('FanCheckbox', VeCheckbox)
  Vue.component(VeCheckbox.name, VeCheckbox)
}

export {
  VeCheckbox
}
export default VeCheckbox
