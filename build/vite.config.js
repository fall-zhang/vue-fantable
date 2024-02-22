// vite.config.js

// 对 vite 打包的配置不熟悉，导致不会使用 vite 多个 css 文件，以及导出多个语言包失败，因此暂时弃用
// 项目是纯 js

import { resolve } from 'path'
import { defineConfig } from 'vite'
const pathResolve = (file) => {
  return resolve(__dirname, '../packages/' + file)
}
export default defineConfig({
  // index.html 所在目录路径
  // root: 'build',
  resolve: {
    alias: {
      '@P': resolve(__dirname, '../packages'),
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [pathResolve('index.js'), pathResolve('theme-dark/index.less'), pathResolve('theme-default/index.less')],
      // name: 'MyLib',
      // the proper extensions will be addedoutput.exports
      // fileName: ['main', 'theme-dark', 'theme-default'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        exports: 'named',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})