const Utils = {
  catchError (error) {
    console.error((error || {}).message || 'unknown error')
  },
  formatNumber (n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
  },
  /**
   * 年(y)可以用 1-4 个占位符，月(M)、日(d)、小时(H)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
   * 毫秒(S)、周(E)只能用 1 个占位符
   * @param date
   * @param format
   * @returns {string}
   */
  formatTime (date, format) {
    if (!date) {
      return ''
    }
    const dateTime = new Date(date)
    const weekMap = {0: '日', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六'}
    const dateObj = {
      'M+': dateTime.getMonth() + 1, // 月份
      'd+': dateTime.getDate(), // 日
      'H+': dateTime.getHours(), // 小时
      'm+': dateTime.getMinutes(), // 分
      's+': dateTime.getSeconds(), // 秒
      'q+': Math.floor((dateTime.getMonth() + 3) / 3), // 季度
      'S': dateTime.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (dateTime.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (const k in dateObj) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length === 1)
          ? String(dateObj[k])
          : ('00' + dateObj[k]).substr(String(dateObj[k]).length))
      }
    }
    if (/(E)/.test(format)) {
      format = format.replace(RegExp.$1, weekMap[dateTime.getDay()])
    }
    return format
  }
}

export default Utils
