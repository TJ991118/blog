/**
 * 将字符串首字母大写，其他字母保持不变
 * @param {string} str - 输入字符串
 * @returns {string} 首字母大写后的字符串
 */
export function capFirst(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
