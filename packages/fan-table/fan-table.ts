import { App } from 'vue'
import FanTable from './src/index'
export {
  FanTable
}
export default {
  install(Vue: App) {
    Vue.component(FanTable.name, FanTable)
    Vue.component('VeTable', FanTable)
  }
}
