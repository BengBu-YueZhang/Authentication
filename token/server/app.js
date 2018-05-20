const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('express-jwt')
const secret = require('./config/index').secret
const db = require('./db')
const indexRouter = require('./routes/index')

db.connect()

const app = express()

app.use(cors({
  origin: 'http://127.0.0.1:8080',
  credentials: true,
  methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Content-Length',
    'Authorization',
    'Accept',
    'X-Requested-With',
    'x-access-token',
    'authorization']
}))
app.use(jwt({ secret: secret}).unless({
  path: [
    '/login',
    '/registered'
  ]
}))
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/', indexRouter)

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(403).send('token过期')
  }
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
