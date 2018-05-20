const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('../util/bcrypt')

const userSchema = new Schema({ 
  name: String, 
  password: String,
  uid: String
})

userSchema.pre('save', function (next) {
  this.password = bcrypt.encryption(this.password)
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
