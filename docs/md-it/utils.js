function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

function stripStyle(content) {
  const result = content.match(/<(style)[\s\S]*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
function stripTemplate(content) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

function genInlineComponentText(template, script) {
  // https://github.com/vuejs/vue-loader/blob/423b8341ab368c2117931e909e2da9af74503635/lib/loaders/templateLoader.js#L46
  // todo: 这里采用了硬编码有待改进
  script = script.trim()
  if (script) {
    script = script.replace(
      /export\s+default/,
      'const democomponentExport =',
    )
  } else {
    script = 'const democomponentExport = {}'
  }
}

export {
  stripScript,
  stripStyle,
  stripTemplate,
  genInlineComponentText,
}
