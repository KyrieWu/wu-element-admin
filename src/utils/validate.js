
/**
 * @param {string} str
 * @returns  {Boolean}
 */
export function validUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

export function isExternal (path) {
  return /^(https?:|mailot:|tel:)/.test(path)
}
