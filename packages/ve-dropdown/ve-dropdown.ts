import { App } from 'vue'
import VeDropdown from './src/index'

VeDropdown.install = function (Vue:App) {
  Vue.component('FanDropdown', VeDropdown)
  Vue.component(VeDropdown.name, VeDropdown)
}

export default VeDropdown
