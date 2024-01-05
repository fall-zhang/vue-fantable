import {
  addResizeListener,
  removeResizeListener,
} from '../../../utils/resize-event'
import { useSlots, defineProps, h } from 'vue'
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
  mounted() {
    addResizeListener(this.$el, this.resizeListener)
  },
  unmounted() {
    removeResizeListener(this, this.resizeListener)
  },
  methods: {
    resizeListener(contentRect) {
      const { left, top, width, height } = contentRect
      this.$emit('on-dom-resize-change', {
        key: this.id,
        left,
        top,
        width,
        height,
      })
    },
  },
  render() {
    // console.log(this)
    // console.log(this.$slots)
    // const CurrentTag = this.tagName
    // const render =
    if (this.$slots?.default) {
      return <this.tagName>{h(this.$slots?.default)}</this.tagName>
    } else {
      return <this.tagName></this.tagName>
    }
  }
  // setup() {
  //   const slot = useSlots()
  //   const prop = defineProps()
  //   console.log('🚀 ~ file: index.jsx:44 ~ setup ~ prop:', prop)
  //   return () => (<div>{slot.default}</div>)
  // },
}
