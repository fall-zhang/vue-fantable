import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { resolve as pathResolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import MarkdownPlugin from './md-it'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
const __dirname = fileURLToPath(new URL('.', import.meta.url))
export default defineConfig({
  // host:true, // 表示可以通过 ip 进行访问
  resolve: {
    alias: {
      'vue-fantable': pathResolve(__dirname, '../'),
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': pathResolve(__dirname, 'src'),
      '@C': pathResolve(__dirname, 'src/components'),
      '@A': pathResolve(__dirname, 'src/assets'),
      '@P': pathResolve(__dirname, '../packages'),
    }
  },
  server: {
    port: 7754,
    proxy: {
      '^/api/.*': {
        target: 'https://yourserver.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile MarkdownPlugin files
    }),
    MarkdownPlugin(),
    vueJsx({
      // include: [/\.[jt]sx$/, /\.vue$/]
      // options are passed on to @vue/babel-plugin-jsx
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: './src/global/auto-imports.d.ts',
      imports: ['vue', 'vue-router']
      // eslintrc: {
      //   enabled: true
      // }
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: './src/global/components.d.ts'
    })
  ]
})
