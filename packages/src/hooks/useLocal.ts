import { ref } from 'vue'

const useLocal = () => {
  if (localStorage.getItem('VUE_FANTBALE_LOCAL') === undefined) {
    localStorage.setItem('VUE_FANTBALE_LOCAL', 'ZH-CN')
  }
}