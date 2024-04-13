import VeContextmenu from './src/index.jsx'

VeContextmenu.install = function (Vue) {
  Vue.component('FanContextmenu', VeContextmenu)
  Vue.component(VeContextmenu.name, VeContextmenu)
}

export default VeContextmenu
