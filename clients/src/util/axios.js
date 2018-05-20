import axios from 'axios'
import qs from 'qs'
import Bus from './bus'
import router from '../router'
import Storage from './storage'

const Axios = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  timeout: 1000,
  withCredentials: true,
  responseType: "json",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
})

// 请求拦截器
Axios.interceptors.request.use(config => {
  if (
    config.method === "post" ||
    config.method === "put" ||
    config.method === "delete"
  ) {
    config.data = qs.stringify(config.data);
  }
  if (Storage.getLocalStorage('token')) {
    config.headers['authorization'] = `Bearer ${Storage.getLocalStorage('token')}`
  }
  return config
}, error => {
  Bus.$emit('message', {
    message: error
  })
  return Promise.reject(error)
})

// 响应拦截器
Axios.interceptors.response.use(res => {
  return Promise.resolve(res.data)
}, error => {
  console.log(error)
  const status = error.response.status
  switch (status) {
    case 401:
      Bus.$emit('message', {
        message: 'session过期'
      })
      break
    case 500:
    case 502:
    case 503:
    case 404:
      Bus.$emit('message', {
        message: '服务端错误',
        type: 'error'
      })
      break
    case 400:
      Bus.$emit('message', {
        message: '参数错误'
      })
      break
    case 403:
      Bus.$emit('message', {
        message: '没有权限'
      })
      router.push('/home')
      break
  }
  return Promise.reject(error.response.data)
})

export default Axios
