// ref https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/highlight.ts
import chalk from 'chalk'
import escapeHtml from 'escape-html'
import prism from 'prismjs'
import loadLanguages from 'prismjs/components/index'

// prism is listed as actual dep so it's ok to require

// required to make embedded highlighting work...
loadLanguages(['markup', 'css', 'javascript'])
/**
 *
 * @param {string} code
 * @param {string} lang
 * @returns {string}
 */
function wrap(code, lang) {
  if (lang === 'text') {
    code = escapeHtml(code)
  }
  return `<template #code><pre v-pre ><code>${code}</code></pre></template>`
}
/**
 *
 * @param {string} str
 * @param {string} lang
 * @returns
 */
export const highlight = (str, lang) => {
  if (!lang) {
    return wrap(str, 'text')
  }
  lang = lang.toLowerCase()
  const rawLang = lang
  if (lang === 'vue' || lang === 'html') {
    lang = 'markup'
  }
  if (lang === 'md') {
    lang = 'markdown'
  }
  if (lang === 'ts') {
    lang = 'typescript'
  }
  if (lang === 'py') {
    lang = 'python'
  }
  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang])
    } catch {
      // eslint-disable-next-line no-console
      console.warn(
        chalk.yellow(
          `[vitepress] Syntax highlight for language "${lang}" is not supported.`
        )
      )
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, rawLang)
  }
  return wrap(str, 'text')
}

export const tag = (md) => {
  /**
   * To enable the plugin to be parsed in the demo description, the content is rendered as span instead of ElTag.
   */
  md.renderer.rules.tag = (tokens, idx) => {
    const token = tokens[idx]
    const value = token.content
    /**
     * Add styles for some special tags
     * vitepress/styles/content/tag-content.scss
     */
    const tagClass = ['beta', 'deprecated', 'a11y', 'required'].includes(value)
      ? value
      : ''
    return `<span class="vp-tag ${tagClass}">${value}</span>`
  }

  md.inline.ruler.before('emphasis', 'tag', (state, silent) => {
    const tagRegExp = /^\^\(([^)]*)\)/
    const str = state.src.slice(state.pos, state.posMax)

    if (!tagRegExp.test(str)) return false
    if (silent) return true

    const result = str.match(tagRegExp)

    if (!result) return false

    const token = state.push('tag', 'tag', 0)
    token.content = result[1].trim()
    token.level = state.level
    state.pos += result[0].length

    return true
  })
}
