import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { resolve as pathResolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItPrism from 'markdown-it-prism'
import MarkdownItContainer from 'markdown-it-container'
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
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
    }),
    Markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
      markdownItSetup(md, options) {
        console.log('🚀 ~ markdownItSetup ~ options:', options) // undefined
        // for example
        md.use(MarkdownItAnchor)
        md.use(MarkdownItPrism)
        md.use(MarkdownItContainer, 'anchor', {
          validate(params) {
            return params.trim().match(/^anchor\s*(.*)$/)
          },
          render(tokens, idx) {
            const m = tokens[idx].info.trim().match(/^anchor\s*(.*)$/)
            if (tokens[idx].nesting === 1) {
              const label = m && m.length > 1 ? m[1] : ''

              return `<anchor is-edit label="${label}" fileName="${options.resourceFileName}" />
          `
            }
            return ''
          },
        })
        md.use(MarkdownItContainer, 'demo', {
          validate(params) {
            return params.trim().match(/^demo\s*(.*)$/)
          },
          render(tokens, idx) {
            const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
            if (tokens[idx].nesting === 1) {
              const description = m && m.length > 1 ? m[1] : ''
              const content =
                      tokens[idx + 1].type === 'fence'
                        ? tokens[idx + 1].content
                        : ''
              return `<demo-block>
          ${description ? `<div>${md.render(description)}</div>` : ''}
          <!--element-demo: ${content}:element-demo-->
          `
            }
            return '</demo-block>'
          },
        })
        md.use(MarkdownItContainer, 'tip')
        md.use(MarkdownItContainer, 'warning')
      },
      // Class names for the wrapper div
      wrapperClasses: 'markdown-body'
    }),
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
