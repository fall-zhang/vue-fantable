import { DOC_LANG } from '@/utils/constant'
export default {
  computed: {
    // current doc lang
    currentDocLang() {
      if (this.$route) {
        // console.log(this.$route.path.split('/')[1])
        return this.$route.path.split('/')[1] || DOC_LANG.EN
      }
    },
  },
}
