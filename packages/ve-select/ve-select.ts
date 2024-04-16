import { App } from 'vue'
import VeSelect from './src/index.jsx'

VeSelect.install = function (Vue:App) {
  Vue.component('FanSelect', VeSelect)
  Vue.component(VeSelect.name, VeSelect)
}

export default VeSelect
