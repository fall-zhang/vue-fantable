// This file is auto gererated by build/build-entry.js

import VeCheckbox from './ve-checkbox/index.js'
import VeCheckboxGroup from './ve-checkbox-group/index.js'
import VeContextmenu from './ve-contextmenu/index.js'
import VeDropdown from './ve-dropdown/index.js'
import VeIcon from './ve-icon/index.js'
import VeLoading from './ve-loading/index.js'
import VeLocale from './ve-locale/index.js'
import VePagination from './ve-pagination/index.js'
import VeRadio from './ve-radio/index.js'
import VeSelect from './ve-select/index.js'
import VeTable from './ve-table/index.js'


const version = '2.27.1'
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
