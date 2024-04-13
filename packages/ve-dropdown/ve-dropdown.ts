import VeDropdown from './src/index.jsx'

VeDropdown.install = function (Vue) {
  Vue.component('FanDropdown', VeDropdown)
  Vue.component(VeDropdown.name, VeDropdown)
}

export default VeDropdown
