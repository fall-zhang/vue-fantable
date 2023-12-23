// This file is auto gererated by build/build-entry.js

// next line only for test
// import VeCheckbox from './ve-checkbox'
import Vue from 'vue'
import VeCheckbox from './ve-checkbox/ve-checkbox.js'
import VeCheckboxGroup from './ve-checkbox-group/ve-checkbox-group.js'
import VeContextmenu from './ve-contextmenu/ve-contextmenu.js'
import VeDropdown from './ve-dropdown/ve-dropdown.js'
import VeIcon from './ve-icon/ve-icon.js'
import VeLoading from './ve-loading/ve-loading.js'
import VeLocale from './ve-locale/ve-locale.js'
import VePagination from './ve-pagination/ve-pagination.js'
// import VeSelect from './ve-select/index.js'
// import VeTable from './ve-table/index.js'
const VeRadio = () => import('./ve-radio/ve-radio.js')
const VeSelect = () => import('./ve-select/ve-select.js')
const VeTable = () => import('./ve-table/ve-table.js')
const version = Vue.version
const components = [
  VeCheckbox,
  VeCheckboxGroup,
  VeContextmenu,
  VeDropdown,
  VeIcon,
  VeLoading,
  VeLocale,
  VePagination,
  VeRadio,
  VeSelect,
  VeTable
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })

  Vue.prototype.$veLoading = VeLoading
  Vue.prototype.$veLocale = VeLocale
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  VeCheckbox,
  VeCheckboxGroup,
  VeContextmenu,
  VeDropdown,
  VeIcon,
  VeLoading,
  VeLocale,
  VePagination,
  VeRadio,
  VeSelect,
  VeTable
}

export default {
  install,
  version,
  VeCheckbox,
  VeCheckboxGroup,
  VeContextmenu,
  VeDropdown,
  VeIcon,
  VeLoading,
  VeLocale,
  VePagination,
  VeRadio,
  VeSelect,
  VeTable
}
