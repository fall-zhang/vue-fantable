// import VeDropdown from '../../ve-dropdown/ve-dropdown'
import { COMPS_NAME } from './util/constant'
import { clsName } from './util/index'
// import VeIcon from '../../ve-icon/ve-icon'
import { ICON_NAMES } from '@P/src/utils/constant'
import { hasValue } from '@P/src/utils/index'

export default {
  name: COMPS_NAME.VE_SELECT,
  props: {
    width: {
      type: Number,
      default: 90,
    },

    // select的最大宽度(超出隐藏)
    maxWidth: {
      type: Number,
      default: 0,
    },

    // 如果为true 会包含 checkbox
    isMultiple: {
      type: Boolean,
      default: false,
    },

    // 用户传入v-model 的值 [{value/label/selected}]
    modelValue: {
      type: Array,
      default: null,
    },

    // 占位符
    placeholder: {
      type: String,
      default: '请选择',
      validator: function (value) {
        return value.length > 0
      },
    },

    // 文本居中方式 left|center|right
    textAlign: {
      type: String,
      default: 'left',
    },

    // 是否支持输入input
    isInput: {
      type: Boolean,
      default: false,
    },
    // popper append to element
    popperAppendTo: {
      type: [String, HTMLElement],
      default: function () {
        return document.body
      },
    },
  },
  emits: ['selectChange', 'update:modelValue'],
  data() {
    return {
      visible: false,

      internalOptions: [],

      inputValue: '',
      // dorpdown visible
      dropdownVisible: false,
    }
  },
  computed: {
    // icon class
    iconClass() {
      const toggleIcon = clsName('toggle-icon')
      return {
        [clsName('show')]: this.dropdownVisible,
        [toggleIcon]: true,
      }
    },
  },
  watch: {
    modelValue () {
      this.initModel()
    },
  },
  created() {
    this.initModel()
  },
  methods: {
    // 初始化
    initModel() {
      if (hasValue(this.modelValue)) {
        this.internalOptions = [].concat(this.modelValue)
      }
    },
    // 显示选中的信息
    showSelectInfo() {
      let result

      const labels = this.selectedLabels()
      if (Array.isArray(labels) && labels.length > 0) {
        result = labels.join()
      } else {
        result = this.placeholder
      }

      return result
    },

    // 当前选中项的label
    selectedLabels() {
      return this.internalOptions
        .filter((x) => x.selected)
        .map((x) => {
          if (x.selected) {
            return x.label
          }
          return ''
        })
    },

    // dropdown change event
    dropdownChange() {
      // 使用户传入的 v-model 生效
      this.$emit('update:modelValue', this.internalOptions)
      // this.$emit(EMIT_EVENTS.SELECT_CHANGE, this.internalOptions)
      this.$emit('selectChange', this.internalOptions)
    },
  },
  render() {
    const { isInput } = this

    const dropdownProps = {
      class: 've-select',
      isSelect: true,
      width: this.width,
      maxWidth: this.maxWidth,
      isMultiple: this.isMultiple,
      textAlign: this.textAlign,
      isInput: this.isInput,
      // v-model
      value: this.internalOptions,
      hideByItemClick: true,
      popperAppendTo: this.popperAppendTo,
      style: {
        width: this.width,
      },
      // change: this.dropdownChange,
      // v-model
      onInput: (val) => {
        this.internalOptions = val
        this.dropdownChange()
      },
      // dropdown visible change
      onDropdownVisibleChange: (visible) => {
        this.dropdownVisible = visible
      },
    }

    let content = ''
    // this.placeholder = '63416464'
    if (isInput) {
      content = (
        <input
          class={clsName('input')}
          placeholder='63416464'
          type="text"
          v-model={this.inputValue}
        />
      )
    } else {
      content = (
        <span class={clsName('selected-span')}>
          {this.showSelectInfo()}
        </span>
      )
    }

    return (
      <VeDropdown {...dropdownProps}>
        <span>
          {content}
          <VeIcon
            name={ICON_NAMES.BOTTOM_ARROW}
            class={this.iconClass}
          />
        </span>
      </VeDropdown>
    )
  },
}
