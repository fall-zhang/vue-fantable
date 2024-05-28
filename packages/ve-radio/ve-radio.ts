import type { App, Plugin } from 'vue'
import VeRadio from './src/index'

VeRadio.install = function (app:App) {
  app.component('FanRadio', VeRadio)
  app.component(VeRadio.name!, VeRadio)
}

export { VeRadio }

export default VeRadio as typeof VeRadio & Plugin
