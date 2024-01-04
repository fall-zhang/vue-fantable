// import css from 'rollup-plugin-css-only'
import path from 'node:path'
import vuePlugin from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import sucrase from '@rollup/plugin-sucrase'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'rollup'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const distConfig = defineConfig({
  // clean: true,
  // sourcemap: 'inline',
  input: ['packages/index.js'],
  external: ['vue'],
  output: [{
    format: 'es',
    // entryFileNames: 'entry-[name].js',
    dir: './dist',
    entryFileNames: `[name].js`,
    chunkFileNames: 'chunks/dep-[hash].js',
    exports: 'named',
    plugins: [terser()],
    manualChunks: []
  }],
  plugins: [
    vuePlugin({
      target: 'broswer'
    }),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx']
    }),
    alias({
      entries: [
        // { find: 'packages/', replacement: '@/' },
        { find: '@P', replacement: path.join(__dirname + 'packages') },
        { find: '@U', replacement: path.join(__dirname + 'packages/utils') },
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
    // sourcemap: 'inline',
    format: 'es',
    // entryFileNames: 'entry-[name].js',
    dir: './libs',
    entryFileNames: `main.js`,
    // 'chunks/[name]-[hash:10].js'
    chunkFileNames: '[name].js',
    exports: 'named',
    plugins: [],
    manualChunks: []
  }],
  plugins: [
    vuePlugin({
      target: 'broswer'
    }),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx']
    }),
    alias({
      entries: [
        // { find: 'packages/', replacement: '@/' },
        { find: '@P', replacement: path.join(__dirname + 'packages') },
        { find: '@U', replacement: path.join(__dirname + 'packages/utils') },
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