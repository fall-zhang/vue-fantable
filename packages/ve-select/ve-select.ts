import { App } from 'vue'
import VeSelect from './src/select'

VeSelect.install = function (Vue:App) {
  Vue.component('FanSelect', VeSelect)
  Vue.component(VeSelect.name, VeSelect)
}
export {
  VeSelect
}
export default VeSelect
