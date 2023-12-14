import less from 'rollup-plugin-less'
import vuePlugin from 'rollup-plugin-vue'
import jsx from 'rollup-plugin-jsx'
export default {
  input: 'packages/index.js',
  output: {
    file: 'libs/bundle.js',
    format: 'cjs'
  },
  plugins: [
    vuePlugin({
      target: 'broswer'
    }),
    jsx({ 
      factory: 'React.createElement'
     }),
    less(),
  ]
}