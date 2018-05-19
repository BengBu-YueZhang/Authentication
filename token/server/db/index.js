const mongoose = require('mongoose')
const database = require('../config/index').database

module.exports = {
  connect () {
    mongoose.connect(database)
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', function() { console.log('mongoose已链接') })
  }
}