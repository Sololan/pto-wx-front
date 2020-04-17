<template>
  <div class="page">
    <van-image
      width="100%"
      height="100%"
      fit="cover"
      src="/static/images/home-goods1.jpg"
    />
    <van-button
      size="large"
      color="#ff4064"
      @click="">立即分享
    </van-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    components: {},

    methods: {
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .page {
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    position: relative;

    /deep/ .van-button {
      width: 283px;
      height: 44px;

      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 15px;
      z-index: 1;

      color: rgba(255, 255, 255, 1);
      border-radius: 22px;
      font-size: 16px;
      line-height: 150%;
    }
  }

</style>
