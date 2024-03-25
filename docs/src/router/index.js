import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
import routerConfig from './router.config.js'
// Progress 进度条 样式
import 'nprogress/nprogress.css'
// highlight theme

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
  NProgress.done() // 结束 Progress
})
export default router
