// set doc theme cookie
export function setDocTheme(value) {
  return localStorage.setItem('DOC_THEME', value)
}

// get doc theme cookie
export function getDocTheme() {
  const result = localStorage.getItem('DOC_THEME')
  return result
}
