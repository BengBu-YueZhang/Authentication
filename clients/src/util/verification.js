import strategies from './strategies'

class Verification {
  constructor () {
    this.rules = []
  }

  /**
   * 添加策略
   * @param {Any} value 需要验证的内容
   * @param {Array} rules 策略数组
   */
  addRule (value, rules) {
    rules.forEach(r => {
      this.rules.push(() => {
        const { strategy, message } = r
        return strategies[strategy](value, message)
      })
    })
  }

  /**
   * 开始验证
   */
  startVerification () {
    for (let i = 0; i < this.rules.length; i++) {
      let message = this.rules[i]()
      if (message) {
        return message
      }
    }
  }
}

export default Verification
