import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
import { nextTick } from 'vue'
import routerConfig from './router.config.js'
// Progress 进度条 样式
import 'nprogress/nprogress.css'
// highlight theme
import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routerConfig
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
  NProgress.done()
})

router.afterEach(() => {
  nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightElement)
    window.scroll(0, 0)
  })
  NProgress.done() // 结束Progress
})
export default router
