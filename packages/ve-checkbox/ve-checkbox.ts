import type { App, Plugin } from 'vue'
import VeCheckbox from './src/index.vue'

VeCheckbox.install = function(app:App) {
  app.component('FanCheckbox', VeCheckbox)
  app.component(VeCheckbox.name!, VeCheckbox)
}
export {
  VeCheckbox
}

export default VeCheckbox as typeof VeCheckbox & Plugin
