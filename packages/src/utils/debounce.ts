export default function debounce(func, wait, immediate) {
  let timeout
  return function() {
    const context = this; const args = arguments
    clearTimeout(timeout)
    if (immediate && !timeout) func.apply(context, args)
    timeout = setTimeout(function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }, wait)
  }
}