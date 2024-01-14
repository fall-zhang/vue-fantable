import FanTable from './src/index.jsx'

FanTable.install = function (Vue) {
  Vue.component(FanTable.name, FanTable)
}

export default FanTable
