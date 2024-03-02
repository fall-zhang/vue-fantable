import { createApp } from 'vue'

import APP from './App.vue'
import Router from '@/router/index'

import { getDocTheme } from '@/utils/cookies'

import '@/css/index.less'
import '@/css/custom.less'
import './css/App.less'
// import 'prismjs/themes/prism-coy.min.css'
// import 'prismjs/themes/prism-okaidia.min.css'
import 'prismjs/themes/prism.min.css'

import DemoBlock from '@/comp/demo-block.vue'
import Anchor from '@/comp/anchor.vue'

// vue-lazy-container
// import VueLazyContainer from 'vue-lazy-container'

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
  FanTable,
} from 'vue-fantable/packages/index.js'
// } from 'vue-fantable/libs/main.js'

const app = createApp(APP)
app.use(Router)
app.component('DemoBlock', DemoBlock)
app.component('VueAnchor', Anchor)
// app.use(VueLazyContainer)

// product

// 设置当前环境
window.env = process.env.NODE_ENV === 'development' ? 'dev' : 'pro'

/*
dev mode
1、生产环境使用已发布的样式文件，参考 theme-switch-mixins.js
*/

const docTheme = getDocTheme()
if (docTheme === 'dark') {
  import('@P/theme-dark/index.less')
} else {
  import('@P/theme-default/index.less')
}

app.use(VeCheckbox)
app.use(VeCheckboxGroup)
app.use(VeContextmenu)
app.use(VeDropdown)
app.use(VeIcon)
app.use(VePagination)
app.use(VeRadio)
app.use(VeSelect)
app.use(FanTable)

app.config.globalProperties.$veLoading = VeLoading
app.config.globalProperties.$veLocale = VeLocale

app.mount('#app')
