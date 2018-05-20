import Axios from '../util/axios'

export function registeredAPI (info) {
  return Axios.post('/registered', info)
}

export function loginAPI (info) {
  return Axios.post('/login', info)
}

export function getUsersAPI () {
  return Axios.get('/users')
}

export function logoutAPI () {
  return Axios.get('/logout')
}
