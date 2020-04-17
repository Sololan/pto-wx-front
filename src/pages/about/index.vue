<template>
  <div class="page">
    <div class="body">
      <div class="header">
        <van-image
          class="avatar"
          round
          width="80rpx"
          height="80rpx"
          src="/static/images/home-goods1.jpg"
        />
        <span class="username">点击登录</span>
      </div>

      <div class="panel my-panel">
        <van-grid column-num="3" :border="false" :clickable="true">
          <van-grid-item use-slot>
            <div class="my-item" @click="navigateToMyWork">
              <span class="yfont y-wdzp my-item-icon my-item-icon"></span>
              <span class="my-item-label">我的作品</span>
            </div>
          </van-grid-item>
          <van-grid-item use-slot @click="pictureStorey">
            <div class="my-item item-border">
              <span class="yfont y-zpk my-item-icon"></span>
              <span class="my-item-label">照片库</span>
            </div>
          </van-grid-item>
          <van-grid-item use-slot>
            <div class="my-item" @click="myCoupon">
              <span class="yfont y-wdkq my-item-icon"></span>
              <span class="my-item-label">我的卡券</span>
            </div>
          </van-grid-item>
        </van-grid>
      </div>

      <div class="panel order-panel">
        <van-cell center title="全部订单" is-link @click="navigateToAllOrder(0)" />
        <van-grid column-num="5" :border="false" :clickable="true">
          <van-grid-item text="待付款" @click="navigateToAllOrder(1)">
            <span slot="icon" class="yfont y-dfk order-item-icon">
              <div class="order-badge">12</div>
            </span>
          </van-grid-item>
          <van-grid-item text="待发货" @click="navigateToAllOrder(2)">
            <span slot="icon" class="yfont y-dfh order-item-icon">
              <div class="order-badge">23</div>
            </span>
          </van-grid-item>
          <van-grid-item text="待收货" @click="navigateToAllOrder(3)">
            <span slot="icon" class="yfont y-dsh order-item-icon">
              <div class="order-badge">33</div>
            </span>
          </van-grid-item>
          <van-grid-item text="待评价" @click="navigateToAllOrder(4)">
            <span slot="icon" class="yfont y-dpj order-item-icon">
              <div class="comment-badge">评价有礼</div>
            </span>
          </van-grid-item>
          <van-grid-item text="退款/售后" @click="navigateToRefundAfterSale">
            <span slot="icon" class="yfont y-tksh order-item-icon">
              <div class="order-badge">99+</div>
            </span>
          </van-grid-item>
        </van-grid>
      </div>

      <div class="panel more-panel">
        <van-cell center title="我的地址" is-link @click="navigateToAddress" />
        <van-cell center title="分享有礼" is-link @click="navigateToShare " />
        <van-cell center title="联系我们" is-link />
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    components: {},

    methods: {
      navigateToAllOrder (tab) {
        let url = 'pages/all-order/main?tab=' + tab
        this.$native.navigateTo(url)
      },
      navigateToAddress () {
        this.$native.navigateTo('pages/about/address/main')
      },
      navigateToShare () {
        this.$native.navigateTo('pages/about/share/main')
      },
      navigateToRefundAfterSale () {
        this.$native.navigateTo('pages/about/refund-after-sale/main')
      },
      navigateToMyWork () {
        this.$native.navigateTo('pages/about/my-work/main')
      },
      pictureStorey () {
        this.$native.navigateTo('pages/gallery/main')
      },
      myCoupon () {
        this.$native.navigateTo('pages/about/coupon/main')
      }
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .page {
    color: rgba(80, 80, 80, 1);
    background-color: rgba(244, 244, 244, 1);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    box-sizing: border-box;
    min-height: 100%;
    padding-top: 40px;

    .body {
      width: 343px;
      margin: 0 auto;
      padding-bottom: 1px;

      .header {
        margin-bottom: 20px;
        display: flex;
        align-items: center;

        .avatar {
          margin: 0 10px 0 3px;
        }

        .username {
          color: rgba(80, 80, 80, 1);
          font-size: 16px;
          line-height: 150%;
          text-align: left;
          font-weight: bold;
        }
      }

      .order-item-icon {
        font-size: 24px;
        position: relative;
      }

      .order-badge {
        color: rgba(255, 255, 255, 1);
        background-color: rgba(255, 64, 100, 1);
        border-radius: 7px;
        font-size: 10px;
        line-height: 12px;
        border: rgba(255, 64, 100, 1) solid 1px;
        text-align: center;

        width: 12px;
        height: 12px;
        position: absolute;
        top: -6px;
        right: -6px;
      }

      .comment-badge {
        color: rgba(255, 255, 255, 1);
        background-color: rgba(255, 64, 100, 1);
        border-radius: 2px;

        width: 40px;
        height: 12px;
        font-size: 8px;
        line-height: 150%;
        text-align: center;

        position: absolute;
        z-index: 1;
        top: -6px;
        left: 18px;
      }
    }

    /* van-cell border-bottom width*/
    .van-cell:after {
      font-size: 16px;
      width: calc(100% - 32Px);
    }
  }

  .my-panel {
    /deep/ .van-grid-item__content {
      padding: 0;
    }

    .my-item {
      box-sizing: border-box;
      width: 114.3px;
      height: 40px;
      margin: 5px 0;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .item-border {
      border-right: solid 1px rgba(244, 244, 244, 1);
      border-left: solid 1px rgba(244, 244, 244, 1);
    }

    .my-item-icon {
      font-size: 25px;
    }

    .my-item-label {
      color: rgba(80, 80, 80, 1);
      font-size: 12px;
      line-height: 150%;
      text-align: center;
      font-weight: bold;
    }
  }

  .panel {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 11px;
    box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);

    margin: 20px 0;

    /* van-cell */
    /deep/ .van-cell {
      border-radius: 11px;
      height: 50px;
      padding: 14px;
    }

    /deep/ .van-cell__title {
      font-size: 14px;
      line-height: 150%;
    }

    /deep/ .van-icon-arrow {
      font-size: 14px;
      color: rgba(153, 153, 153, 1);
      font-weight: bold;
    }

    /* van -grid */
    /deep/ .van-grid {
      border-radius: 11px;
    }
  }

  .order-panel {
    /deep/ .van-cell {
      height: 40px;
    }

    /deep/ .van-cell__title {
      color: #999999;
    }

    /deep/ .van-grid-item__text {
      color: rgba(80, 80, 80, 1);
      font-size: 11px;
      line-height: 150%;
    }

    /deep/ .van-grid-item {
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
