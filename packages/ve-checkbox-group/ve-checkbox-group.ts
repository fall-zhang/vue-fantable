import type { App, Plugin } from 'vue'
import VeCheckboxGroup from './src/index.vue'
VeCheckboxGroup.install = function (app:App) {
  app.component('FanCheckboxGroup', VeCheckboxGroup)
  app.component(VeCheckboxGroup.name!, VeCheckboxGroup)
}
export { VeCheckboxGroup }

export default VeCheckboxGroup as typeof VeCheckboxGroup & Plugin