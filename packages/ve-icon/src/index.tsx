import { COMPS_NAME, ICON_NAMES } from './util/constant'

import { getValByUnit } from '../../src/utils/index'
import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CaretDownFill,
  CaretUpFill,
  DoubleArrowDown,
  DoubleArrowLeft,
  DoubleArrowRight,
  DoubleArrowUp,
  SearchVue,
  FilterVue
} from '@P/src/components/icon/index'
import { Component, DefineComponent, computed, defineComponent } from 'vue'
export default defineComponent({
  name: COMPS_NAME.VE_ICON,
  props: {
    // icon name
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: null,
    },
    size: {
      type: [Number, String],
      default: '',
    },
  },
  setup(props:any) {
    // icon style
    const iconStyle = computed(() => {
      const { color, size } = props

      const result = {
        color,
        'font-size': getValByUnit(size),
      }
      return result
    })
    const iconNameVue = computed<DefineComponent>(() => {
      const name = props.name
      // from @P/src/utils/constant ICON_NAMES
      const map:Record<string, any> = {
        filter: FilterVue,

        'double-right-arrow': DoubleArrowRight,
        'double-left-arrow': DoubleArrowLeft,

        'right-arrow': ArrowRight,
        'top-arrow': ArrowUp,
        'bottom-arrow': ArrowDown,
        'left-arrow': ArrowLeft,

        'sort-top-arrow': CaretUpFill,
        'sort-bottom-arrow': CaretDownFill,

        search: SearchVue,
      }
      return map[name]
    })
    return () => (<span style={iconStyle.value}>{<iconNameVue.value></iconNameVue.value>}</span>)
  },
})
