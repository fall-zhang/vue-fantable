import less from 'rollup-plugin-less'
import vuePlugin from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import sucrase from '@rollup/plugin-sucrase'
import {jsxExtension} from './common.js'
const aliaConfig = alias({
    entries: [
      // { find: 'packages/', replacement: '@/' },
      { find: '@', replacement: 'packages' },
      // { find: 'batman-1.0.0', replacement: './joker-1.5.0' }
    ]
  })
export default {
  input: 'packages/index.js',
  output: {
    file: 'libs/bundle.js',
    format: 'es'
  },
  plugins: [
    vuePlugin({
      target: 'broswer'
    }),
    // jsxExtension(),
    less(),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx']
    }),
    aliaConfig,
    // alias({
    //   entries: [
    //     { find: 'utils', replacement: '../../../utils' },
    //     { find: 'batman-1.0.0', replacement: './joker-1.5.0' }
    //   ]
    // })
  ]
}