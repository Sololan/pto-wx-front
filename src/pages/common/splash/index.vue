<template>
  <div class="ly-box">
    <div class="ly-t">
      <img src="/static/images/splash-slogan.png" class="slogan-image">
    </div>
    <div class="ly-b">
      <img src="/static/images/splash-logo.png" class="logo-image">
    </div>
    <policy-modal v-model="showPolicy"/>
  </div>
</template>

<script>
  import policyModal from '../../../components/modal/policyModal'
  import {Actions} from '../../../utils/constant'

  export default {
    components: {
      policyModal
    },
    data () {
      return {
        showPolicy: false,
        isLoaded: false
      }
    },
    methods: {},
    onShow () {
      // 已登录过，进入首页
      if (this.$store.state.token) {
        this.$native.reLaunch('/pages/home/home/main')
        return
      }
      this.$store.dispatch(Actions.GetAgreement)
      if (this.isLoaded) return
      this.isLoaded = true
      this.$http.login().then(
        // 自动登录成功，进入首页
        () => {
          this.isLoaded = false
          this.$native.reLaunch('/pages/home/home/main')
        },
        // 自动登录失败，显示隐私政策弹框
        () => (this.showPolicy = true)
      )
    }
  }
</script>

<style scoped>
  .ly-box {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
  }

  .ly-t {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .slogan-image {
    width: 24px;
    height: 223px;
  }

  .ly-b {
    text-align: center;
    margin-bottom: 55px;
  }

  .logo-image {
    width: 102px;
    height: 21px;
  }
</style>
