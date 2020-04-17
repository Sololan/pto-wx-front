<template>
  <div class="ly-box">
    <img v-if="statusCode === 403" class="ly-img" src="/static/images/403.png"/>
    <img v-if="statusCode === 404" class="ly-img" src="/static/images/404.png"/>
    <img v-if="statusCode === 1000" class="ly-img" src="/static/images/none.png"/>
    <div class="ly-msg">{{errorMsg}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        statusCode: '',
        errorMsg: ''
      }
    },
    components: {},
    methods: {},
    onShow () {
      this.statusCode = Number(this.$root.$mp.query.statusCode)
      if (this.statusCode === 403) {
        this.errorMsg = '您没有权限访问该资源'
        return
      }
      if (this.statusCode === 404) {
        this.errorMsg = '您访问的资源不存在'
        return
      }
      if (this.statusCode === 1000) {
        this.errorMsg = '您访问的资源正在建设中'
        return
      }
      this.errorMsg = '未知的错误'
    }
  }
</script>

<style scoped>
  .ly-box {
    padding: 10px 0;
    text-align: center;
  }

  .ly-img {
    width: 355px;
    height: 210px;
  }

  .ly-msg {
    display: block;
    margin-top: 10px;
    padding-top: 10px;
    color: #ccc;
    font-size: 14px;
    line-height: 20px;
  }
</style>
