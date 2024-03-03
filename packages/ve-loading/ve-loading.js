import { createApp } from 'vue'
import VeLoadingJsx from './src/loading.jsx'
import { addClass, removeClass } from '../src/utils/dom.js'
import { clsName } from './src/util/index'
import { SPIN_NAMES, COMPS_NAME } from './src/util/constant'
// default options
const defaultOptions = {
  name: 'plane',
  visible: false,
  color: '#1890ff',
  overlayBackgroundColor: 'rgba(255, 255, 255, 0.5)',
  width: 40,
  height: 40,
  tip: '',
  fullscreen: false,
  target: '',
  lock: false,
  parent__: null,
}

// parent relative class
const PARENT_RELATIVE_CLASS = clsName('parent-relative  ')
// parent lock class

// create instance
function createInstance(options = {}) {
  let app = null
  try {
    app = createApp(VeLoadingJsx, options).mount(
      document.createElement('div'),
    )
  } catch (err) {
    console.error(err)
  }
  return app
}

// check spin name
function checkSpinName(name) {
  if (!Object.values(SPIN_NAMES).includes(name)) {
    console.error(`${name} is not found in ${COMPS_NAME.VE_LOADING}.`)
  }
}

// Loading instance
function VeLoading(options = {}) {
  const loadingOptions = Object.assign({}, defaultOptions, options)

  if (typeof loadingOptions.target === 'string' && loadingOptions.target.length > 0) {
    loadingOptions.target = document.querySelector(loadingOptions.target)
  }
  loadingOptions.target = loadingOptions.target || document.body

  checkSpinName(loadingOptions.name)

  if (loadingOptions.target !== document.body) {
    loadingOptions.fullscreen = false
  } else {
    loadingOptions.fullscreen = true
  }
  loadingOptions.parent__ = loadingOptions.fullscreen ? document.body : loadingOptions.target
  addClass(loadingOptions.parent__, PARENT_RELATIVE_CLASS)

  const loadingInstance = createInstance(loadingOptions)
  loadingOptions.parent__.appendChild(loadingInstance.$el)

  // set parent

  return loadingInstance
}

VeLoading.install = function (app) {
  app.config.globalProperties.$veLoading = VeLoading
}

export default VeLoading
