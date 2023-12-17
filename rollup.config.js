import less from 'rollup-plugin-less'
import vuePlugin from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import sucrase from '@rollup/plugin-sucrase'
import resolve from '@rollup/plugin-node-resolve';
import { fileURLToPath } from 'node:url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))
// console.log(__dirname);
// import { jsxExtension } from './common.js'
// 添加 CSS
export default {
  input: [
    'packages/index.js',
  ],
  output: {
    file: 'libs/main.js',
    format: 'es',
    manualChunks: []
  },
  plugins: [
    vuePlugin({
      target: 'broswer'
    }),
    less(),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx']
    }),
    alias({
      entries: [
        // { find: 'packages/', replacement: '@/' },
        { find: '@', replacement: __dirname + '/packages' },
        { find: 'utils', replacement: __dirname + '/packages/utils/index.js' },
      ]
    }),
    // 让 Rollup 查找到外部模块，打包到产物内
    resolve({
      // 将自定义选项传递给解析插件
      moduleDirectories: ['node_modules']
    })
    // alias({
    //   entries: [
    //     { find: 'utils', replacement: '../../../utils' },
    //     { find: 'batman-1.0.0', replacement: './joker-1.5.0' }
    //   ]
    // })
  ],
  // 不打包到产物内，视为外部引用
  external: ['vue']
  // 警告处理
  // onwarn(warning, warn) {

  // }
}

// 如果打包时间过长，添加缓存功能
// 