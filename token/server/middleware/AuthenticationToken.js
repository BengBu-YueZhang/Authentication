const jwt = require('jsonwebtoken')
const secret = require('../config/index').secret
const redis = require('../db/redis')

module.exports = function (req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token']
  if (token) {
    jwt.verify(token, secret, function(err, decoded) {  
      if (err) {
        return res.status(403).json({ code: 'error', error: 'token失效' })    
      } else {
        const { id } = decoded
        redis.get(id).then(res => {
          if (!res) return res.status(403).json({ code: 'error', error: 'token失效' })
          req.decoded = decoded
          next()
        }).catch(err => {
          console.log(111)
          return res.status(403).json({ code: 'error', error: 'token失效' })
        })
      }
    })
  } else {
    res.status(403).json({code: 'error', error: '没有权限'})
  }
}