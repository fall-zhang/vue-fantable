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
