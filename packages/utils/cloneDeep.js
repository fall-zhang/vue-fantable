/**
 * This method is like `clone` except that it recursively clones `value`.
 * Object inheritance is preserved.
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see clone
 * @example
 *
 * const objects = [{ 'a': 1 }, { 'b': 2 }]
 *
 * const deep = cloneDeep(objects)
 * console.log(deep[0] === objects[0])
 * // => false
 */
export default function deepClone(receive) {
  console.log(typeof receive)
  // if (structuredClone) {
  //   return structuredClone(receive)
  // }
  return goClone(receive)
}

function goClone(receive) {
  if (typeof receive !== 'object' || receive === null) {
    return receive
  }
  const result = Array.isArray(receive) ? [] : {}
  if (Array.isArray(receive)) {
    receive.forEach(item => {
      if (typeof item === 'object' && item !== null) {
        const afterDeep = goClone(item)
        result.push(afterDeep)
      } else {
        result.push(item)
      }
    })
  } else {
    Object.keys(receive).forEach(item => {
      if (typeof receive[item] !== 'object') {
        result[item] = receive[item]
      } else {
        result[item] = goClone(receive[item])
      }
    })
  }
  return result
}