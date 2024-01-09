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
} from '@P/components/icon/index.js'
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

    // icon name
    // iconClass() {
    //   const { name } = this
    //   console.log(name)

    //   if (!Object.values(ICON_NAMES).includes(name)) {
    //     console.error(`${name} is not found in ${COMPS_NAME.VE_ICON}.`)
    //   }
    //   return `iconfont-vet icon-vet-${name}`
    // },
    iconNameVue() {
      const { name } = this
      const map = {
        'sort-top-arrow': CaretUpFill,
        'sort-bottom-arrow': CaretDownFill,
        'right-arrow': ArrowRight,
        filter: FilterVue,
      }
      return map[name]
    },
  },
  methods: {
  },
  render() {
    const { iconStyle } = this
    // return <i style={iconStyle} class={['ve-icon', iconClass]} />
    return (<this.iconNameVue style={iconStyle}/>)
  },
}
