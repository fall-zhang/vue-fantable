import VeSelect from './src/index.jsx'

VeSelect.install = function (Vue) {
  Vue.component('FanSelect', VeSelect)
  Vue.component(VeSelect.name, VeSelect)
}

export default VeSelect
