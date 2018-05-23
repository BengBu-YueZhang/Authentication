const redis = require('redis')
const { promisify } = require('util')

const client = (() => {
  const client = redis.createClient()
  client.on('error', err => { console.log('Error ' + err) })
  client.on('connect', () => { console.log('redis已链接') })
  return client
})()

const setAsync = promisify(client.set).bind(client)
const getAsync = promisify(client.get).bind(client)
const delAsync = promisify(client.del).bind(client)

module.exports = {
  /**
   * 设置key并设置过期时间
   */
  async setEX (key, value, time) {
    return await setAsync(key, value, 'EX', time)
  },

  /**
   * 设置key
   */
  async set (key, value) {
    return await setAsync(key, value)
  },

  /**
   * 获取key
   */
  async get (key) {
    return await getAsync(key)
  },

  /**
   * 删除key
   */
  async del (key) {
    return await delAsync(key)
  }
}
