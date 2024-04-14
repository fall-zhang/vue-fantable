import { App, createApp } from 'vue'
import VeLoadingJsx from './src/loading'
import { addClass, removeClass } from '../src/utils/dom.js'
import { clsName } from './src/util/index'
import { SPIN_NAMES, COMPS_NAME } from './src/util/constant'
// default options
const defaultOptions: Record<string, any> = {
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
  parentElement: null,
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
function checkSpinName(name: string) {
  if (!Object.values(SPIN_NAMES).includes(name)) {
    console.error(`${name} is not found in ${COMPS_NAME.VE_LOADING}.`)
  }
}

// Loading instance
function VeLoading(options = {}) {
  const loadingOptions = Object.assign({}, defaultOptions, options)
  let targetDOM
  if (typeof loadingOptions.target === 'string' && loadingOptions.target.length > 0) {
    targetDOM = document.querySelector(loadingOptions.target)
  }

  targetDOM = targetDOM || document.body

  checkSpinName(loadingOptions.name)

  if (targetDOM !== document.body) {
    loadingOptions.fullscreen = false
    loadingOptions.parentElement = loadingOptions.target
  } else {
    loadingOptions.fullscreen = true
    loadingOptions.parentElement = document.body
  }

  addClass(loadingOptions.parentElement, PARENT_RELATIVE_CLASS)

  const loadingInstance = createInstance(loadingOptions)
  loadingOptions.parentElement.appendChild(loadingInstance?.$el)
  return loadingInstance
}

VeLoading.install = function (app: App) {
  app.config.globalProperties.$veLoading = VeLoading
}

export default VeLoading
