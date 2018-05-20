<template>
  <section class="user-wrapper">
    <mu-appbar title="详情">
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="退出" @click="logout"/>
      </mu-icon-menu>
    </mu-appbar>
  </section>
</template>

<script>
import { getUsersAPI, logoutAPI, infoAPI } from '../../api/api.js'
import Storage from '../../util/storage.js'

export default {
  name: 'User',

  data () {
    return {
      users: []
    }
  },

  created () {
    // this.getUsers()
    this.info()
  },

  methods: {
    async getUsers () {
      try {
        let data = await getUsersAPI()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },

    async info () {
      try {
        let data = await infoAPI()
        console.log(data)
      } catch (error) {
        console.log(err)
      }
    },

    async logout () {
      try {
        const name = Storage.getLocalStorage('name')
        await logoutAPI({ name })
        Storage.removeLocalStorage('token')
        this.$router.push({ path: 'home' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
</style>
