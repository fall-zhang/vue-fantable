import { App } from 'vue'
import VeRadio from './src/index'

VeRadio.install = function (Vue:App) {
  Vue.component('FanRadio', VeRadio)
  Vue.component(VeRadio.name, VeRadio)
}

export default VeRadio
