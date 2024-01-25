import { ICON_NAMES } from '../../src/utils/constant'
import { COMPS_NAME } from './util/constant'
import { getValByUnit } from '../../src/utils/index.js'
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
} from '@P/src/components/icon/index.js'
export default {
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

  computed: {

    // icon style
    iconStyle() {
      const { color, size } = this

      const result = {
        color,
        'font-size': getValByUnit(size),
      }
      return result
    },
    iconNameVue() {
      const { name } = this
      // from @P/src/utils/constant ICON_NAMES
      const map = {
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
    },
  },
  methods: {
  },
  render() {
    const { iconStyle } = this
    return (<this.iconNameVue style={iconStyle}/>)
  },
}
