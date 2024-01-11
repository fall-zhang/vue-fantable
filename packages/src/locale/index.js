import locale from '@P/ve-locale/ve-locale.js'
function isFunction(val) {
  return typeof val === 'function'
}
/*
 * @createI18N
 * @desc create i18n
 * @param {string} compName
 * @return {array<function>}
 */
/*
 * @createLocale
 * @desc create namespace by comp name
 * @param {string} compName
 * @return {function}
 */
export function createLocale(compName) {
  return createI18N(compName)
}

export function createI18N(compName) {
  return function (path, ...args) {
    let result = ''

    const messages = locale.getMessage()

    if (messages[compName]) {
      const message = messages[compName][path]
      result = isFunction(message) ? message(...args) : message
    } else {
      console.error(
        `can't find ${compName} in ${JSON.stringify(messages)}`,
      )
    }

    return result
  }
}
