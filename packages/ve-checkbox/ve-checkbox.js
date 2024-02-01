import VeCheckbox from './src/index.jsx'

VeCheckbox.install = function (Vue) {
  Vue.component('FanCheckbox', VeCheckbox)
  Vue.component(VeCheckbox.name, VeCheckbox)
}

export default VeCheckbox
