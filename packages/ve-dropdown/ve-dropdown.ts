import type { App, Plugin } from 'vue'
import VeDropdown from './src/index'

VeDropdown.install = function (app:App) {
  app.component('FanDropdown', VeDropdown)
  app.component(VeDropdown.name!, VeDropdown)
}
export { VeDropdown }

export default VeDropdown as typeof VeDropdown & Plugin
