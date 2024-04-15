import VeRadio from './src/index'

VeRadio.install = function (Vue) {
  Vue.component('FanRadio', VeRadio)
  Vue.component(VeRadio.name, VeRadio)
}

export default VeRadio
