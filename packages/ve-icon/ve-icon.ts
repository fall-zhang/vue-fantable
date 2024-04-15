import VeIcon from './src/index'

VeIcon.install = function (Vue) {
  Vue.component('FanIcon', VeIcon)
  Vue.component(VeIcon.name, VeIcon)
}

export default VeIcon
