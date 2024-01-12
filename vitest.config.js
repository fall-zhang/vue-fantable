import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'node:url'
import vue from 'unplugin-vue/vite'
import vueJSX from '@vitejs/plugin-vue-jsx'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@P': resolve(__dirname, './packages'),
    }
  },
  plugins: [
    vue(),
    vueJSX()
  ],
  test: {
    setupFiles: './tests/unit/setup.js',
    globals: true,
    environment: 'jsdom',
    // browser: {
    //   enabled: true,
    //   headless: true,
    // },
  },
})
