
/**
 * @param {string} str
 * @returns  {Boolean}
 */
export function validUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}
