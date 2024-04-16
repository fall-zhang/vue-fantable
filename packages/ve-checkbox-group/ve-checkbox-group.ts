import { App } from 'vue'
import VeCheckboxGroup from './src/index.vue'

VeCheckboxGroup.install = function (Vue:App) {
  Vue.component('FanCheckboxGroup', VeCheckboxGroup)
  Vue.component(VeCheckboxGroup.name, VeCheckboxGroup)
}

export default VeCheckboxGroup
