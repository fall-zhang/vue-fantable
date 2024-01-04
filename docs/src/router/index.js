import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
import routerConfig from './router.config.js'
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
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)

    window.scroll(0, 0)
  })
  NProgress.done() // 结束Progress
})
export default router
