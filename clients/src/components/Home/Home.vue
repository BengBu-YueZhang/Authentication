<template>
  <section class="home-wrapper">
    <div class="content">
      <div class="login" v-show="!visible">
        <mu-text-field hintText="用户名" fullWidth />
        <mu-text-field hintText="密码" type="password" fullWidth/>
        <mu-raised-button label="登录" fullWidth primary/>
        <div class="line"></div>
        <mu-raised-button label="注册" fullWidth secondary @click="visible = !visible"/>
      </div>
      <div class="registered" v-show="visible">
        <mu-text-field hintText="用户名" fullWidth />
        <mu-text-field hintText="密码" type="password" fullWidth/>
        <mu-text-field hintText="再次输入密码" type="password" fullWidth/>
        <mu-raised-button label="注册" fullWidth primary/>
        <div class="line"></div>
        <mu-raised-button label="登录" fullWidth secondary @click="visible = !visible"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
.home-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100%;
  overflow: hidden;
  background: url(https://unsplash.it/1920/1080?random);
  background-size: cover;
}

.content {
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.9);
  width: 320px;
  height: 100vh;
  min-height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 30px 20px;
}

.line {
  width: 100%;
  height: 10px;
}
</style>
