import VeCheckbox from './src/index.vue'

VeCheckbox.install = function (Vue) {
  Vue.component('FanCheckbox', VeCheckbox)
  Vue.component(VeCheckbox.name, VeCheckbox)
}

export default VeCheckbox
