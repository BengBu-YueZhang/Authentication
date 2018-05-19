const strategies = {
  /**
   * 不为空
   * @param {String} value 需要验证的字符串
   * @param {String} message 返回的错误信息
   */
  notNull (value, message) {
    let newVal = value.replace(/(^\s+)|(\s+$)/g, "")
    if (newVal === '') {
      return message
    }
  },

  /**
   * 密码不能不一致
   * @param {Object} password 密码
   * @param {String} message 返回的错误信息
   */
  passwordNotRepeat (password, message) {
    if (password['new'] !== password['old']) {
      return message
    }
  }
}

export default strategies
