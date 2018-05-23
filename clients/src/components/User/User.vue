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
import { getUsersAPI, logoutAPI } from '../../api/api.js'
import Storage from '../../util/storage.js'

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
    },

    async logout () {
      try {
        await logoutAPI()
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
