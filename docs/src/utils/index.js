export function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

export function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

export function stripTemplate(content) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

/*
 * @isFunction
 * @desc is function
 * @param {any} val
 */
export function isFunction(val) {
  return typeof val === 'function'
}

// 根据锚点id 定位
export function goTobyAnchorId(context, id) {
  const targetDOM = document.querySelector('#' + id)
  if (targetDOM) {
    window.scrollTo({
      top: targetDOM.offsetTop - 48,
      behavior: 'smooth'
    })
  }
}
