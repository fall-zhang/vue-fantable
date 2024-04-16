import { App } from 'vue'
import VeContextmenu from './src/index'

VeContextmenu.install = function (Vue:App) {
  Vue.component('FanContextmenu', VeContextmenu)
  Vue.component(VeContextmenu.name, VeContextmenu)
}

export default VeContextmenu
