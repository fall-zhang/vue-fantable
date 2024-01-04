// polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { createApp, nextTick } from 'vue'

import APP from '@/comp/app.vue'
import Router from '@/router/index'

import { getDocTheme } from '@/utils/cookies'

import '@/css/index.less'
import '@/css/custom.less'
import '@/comp/app.less'

// Progress 进度条 样式
import 'nprogress/nprogress.css'
// highlight theme
import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css'

import DemoBlock from '@/comp/demo-block.vue'
import Anchor from '@/comp/anchor.vue'

// vue-lazy-container
import VueLazyContainer from 'vue-lazy-container'

import {
  VeCheckbox,
  VeCheckboxGroup,
  VeContextmenu,
  VeDropdown,
  VeIcon,
  VeLoading,
  VeLocale,
  VePagination,
  VeRadio,
  VeSelect,
  VeTable,
} from '../../packages/index.js'

const app = createApp(APP)
app.use(Router)
app.component('demo-block', DemoBlock)
app.component('fa-anchor', Anchor)
app.use(VueLazyContainer)

// product
/* import "../../libs/theme-default/index.css";
import {
VeCheckbox,
VeCheckboxGroup,
VeDropdown,
VeIcon,
VeLoading,
VeLocale,
VePagination,
VeRadio,
VeSelect,
VeTable
} from "../../libs/main.js";
import zhCN from "../../libs/locale/lang/zh-CN";
import enUS from "../../libs/locale/lang/en-US";
VeLocale.use(zhCN); */

// 设置当前环境
window.env = process.env.NODE_ENV === 'development' ? 'dev' : 'pro'

/*
dev mode
1、生产环境使用已发布的样式文件，参考 theme-switch-mixins.js
*/

if (window.env === 'dev') {
  const docTheme = getDocTheme()
  if (docTheme && docTheme === 'dark') {
    import('@P/theme-dark/index.less')
  } else {
    import('@P/theme-default/index.less')
  }
}

app.use(VeCheckbox)
app.use(VeCheckboxGroup)
app.use(VeContextmenu)
app.use(VeDropdown)
app.use(VeIcon)
app.use(VePagination)
app.use(VeRadio)
app.use(VeSelect)
app.use(VeTable)

app.config.globalProperties.$veLoading = VeLoading
app.config.globalProperties.$veLocale = VeLocale

// 全部引入
/* import "../../packages/theme-default/index.less";
import vueEasytable from "../../packages/index.js";
app.use(vueEasytable); */

/* import "../../libs/theme-default/index.css";
import vueEasytable from "../../libs/main.js";
app.use(vueEasytable); */

app.mount('#app')
