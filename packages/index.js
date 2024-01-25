// this file provide for vue createApp to use fan-table

import VeCheckbox from './ve-checkbox/ve-checkbox.js'
import VeCheckboxGroup from './ve-checkbox-group/ve-checkbox-group.js'
import VeContextmenu from './ve-contextmenu/ve-contextmenu.js'
import VeDropdown from './ve-dropdown/ve-dropdown.js'
import VeIcon from './ve-icon/ve-icon.js'
import VeLoading from './ve-loading/ve-loading.js'
import VeLocale from './ve-locale/ve-locale.js'
import VePagination from './ve-pagination/ve-pagination.js'
import VeRadio from './ve-radio/ve-radio.js'
import VeSelect from './ve-select/ve-select.js'
import FanTable from './fan-table/fan-table.js'
import { version } from '../package.json'
// const app = createApp({})
const VeTable = FanTable
const components = {
  Checkbox: VeCheckbox,
  CheckboxGroup: VeCheckboxGroup,
  Contextmenu: VeContextmenu,
  Dropdown: VeDropdown,
  Icon: VeIcon,
  Loading: VeLoading,
  Locale: VeLocale,
  Pagination: VePagination,
  Radio: VeRadio,
  Select: VeSelect,
  Table: FanTable
}

function install (app) {
  Object.entries(components).forEach(([key, value]) => {
    app.component('Ve' + key, value)
    app.component('Fan' + key, value)
  })

  app.config.globalProperties.$veLoading = VeLoading
  app.config.globalProperties.$veLocale = VeLocale
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
  VeTable,
  FanTable
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
  VeTable,
  FanTable
}
