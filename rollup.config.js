import less from 'rollup-plugin-less'
import vuePlugin from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import sucrase from '@rollup/plugin-sucrase'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { fileURLToPath } from 'node:url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))
// console.log(__dirname);
// import { jsxExtension } from './common.js'
// 打包前清除所有文件
// 添加 CSS
export default {
  clean: true,
  input: [
    'packages/index.js',
    'packages/theme-dark/index.less',
    // 'packages/theme-default/index.less',
  ],
  output: [{
    dir: 'dist',
    format: 'es',
    plugins: [terser()],
    manualChunks: []
  }],
  plugins: [
    vuePlugin({
      target: 'broswer'
    }),
    less({
      output: 'dist/css/index.dist.css'
    }),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx']
    }),
    alias({
      entries: [
        // { find: 'packages/', replacement: '@/' },
        { find: '@P/', replacement: __dirname + '/packages/' },
        { find: '@U/', replacement: __dirname + '/packages/utils/' },
      ]
    }),
    // 让 Rollup 查找到外部模块，打包到产物内
    resolve({
      // 将自定义选项传递给解析插件
      moduleDirectories: ['node_modules']
    })
    // alias({
    //   entries: [
    //     { find: '../utils/index.js', replacement: '../../../utils' },
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