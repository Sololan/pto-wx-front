<template>
  <div class="page">
    <van-tabs
      :active="active"
      @change="handleTabChange">
      <van-tab title="退款"></van-tab>
      <van-tab title="售后"></van-tab>
    </van-tabs>

    <div style="overflow: auto; flex: auto; height: 0;">
      <div class="tab-page">
        <div class="refund-panel" v-for="(album, index) in albumList" :key="index">
          <panel-title :left-title="album.albumName" :right-title="album.status"></panel-title>
          <img :src="album.image" alt="">
          <div class="row">
            <div class="name">【{{album.name}}】 size：{{album.size}}mm</div>
            <div>¥ {{album.price}}</div>
          </div>
          <div class="row shipping-fee">
            <div>配送费</div>
            <div>¥ {{album.shippingFee}}</div>
          </div>
          <div class="row total">
            共1件商品，合计：￥{{album.totalPrice}}
          </div>
          <div class="price-difference">
            {{album.note}} ¥ {{album.notePrice}}
          </div>

          <div class="footer">
            <van-button round plain color="#ff4064" @click="navigateToDetail">查看详情</van-button>
            <span v-show="active === 1">
              <van-button round plain color="#333" @click="">补差价</van-button>
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import panel from '../../../components/common/panel'
  import PanelTitle from '../../../components/common/panel-title'

  export default {
    data () {
      return {
        active: 0 // 0: 退款, 1: 售后
      }
    },
    components: {
      panel,
      PanelTitle
    },
    computed: {
      albumList: function () {
        if (this.active === 0) {
          return [
            {
              image: '/static/images/home-goods1.jpg',
              albumName: '儿童相册',
              name: '儿童系列',
              size: '200*200',
              price: '20.00',
              shippingFee: '0.00',
              totalPrice: '20.00',
              status: '申请中',
              note: '退款',
              notePrice: '2.00'
            },
            {
              image: '/static/images/home-goods1.jpg',
              albumName: '老年相册',
              name: '老年系列',
              size: '240*240',
              price: '30.00',
              shippingFee: '0.00',
              totalPrice: '30.00',
              status: '已经退款',
              note: '退款',
              notePrice: '3.00'
            }
          ]
        } else if (this.active === 1) {
          return [
            {
              image: '/static/images/home-goods1.jpg',
              albumName: '儿童相册',
              name: '儿童系列',
              size: '200*200',
              price: '20.00',
              shippingFee: '0.00',
              totalPrice: '20.00',
              status: '申请中',
              note: '需补差价',
              notePrice: '2.00'
            },
            {
              image: '/static/images/home-goods1.jpg',
              albumName: '老年相册',
              name: '老年系列',
              size: '240*240',
              price: '30.00',
              shippingFee: '0.00',
              totalPrice: '30.00',
              status: '已经处理',
              note: '需补差价',
              notePrice: '3.00'
            }
          ]
        }
      }
    },
    methods: {
      handleTabChange (val) {
        this.active = val.mp.detail.index
      },
      navigateToDetail (val) {
        if (this.active === 0) {
          this.$native.navigateTo('pages/about/refund-after-sale/refund-detail/main')
        } else if (this.active === 1) {
          this.$native.navigateTo('pages/about/refund-after-sale/after-sale-detail/main')
        }
      }
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .page {
    height: 100%;
    display: flex;
    flex-direction: column;

    /deep/ .van-tabs {
      width: 100%;
      height: 45px;
      flex: none;

      display: flex;
      align-items: center;

      van-sticky {
        width: 100%;
      }
    }

    /deep/ .van-tab {
      color: rgba(153, 153, 153, 1);
      font-size: 14px;
    }

    /deep/ .van-tab--active {
      color: rgba(51, 51, 51, 1);
      font-weight: bold;
    }

    .tab-page {
      box-sizing: border-box;
      min-height: 100%;
      padding-bottom: 1px;

      background-color: rgba(244, 244, 244, 1);
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      padding-top: 16px;
    }
  }

  .refund-panel {
    width: 343px;
    height: auto;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 11px;
    box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);

    margin: 0 auto 16px;
    padding: 10px;
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: 138px;
    border-radius: 11px;
    box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);
    margin-bottom: 10px;
  }

  .row {
    display: flex;
    justify-content: space-between;

    color: rgba(51, 51, 51, 1);
    font-size: 12px;
    line-height: 150%;
  }

  .shipping-fee {
    margin: 5px 0 10px;
  }

  .name {
    margin-left: -14rpx
  }

  .total {
    display: flex;
    flex-direction: row-reverse;
  }

  .price-difference {
    width: 100%;
    min-height: 41px;
    color: rgba(80, 80, 80, 1);
    background-color: rgba(238, 238, 238, 1);
    border-radius: 11px;
    font-size: 14px;
    line-height: 150%;

    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    margin: 5px 0 10px;
  }

  .footer {
    display: flex;
    flex-direction: row-reverse;

    /deep/ .van-button {
      width: 88px;
      height: 30px;
      margin-left: 10px;

      color: rgba(80, 80, 80, 1);
      border-radius: 15px;
      font-size: 12px;
      line-height: 150%;
    }
  }
</style>
