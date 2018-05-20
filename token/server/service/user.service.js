const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('../util/bcrypt')
const secret = require('../config/index').secret
const uuid = require('uuid')

module.exports = {
  registered (name, password) {
    const uid = uuid()
    const user = new User({name, password, uid})
    return new Promise((resolve, reject) => {
      user.save((err, user) => {
        if (err) reject(err)
        resolve(user)
      })
    })
  },

  login (name, password) {
    return new Promise((resolve, reject) => {
      User.findOne({ name: name }, (err, user) => {
        if (err) return reject(err)
        if (!user) return reject('用户名不存在')
        if (!bcrypt.compare(password, user.password)) return reject('用户名或密码错误')
        const token = jwt.sign({ uuid: user.uuid }, secret, {
          expiresIn: 60 * 60 // 过期时间为120分钟
        })
        resolve(token)
      })
    })
  },

  logout (name) {
    return new Promise((resolve, reject) => {
      const uid = uuid()
      User.findOneAndUpdate({ name: name }, { uid: uid }, {new: true}, (err, user) => {
        if (err) {
          return reject(err)
        }
        resolve()
      })
    })
  },

  users () {
    return new Promise((resolve, reject) => {
      User.find({}, (err, users) => {
        if (err) reject(err)
        resolve(users)
      })
    })
  }
}