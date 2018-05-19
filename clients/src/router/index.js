import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import User from '../components/User/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/user',
      component: User
    }
  ]
})
