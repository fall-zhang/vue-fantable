import { DOC_LANG } from '@/utils/constant.js'
import { useRoute } from 'vue-router'
export default {
  computed: {
    // current doc lang
    currentDocLang() {
      // console.log('🚀 ~ file: i18n-mixins.js:12 ~ currentDocLang ~ this.$route:', this.$route)
      // const route = useRoute()
      // console.log()
      if (this.$route) {
        return this.$route.path.split('/')[1] || DOC_LANG.EN
      }
    },
  },
}
