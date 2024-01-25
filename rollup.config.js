// import css from 'rollup-plugin-css-only'
import path from 'node:path'
import pluginVue from 'unplugin-vue/rollup'
import pluginVueJSX from 'unplugin-vue-jsx/rollup'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
// import sucrase from '@rollup/plugin-sucrase'
import resolve from '@rollup/plugin-node-resolve'
// import terser from '@rollup/plugin-terser'
import languages from './build/support-languages.js'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'rollup'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const langLocation = (fileName) => {
  return path.resolve(__dirname, 'packages/src/locale/lang/' + fileName)
}
const distConfig = defineConfig({
  // clean: true,
  // sourcemap: 'inline',
  input: languages.map((lang) => langLocation(lang)),
  external: ['vue'],
  output: [{
    format: 'es',
    dir: './libs/lang',
    entryFileNames: `[name].js`,
    chunkFileNames: '[name]-[hash].js',
    exports: 'named',
    plugins: [],
    manualChunks: []
  }],
  plugins: [
    pluginVue(),
    pluginVueJSX(),
    json(),
    alias({
      entries: [
        // { find: 'packages/', replacement: '@/' },
        { find: '@P', replacement: path.join(__dirname + 'packages') },
      ]
    }),
    // 让 Rollup 查找到外部模块，打包到产物内
    resolve({
      // 将自定义选项传递给解析插件
      moduleDirectories: ['node_modules']
    })
  ],
})

const libConfig = defineConfig({
  // clean: true,
  input: 'packages/index.js',
  external: ['vue'],
  output: [{
    format: 'es',
    dir: './libs',
    entryFileNames: `main.js`,
    chunkFileNames: '[name].js',
    exports: 'named',
    plugins: [],
    manualChunks: []
  }, {
    format: 'cjs',
    dir: './libs',
    name: 'main',
    entryFileNames: `main.cjs`,
    exports: 'named',
  }],
  plugins: [
    pluginVue(),
    pluginVueJSX(),
    json(),
    alias({
      entries: [
        { find: '@P', replacement: path.join(__dirname + 'packages') },
      ]
    }),
    // 让 Rollup 查找到外部模块，打包到产物内
    resolve({
      // 将自定义选项传递给解析插件
      moduleDirectories: ['node_modules']
    })
  ],
})
export default () => {
  return defineConfig([
    libConfig,
    distConfig
  ])
}

// 如果打包时间过长，添加缓存功能