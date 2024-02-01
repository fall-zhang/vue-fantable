import { clsName } from './util/index'
import { COMPS_NAME } from './util/constant'
import { hasValue } from '@P/src/utils/mini-util'
export default {
  name: COMPS_NAME.VE_RADIO,
  props: {
    // 当前 checkbox 选中状态,实现 v-model
    modelValue: {
      type: [String, Number, Boolean],
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    // is disabled checked
    disabled: Boolean,
    // 是否是可控组件
    isControlled: {
      type: Boolean,
      default: false,
    },
    // isControlled 为true 时生效
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['radioChange', 'update:modelValue'],
  data() {
    return {
      // 当前checkbox 选中状态
      model: this.modelValue,
    }
  },
  computed: {
    radioClass() {
      const disableState = this.disabled
      const disabled = clsName('disabled')
      return [
        clsName('container'),
        {
          [clsName('checked')]: this.internalIsSelected,
          [disabled]: disableState
        },
      ]
    },

    // 是否选中
    internalIsSelected() {
      return this.isControlled ? this.isSelected : this.model
    },
  },

  watch: {
    modelValue() {
      this.updateModelBySingle()
    },
  },

  created() {
    this.initModel()
  },

  methods: {
    // checked change
    initModel() {
      if (hasValue(this.modelValue)) {
        this.internalOptions = [].concat(this.modelValue)
      }
    },
    checkedChange(event) {
      if (this.disabled) {
        return false
      }
      const isChecked = event.target.checked

      if (!this.isControlled) {
        this.$emit('update:modelValue', isChecked)
      }
      // this.$emit(EMIT_EVENTS.ON_RADIO_CHANGE, isChecked)
      this.$emit('radioChange', isChecked)
    },

    // get label content
    getLabelContent() {
      const { label, $slots } = this

      return label || $slots.default
    },
    // 通过单选更新 model
    updateModelBySingle() {
      if (!this.disabled) {
        this.model = this.modelValue
      }
    },
  },
  render() {
    const {
      label,
      radioClass,
      checkedChange,
      getLabelContent,
      internalIsSelected,
    } = this
    return (
      <label class={'ve-radio'}>
        <span class={radioClass}>
          <input
            checked={internalIsSelected}
            class={clsName('input')}
            type="radio"
            value={label}
            onChange={checkedChange}
          />

          <span class={clsName('inner')}></span>
        </span>
        <span class={clsName('label')}>{getLabelContent()}</span>
      </label>
    )
  },
}
