import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItPrism from 'markdown-it-prism'
import MarkdownItContainer from 'markdown-it-container'
import fs from 'node:fs'
import mdIt from './index'

export default function MarkdownPlugin() {
  return Markdown({
    // default options passed to markdown-it
    // see: https://markdown-it.github.io/markdown-it/
    markdownItOptions: {
      html: true,
      linkify: true,
      typographer: true,
    },
    // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
    markdownItSetup(md) {
      // for example
      md.use(MarkdownItAnchor)
      md.use(MarkdownItPrism)
      // md.use(MarkdownItIns)
      md.use(MarkdownItContainer, 'anchor', {
        validate(params) {
          // console.log(md.configure())
          return params.trim().match(/^anchor\s*(.*)$/)
        },
        render(tokens, idx) {
          const m = tokens[idx].info.trim().match(/^anchor\s*(.*)$/)
          if (tokens[idx].nesting === 1) {
            const label = m && m.length > 1 ? m[1] : ''

            return `<vue-anchor is-edit label="${label}" fileName="" /> `
          }
          return ''
        },
      })
      md.use(MarkdownItContainer, 'demo', {
        validate(params) {
          // console.log('🚀 ~ render ~ m:', params)
          return params.trim().match(/^demo\s*(.*)$/)
        },
        render(tokens, idx) {
          const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
          if (tokens[idx].nesting === 1) {
            const description = m && m.length > 1 ? m[1] : ''
            const content = tokens[idx + 1].type === 'fence'
              ? tokens[idx + 1].content
              : ''
            // const sourceFileToken = tokens[idx + 2]
            // let source = ''
            // if (sourceFileToken.type === 'inline') {
            //   source = fs.readFileSync(
            //     path.resolve(docRoot, 'examples', `${sourceFile}.vue`),
            //     'utf-8'
            //   )
            // }
            const result = mdIt(md, content)
            return `<demo-block>
                    ${description ? `<div>${md.render(description)}</div>` : ''}
                    <!-- ${result} -->
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
  })
}