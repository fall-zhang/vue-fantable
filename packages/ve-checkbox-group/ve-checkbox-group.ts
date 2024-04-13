import VeCheckboxGroup from './src/index.vue'

VeCheckboxGroup.install = function (Vue) {
  Vue.component('FanCheckboxGroup', VeCheckboxGroup)
  Vue.component(VeCheckboxGroup.name, VeCheckboxGroup)
}

export default VeCheckboxGroup
