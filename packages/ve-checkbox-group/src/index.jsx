import { getChildCompsByName } from '@P/src/utils/index'
import { COMPS_NAME } from './util/constant'
export default {
  name: COMPS_NAME.VE_CHECKBOX_GROUP,
  props: {
    modelValue: {
      type: Array,
      default() {
        return []
      },
    },
    // 是否垂直排列显示（当时checkbox组时生效）
    isVerticalShow: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'checkedChange'],
  data() {
    return {
      model: []
    }
  },
  watch: {
    // 更新子组件选中状态
    modelValue(newVal) {
      const children = getChildCompsByName(this, COMPS_NAME.VE_CHECKBOX)

      if (children.length > 0) {
        children.forEach((child) => {
          child.updateModelByGroup(newVal)
        })
      }
    },
  },

  methods: {
    updateModel(label, checkedVal) {
      const index = this.modelValue.indexOf(label)
      if (index > -1) {
        if (!checkedVal) {
          // eslint-disable-next-line vue/no-mutating-props
          this.modelValue.splice(index, 1)
        }
      } else {
        if (checkedVal) {
          // eslint-disable-next-line vue/no-mutating-props
          this.modelValue.push(label)
        }
      }

      this.$emit('update:modelValue', this.modelValue)
      // this.$emit(EMIT_EVENTS.ON_CHECKED_CHANGE, this.modelValue)
      this.$emit('checkedChange', this.modelValue)
    },
  },
  render() {
    console.log('🚀 ~ render ~ $slots:', this.$slots)
    const defaultSlot = this.$slots.default
      ? this.$slots.default()
      : '这是默认添加的内容？'
    return <div class="ve-checkbox-group"><defaultSlot onCheckedChange={this.updd}></defaultSlot></div>
    // return <div class="ve-checkbox-group">    </div>
  },
}
