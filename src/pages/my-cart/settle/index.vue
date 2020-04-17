<template>
  <div class="settle">
    <div class="settle-container">
      <div class="shipping-address">
        <div class="address-icon yfont .y-dz"></div>
        <div class="address-info">
          <div class="address-title">
            <div class="name">收货人：{{shippingAddress.username}}</div>
            <div class="phone">{{shippingAddress.phone}}</div>
          </div>
          <div class="address">收货地址：{{shippingAddress.address}}</div>
          <div class="icon" @click="navigateToAddress">
            <van-icon name="arrow" size="48rpx" />
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="title">
          <div class="left-title">自定义相册名称</div>
        </div>

        <div class="title-border"></div>

        <div class="commodity-list">
          <div v-for="(commodity, index) in commodityList" :key="index">
            <div class="commodity">
              <img :src="commodity.image" alt="">
              <div class="commodity-info">
                <div class="commodity-description">
                  <div class="name">【{{commodity.name}}】</div>
                  <div>size：{{commodity.size}}</div>
                </div>
                <div class="settle-price">¥ {{commodity.price}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="price">
          <div class="left">
            <div class="front">配送方式</div>
            <div class="front-1">普通配送</div>
          </div>
          <div class="right">
            <div class="front">快递免邮</div>

            <van-icon name="arrow" size="48rpx" />

          </div>
        </div>
        <div class="price">
          <div class="front">优惠券</div>
          <div class="right" @click="navigateToCoupon">
            <div class="right-front">可用优惠券</div>
            <van-icon name="arrow" size="48rpx" />
          </div>
        </div>
        <div class="price">
          <van-field
            clearable
            titleWidth="180rpx"
            custom-style="min-width: auto"
            :value="remark"
            :border="false"
            label="订单备注"
            placeholder="选填，请和商家协商一致"
          />
        </div>
        <!--        placeholder-style="height:36rpx; line-height:36rpx"-->
        <!--        custom-style="color:rgba(51, 51, 51, 1); font-size:28rpx; line-height:36rpx; height:36rpx;"-->
      </div>
      <div class="settle-c-3">
        <div class="settle-c-3-1">
          <div class="settle-c-3-1-1">
            商品总额
          </div>
          <div class="settle-c-3-1-2">
            ￥30.5
          </div>
        </div>
        <div class="settle-c-3-1">
          <div class="settle-c-3-1-1">
            配送费
          </div>
          <div class="settle-c-3-1-2">
            ￥0
          </div>
        </div>
        <div class="settle-c-3-1">
          <div class="settle-c-3-1-1">
            优惠券
          </div>
          <div class="settle-c-3-1-3">
            -￥10
          </div>
        </div>
        <div class="settle-c-3-2">
        </div>
        <div class="settle-c-3-3">
          <div class="settle-c-3-1-1">提交订单则表示您同意</div>
          <div class="settle-c-3-3-1">《用户购买协议》</div>
        </div>
      </div>
      <div class="settle-c-4">
        <div class="settle-c-4">
          <div class="settle-c-4-1"> 优惠券</div>
          <div class="settle-c-4-2">省5元，5元优惠券</div>
        </div>
        <div class="settle-c-4">
          <div class="settle-c-4-3">-¥ 5.00</div>
          <div class="settle-c-4-4">
            <van-icon name="arrow" size="48rpx" />
          </div>
        </div>
      </div>
    </div>
    <div class="settle-bottom">
      <div class="settle-b-1">
        <div class="settle-b-1-1">共{{'2'}}件</div>
        <div class="settle-b-1-2">合计：</div>
        <div class="settle-b-1-3">{{totalPrice}}</div>
      </div>
      <div class="settle-b-2">
        <van-button custom-style="width:220rpx; color:white; font-size: 28rpx;height:88rpx;" color="#ff4064"
                    @click="commitOrder()" round size="normal" type="info">
          提交订单
        </van-button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        totalPrice: 188,
        remark: '',
        shippingAddress: {
          username: '大狐狸',
          phone: '153****2322',
          address: '临安翠寒堂东十五步处水帘石洞'
        },
        commodityList: [
          {
            image: '/static/images/home-goods1.jpg',
            name: '珍异皮册系列',
            size: '240*240mm',
            price: '30.50'
          },
          {
            image: '/static/images/home-goods1.jpg',
            name: '珍异皮册系列',
            size: '240*240mm',
            price: '30.50'
          },
          {
            image: '/static/images/home-goods1.jpg',
            name: '珍异皮册系列',
            size: '240*240mm',
            price: '30.50'
          },
          {
            image: '/static/images/home-goods1.jpg',
            name: '珍异皮册系列',
            size: '240*240mm',
            price: '30.50'
          },
          {
            image: '/static/images/home-goods1.jpg',
            name: '珍异皮册系列',
            size: '240*240mm',
            price: '30.50'
          }
        ],
        orderPrice: {
          total: '61.00',
          shippingFee: '0.00',
          storeDiscount: '20.00',
          redPacket: '20.00',
          payment: '21.00'
        },
        orderDetail: {
          orderNumber: '156231565253515',
          createTime: '2020-02-02  08:15:45',
          payTime: '2020-02-02  08:15:45',
          deliveryTime: '2020-02-02  08:15:45'
        }
      }
    },
    components: {},

    methods: {
      navigateToAddress () {
        this.$native.navigateTo('pages/about/address/main')
      },
      navigateToCoupon () {
        this.$native.navigateTo('pages/about/select-coupon/main')
      },
      commitOrder () {
        console.log(1)
      }
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .settle {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .settle-container {
    overflow-y: auto;
    flex: auto;
    border-radius: 11px 11px 0 0;
    background-color: rgba(244, 244, 244, 1);
  }
  .settle-c-3 {
    box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);
    padding-top: 10px;
    border-radius: 10px;
    background-color: #FFFFFF;
    height: 113px;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
  }
  .settle-c-3-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 18px;
  }
  .settle-c-3-1 + .settle-c-3-1 {
    margin-top: 6px;
  }
  .settle-c-3-1-1 {
    color: rgba(153, 153, 153, 1);
    font-size: 11px;
    margin-left: 10px;
    line-height: 18px;
  }
  .settle-c-3-1-2 {
    color: rgba(51, 51, 51, 1);
    font-size: 11px;
    margin-right: 10px;
    line-height: 18px;
  }
  .settle-c-3-1-3 {
    color: #FF4064;
    font-size: 11px;
    margin-right: 10px;
    line-height: 18px;
  }
  .settle-c-3-2 {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    width: 323px;
    height: 1px;
    color: rgba(80, 80, 80, 1);
    background-color: rgba(244, 244, 244, 1);
  }
  .settle-c-3-3 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .settle-c-3-3-1 {
    color: rgba(51, 51, 51, 1);
    font-size: 11px;
    line-height: 18px;
  }
  .settle-c-4 {
    margin-bottom: 37px;
    margin-top: 26px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: 24px;
  }
  .settle-c-4 .settle-c-4 {
    display: flex;
    margin: 0 0 0 0;
  }
  .settle-c-4-1 {
    margin-left: 26px;
    color: rgba(51, 51, 51, 1);
    font-size: 14px;
    text-align: left;
  }
  .settle-c-4-2 {
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    text-align: left;
    margin-left: 4px;
  }
  .settle-c-4-3 {
    line-height: 24px;
    color: rgba(255, 64, 100, 1);
    font-size: 12px;
    text-align: right;
  }
  .settle-c-4-4 {
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    margin-right: 18px;
    text-align: right;
    align-items: center;
  }
  .settle-bottom {
    justify-content: flex-end;
    flex: none;
    height: 50px;
    z-index: 2;
    align-items: center;
    display: flex;
    background-color: #FFFFFF;
  }
  .settle-b-1 {
    display: flex;
    margin-right: 6px;
    align-items: center;
  }
  .settle-b-1-1 {
    color: rgba(153, 153, 153, 1);
    font-size: 11px;
    margin-right: 6px;
    text-align: center;
  }
  .settle-b-1-2 {
    color: rgba(56, 56, 56, 1);
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .settle-b-1-3 {
    color: rgba(255, 64, 100, 1);
    font-size: 11px;
    font-weight: bold;
    text-align: center;
  }
  .settle-b-2 {
    margin-right: 16px;
  }

  .shipping-address {
    min-height: 75px;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 15px 26px 17px 10px;

    .address-icon {
      font-size: 22px;
      margin-right: 14px;
    }

    .address-info {
      width: 100%;
      position: relative;

      .address-title {
        display: flex;
        justify-content: space-between;

        .phone {
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          line-height: 150%;

          width: 75px;
        }

        .name {
          color: rgba(51, 51, 51, 1);
          font-size: 14px;
          line-height: 150%;
          font-weight: bold;
        }
      }

      .icon {
        right: 0;
        top: 10px;
        margin-right: -24px;
        position: absolute;
      }

      .address {
        color: #999999;
        font-size: 11px;
        line-height: 150%;
        text-align: left;
      }
    }

  }

  .panel {
    width: 343px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 11px;
    box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);
    margin: 16px 0 0 16px;
    padding: 10px;
    box-sizing: border-box;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      &::before {
        width: 3px;
        height: 16px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        margin: auto 0;

        content: '';
        background-color: rgba(255, 64, 100, 1);
      }

      .left-title {
        font-size: 16px;
        line-height: 150%;
        font-weight: bold;
      }

      .right-title {
        color: rgba(255, 64, 100, 1);
        font-size: 12px;
        line-height: 150%;
        /*text-align: right;*/
      }
    }

    .title-border {
      width: 100%;
      height: 1px;
      background-color: rgba(244, 244, 244, 1);

      margin: 7px 0 10px;
    }
  }

  .commodity {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    img {
      width: 120px;
      height: 51px;
      border-radius: 11px;
      box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);
    }

    .commodity-info {
      font-size: 12px;
      line-height: 150%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .commodity-description {

        color: rgba(51, 51, 51, 1);
        font-size: 11px;
        font-weight: bold;

        display: flex;
        justify-content: space-between;

        .name {
          margin-left: -7px;
        }
      }

      .settle-price {
        display: flex;
        justify-content: flex-end;
        color: rgba(255, 64, 100, 1);
        font-size: 14px;
        font-weight: bold;
      }

    }
  }

  .commodity-btn {
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
  }

  .price {
    /*line-height: 21px;*/
    height: 21px;
    margin-top: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    color: rgba(153, 153, 153, 1);
    font-size: 12px;

    margin-bottom: 6px;

    .front {
      margin-right: 6px;
      color: rgba(51, 51, 51, 1);
      font-size: 14px;
      text-align: center;
      line-height: 21px;
    }

    .left {
      display: flex;

      .front {
        margin-right: 6px;
        color: rgba(51, 51, 51, 1);
        font-size: 14px;
        text-align: center;
        line-height: 21px;
      }

      .front-1 {
        color: rgba(153, 153, 153, 1);
        font-size: 11px;
        line-height: 23px;
        text-align: left;
      }
    }

    .right {
      display: flex;
      align-items: center;

      .right-front {
        color: rgba(255, 255, 255, 1);
        background-color: rgba(255, 64, 100, 1);
        border-radius: 2px;
        font-size: 10px;
        text-align: center;
        line-height: 21px;
      }

      .front {
        color: #333333;
        font-size: 11px;
      }
    }
  }

  .price:last-of-type {
    margin-top: 27px;
    display: flex;
    justify-content: space-between;

    margin-bottom: 0;
  }

  .order-panel {
    width: 343px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 11px;
    box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);

    padding: 10px;
    box-sizing: border-box;

    .title {
      position: relative;

      font-size: 14px;
      line-height: 150%;
      font-weight: bold;

      &::before {
        width: 3px;
        height: 14px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        margin: auto 0;

        content: '';
        background-color: rgba(255, 64, 100, 1);
      }
    }
  }

  .order-info:first-of-type {
    margin-top: 9px;
  }

  .order-info {
    color: rgba(51, 51, 51, 1);
    font-size: 12px;
    line-height: 150%;

    margin-bottom: 6px;
  }

  .order-info:last-of-type {
    margin-bottom: 0;
  }

  .order-info:nth-child(2) {
    margin-top: 9px;
    display: flex;
    justify-content: space-between;
  }

  van-field /deep/ .van-cell {
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    color: #323233;
    background-color: #FFF;
    padding: 0 0 0 0;
  }
  van-field /deep/ .van-field__input {
    position: relative;
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    line-height: inherit;
    text-align: left;
    background-color: initial;
    border: 0;
    resize: none;
    color: #323233;
    height: 24px;
  }

  van-field /deep/ .van-cell__title, .van-cell__value {
    -webkit-flex: 1;
    flex: 1;
    text-align: left;
  }

</style>
