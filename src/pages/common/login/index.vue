<template>
  <div class="ly-box">
    <div class="ly-header">
      <!--左小圆-->
      <div class="circular1"></div>
      <!--右大圆-->
      <div class="circular2"></div>
    </div>
    <div class="ly-body">
      <div class="login-form">
        <div class="login-title">嘉空间</div>
        <div class="login-item">
          <div class="item-group">
            <input type="text" class="item-input" v-model="username" placeholder="请输入帐号">
            <img class="item-image" src="/static/images/login-user.png">
          </div>
        </div>
        <div class="login-item">
          <div class="item-group">
            <input v-if="pwdShow" type="text" class="item-input" v-model="password" placeholder="请输入密码">
            <input v-else type="password" class="item-input" v-model="password" placeholder="请输入密码">
            <img class="item-image" :src="pwdShow ? '/static/images/login-pwd-hide.png' : '/static/images/login-pwd-show.png'" @click="pwdShow = !pwdShow">
          </div>
        </div>
      </div>
    </div>
    <div class="ly-footer">
      <button type="button" class="login-button" @click="tapLogin">登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        pwdShow: false
      }
    },

    components: {},

    methods: {
      tapLogin () {
        this.username = this.username.trim()
        this.password = this.password.trim()
        if (!this.username) {
          this.$native.showFailToast('请输入用户名')
          return
        }
        if (!this.password) {
          this.$native.showFailToast('请输入密码')
          return
        }
        this.$http.login(this.username, this.password).then(
          // 登录成功，进入首页
          () => this.$native.reLaunch('/pages/home/home/main'),
          // 登录失败
          (error) => this.$native.showFailToast(error.message)
        )
      }
    },

    created () {
      // let app = getApp()
    },

    onLoad () {
      this.$native.hideHomeButton()
    }
  }
</script>

<style scoped>
  .ly-box {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .ly-header {
    flex: none;
    height: 82px;
    position: relative;
  }

  .ly-body {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .ly-footer {
    flex: none;
    height: 130px;
  }

  .circular1, .circular2 {
    position: absolute;
    background-color: #68DFE3;
    border-radius: 50%;
  }

  .circular1 {
    left: 39px;
    bottom: -8px;
    width: 25px;
    height: 25px;
  }

  .circular2 {
    top: 3.5px;
    right: 51.5px;
    width: 44px;
    height: 44px;
  }

  .login-form {
    position: relative;
    width: 100%;
    height: 380px;
    overflow: hidden;
  }

  .login-form::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 50%;
    margin-left: -190px;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: linear-gradient(0deg, #14D1BD, #68DFE3);
  }

  .login-title {
    height: 124px;
    line-height: 124px;
    text-align: center;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
  }

  .login-item + .login-item {
    margin-top: 30px;
  }

  .item-group {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 303px;
    height: 65px;
    margin: 0 auto;
    padding: 0 32.5px;
    background-color: #fff;
    border-radius: 32.5px;
  }

  .item-input {
    flex: 1;
    height: 22px;
    line-height: 22px;
    color: #333;
    font-size: 14px;
  }

  .item-image {
    flex: none;
    width: 22px;
    height: 22px;
    padding: 7px;
    margin-right: -14px;
  }

  .login-button {
    width: 200px;
    height: 50px;
    line-height: 50px;
    margin-top: 25px;
    padding: 0 25px;
    background: linear-gradient(0deg, #14D1BD, #68DFE3);
    box-shadow: 0 2.5px 2.5px 0 rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    color: #fff;
    font-weight: bold;
  }

  .login-button::after {
    content: none;
  }

</style>
