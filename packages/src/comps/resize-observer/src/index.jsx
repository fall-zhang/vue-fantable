import {
  addResizeListener,
  removeResizeListener,
} from '../../../utils/resize-event'
export default {
  name: 'VueDomResizeObserver',
  props: {
    tagName: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
      default: null,
    },
  },
  emits: ['dom-resize-change'],
  mounted() {
    addResizeListener(this.$el, this.resizeListener)
  },
  unmounted() {
    removeResizeListener(this, this.resizeListener)
  },
  methods: {
    resizeListener(contentRect) {
      const { left, top, width, height } = contentRect
      this.$emit('dom-resize-change', {
        key: this.id,
        left,
        top,
        width,
        height,
      })
      // let parent = this.$parent
      // while (!parent.name) {
      //   parent = parent.$parent
      // }
    },
  },
  render() {
    // console.log(this)
    // console.log(this.$slots)
    // const CurrentTag = this.tagName
    // const render =
    if (this.$slots?.default) {
      return <this.tagName>{this.$slots?.default()}</this.tagName>
    } else {
      return <this.tagName></this.tagName>
    }
  }
  // setup() {
  //   const slot = useSlots()
  //   const prop = defineProps()
  //   return () => (<div>{slot.default}</div>)
  // },
}
