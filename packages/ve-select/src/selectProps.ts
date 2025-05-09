type SelectItem ={
  label:string|number
  value:string|number |boolean
}

export type SelectProps ={
  width:number
  maxWidth:number
  multiple:boolean
  modelValue: Array<string|number|boolean>
  items:SelectItem[]
  textAlign: 'left' |'center' |'right'
  // 是否支持自定义输入
  customable:boolean
  placeholder:string
}

export const selectProps = () => ({
  width: {
    type: Number,
    default: 90,
  },

  // select的最大宽度(超出隐藏)
  maxWidth: {
    type: Number,
    default: 0,
  },

  // true 表示多选
  multiple: {
    type: Boolean,
    default: false,
  },

  // 用户传入v-model 的值 [{value/label/selected}]
  modelValue: {
    type: Array,
    default: null,
  },
  items: {
    type: Array,
    default: () => ([]),
  },
  // 占位符
  placeholder: {
    type: String,
    default: '请选择',
    validator: function (value:string) {
      return value.length > 0
    },
  },

  // 文本居中方式 left|center|right
  textAlign: {
    type: String,
    default: 'left',
  },

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
})