const bcrypt = require('bcryptjs')

module.exports = {
  // 密码加密
  encryption (password, saltRounds = 10) {
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)
    return hash
  },

  // 密码比对
  compare (enterPaw, dbPaw) {
    return bcrypt.compareSync(enterPaw, dbPaw)
  } 
}
