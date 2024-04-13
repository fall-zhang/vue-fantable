import FanTable from './src/index.jsx'

FanTable.install = function (Vue) {
  Vue.component(FanTable.name, FanTable)
  Vue.component('VeTable', FanTable)
}

export default FanTable
