import { App } from 'vue'
import VePagination from './src/index'

VePagination.install = function (Vue:App) {
  Vue.component('FanPagination', VePagination)
  Vue.component(VePagination.name, VePagination)
}

export default VePagination
