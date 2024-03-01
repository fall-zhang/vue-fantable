import VeCheckboxGroup from './src/index.jsx'

VeCheckboxGroup.install = function (Vue) {
  Vue.component('FanCheckboxGroup', VeCheckboxGroup)
  Vue.component(VeCheckboxGroup.name, VeCheckboxGroup)
}

export default VeCheckboxGroup
