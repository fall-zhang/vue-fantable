import VeLoading from './src/index.js'

VeLoading.install = function (app) {
  app.config.globalProperties.$veLoading = VeLoading
}

export default VeLoading
