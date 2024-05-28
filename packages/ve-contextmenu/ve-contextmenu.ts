import type { App, Plugin } from 'vue'
import VeContextmenu from './src/index'
VeContextmenu.install = function (app:App) {
  app.component('FanContextmenu', VeContextmenu)
  app.component(VeContextmenu.name!, VeContextmenu)
}
export { VeContextmenu }
export default VeContextmenu as typeof VeContextmenu & Plugin
