import {
  addResizeListener,
  removeResizeListener,
} from '@P/src/utils/resize-event'
import { defineComponent } from 'vue'
export default defineComponent({
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
    resizeListener(contentRect:any) {
      const { left, top, width, height } = contentRect
      this.$emit('dom-resize-change', {
        key: this.id,
        left,
        top,
        width,
        height,
      })
    },
  },
  render() {
    if (this.$slots?.default) {
      return <this.tagName>{this.$slots?.default()}</this.tagName>
    } else {
      return <this.tagName></this.tagName>
    }
  }
})