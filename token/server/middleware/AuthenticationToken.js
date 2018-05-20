const jwt = require('jsonwebtoken')
const secret = require('../config/index').secret

module.exports = function (req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token']
  if (token) {
    jwt.verify(token, secret, function(err, decoded) {      
      if (err) {
        return res.json({ code: 'error', error: 'token失效' })    
      } else {
        req.decoded = decoded    
        next()
      }
    })
  } else {
    res.status(403).json({code: 'error', error: '没有权限'})
  }
}