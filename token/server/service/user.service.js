const User = require('../models/user')

module.exports = {
  registered (name, password) {
    const user = new User({name, password})
    return new Promise((resolve, reject) => {
      user.save((err, user) => {
        if (err) reject(err)
        resolve(user)
      })
    })
  },

  login (name, password) {
    return new Promise((resolve, reject) => {
    })
  }
}