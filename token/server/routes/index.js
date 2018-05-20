const express = require('express')
const router = express.Router()
const UserService = require('../service/user.service')

router.post('/registered', (req, res) => {
  const { username, password } = req.body
  UserService.registered(username, password).then(result => {
    res.status(200).json({code: 'ok', message: '注册成功'})
  }).catch(error => {
    res.status(500).json({code: 'error', error})
  })
})

router.post('/login', (req, res) => {
  const { username, password } = req.body
  console.log(1)
  UserService.login(username, password).then(result => {
    res.status(200).json({code: 'ok', token: result})
  }).catch(error => {
    res.status(500).json({code: 'error', error})
  })
})

router.get('/logout', (req, res) => {
  UserService.logout().then(result => {
  }).catch(error => {
  })
})

module.exports = router
