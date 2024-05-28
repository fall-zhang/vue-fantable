import type { App, Plugin } from 'vue'
import VeSelect from './src/select'

VeSelect.install = function (app:App) {
  app.component('FanSelect', VeSelect)
  app.component(VeSelect.name!, VeSelect)
  return app
}

export {
  VeSelect
}

export default VeSelect as typeof VeSelect & Plugin
