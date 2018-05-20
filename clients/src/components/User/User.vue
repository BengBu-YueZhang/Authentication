<template>
  <mu-appbar title="详情">
    <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="退出"/>
    </mu-icon-menu>
  </mu-appbar>
</template>

<script>
import { getUsersAPI, logoutAPI } from '../../api/api.js'

export default {
  name: 'User',

  data () {
    return {
      users: []
    }
  },

  created () {
    this.getUsers()
  },

  methods: {
    async getUsers () {
      try {
        let data = await getUsersAPI()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
</style>
