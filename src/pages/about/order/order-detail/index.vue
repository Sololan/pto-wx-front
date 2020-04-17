<template>
  <div class="page">
    <div class="body">
      <div class="shipping-address">
        <div class="address-icon yfont .y-dz"></div>
        <div class="address-info">
          <div class="address-title">
            <div class="name">收货人：{{shippingAddress.username}}</div>
            <div class="phone">{{shippingAddress.phone}}</div>
          </div>
          <div class="address">收货地址：{{shippingAddress.address}}</div>
        </div>
      </div>

      <div class="panel">
        <div class="title">
          <div class="left-title">自定义相册名称</div>
          <div class="right-title">交易成功</div>
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
                <div>¥ {{commodity.price}}</div>
              </div>
            </div>
            <div class="commodity-btn">
              <van-button round type="default" @click="navigateToAfterSales">申请售后</van-button>
            </div>
          </div>
        </div>
        <div class="price">
          <div>商品总价</div>
          <div>¥ {{orderPrice.total}}</div>
        </div>
        <div class="price">
          <div>配送费</div>
          <div>¥ {{orderPrice.shippingFee}}</div>
        </div>
        <div class="price">
          <div>店铺优惠</div>
          <div>-¥ {{orderPrice.storeDiscount}}</div>
        </div>
        <div class="price" style="color: #333">
          <div>红包</div>
          <div>-¥ {{orderPrice.redPacket}}</div>
        </div>
        <div class="price">
          <div style="color: #333">实付款</div>
          <div style="color: #FF4064">¥ {{orderPrice.payment}}</div>
        </div>
      </div>

      <div class="order-panel">
        <div class="title">订单详情</div>
        <div class="order-info">
          订单编号：{{orderDetail.orderNumber}}
          <div style="color: #FF4064;">复制</div>
        </div>
        <div class="order-info">创建时间：{{orderDetail.createTime}}</div>
        <div class="order-info">付款时间：{{orderDetail.payTime}}</div>
        <div class="order-info">发货时间：{{orderDetail.deliveryTime}}</div>
      </div>
    </div>

    <div class="footer">
      <van-button round plain color="#ff4064" @click="navigateToComment">评价</van-button>
    </div>

    <!-- sheet -->
    <!--    <van-action-sheet-->
    <!--      :show="sheetVisible"-->
    <!--      @close="closeSheet">-->

    <!--      <div class="body">-->
    <!--        <div class="sheet-title">-->
    <!--          取消订单-->
    <!--          <van-icon name="cross" class="cross" @click="closeSheet" />-->
    <!--        </div>-->
    <!--        <div class="sheet-body">-->
    <!--          <div class="sheet-tip">订单取消后无法恢复，优惠券可退回，请注意在有效 期内使用</div>-->
    <!--          <div class="sheet-label">请输入取消原因</div>-->

    <!--          <textarea-->
    <!--            v-model="sheetContent"-->
    <!--            name="" id="" cols="30" rows="10" placeholder="输入内容">-->
    <!--          </textarea>-->
    <!--          &lt;!&ndash;          <van-field&ndash;&gt;-->
    <!--          &lt;!&ndash;            :value="sheetContent"&ndash;&gt;-->
    <!--          &lt;!&ndash;            type="textarea"&ndash;&gt;-->
    <!--          &lt;!&ndash;            &ndash;&gt;-->
    <!--          &lt;!&ndash;          />&ndash;&gt;-->

    <!--          <van-button-->
    <!--            size="large"-->
    <!--            color="#cccccc"-->
    <!--            custom-style="border-top-left-radius: 44rpx; border-bottom-left-radius: 44rpx;"-->
    <!--            @click="closeSheet">暂不取消-->
    <!--          </van-button>-->

    <!--          <van-button-->
    <!--            size="large"-->
    <!--            color="#FF4064"-->
    <!--            custom-style="border-top-right-radius: 44rpx; border-bottom-right-radius: 44rpx; left: 50%"-->
    <!--            @click="closeSheet">确定取消-->
    <!--          </van-button>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </van-action-sheet>-->

  </div>
</template>

<script>
  export default {
    data () {
      return {
        shippingAddress: {
          username: '上官剑南',
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
        // ,
        // /* sheet */
        // sheetVisible: true,
        // sheetContent: '取消订单的原因'
      }
    },
    components: {},

    methods: {
      // openSheet () {
      //   this.sheetVisible = true
      // },
      // closeSheet () {
      //   this.sheetVisible = false
      // },
      navigateToComment () {
        this.$native.navigateTo('pages/about/order/order-detail/comment/main')
      },
      navigateToAfterSales () {
        this.$native.navigateTo('pages/about/order/order-detail/apply-for-after-sales/main')
      }
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  /* sheet */
  /*.sheet-title {*/
  /*  font-size: 16px;*/
  /*  line-height: 150%;*/
  /*  font-weight: bold;*/
  /*  position: relative;*/

  /*  height: 50px;*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/

  /*  .cross {*/
  /*    position: absolute;*/
  /*    right: 0;*/
  /*    color: #999;*/
  /*    font-size: 24px;*/
  /*  }*/
  /*}*/

  /*.sheet-body {*/
  /*  height: 306px;*/

  /*  textarea {*/
  /*    text-indent: 5px;*/
  /*    border: solid 1px #CCCCCC;*/
  /*    border-radius: 2px;*/
  /*    font-size: 12px;*/
  /*    line-height: 150%;*/
  /*    box-sizing: border-box;*/
  /*    width: 100%;*/
  /*    height: 77px*/
  /*  }*/
  /*  */
  /*  /deep/ .van-button {*/
  /*    width: 171px !important;*/
  /*    height: 44px !important;*/
  /*    color: #FFFFFF;*/
  /*    font-size: 14px !important;*/
  /*    line-height: 150%;*/
  /*    font-weight: bold;*/

  /*    position: fixed;*/
  /*    bottom: 2px;*/
  /*  }*/
  /*}*/

  /*.sheet-tip {*/
  /*  width: 100%;*/
  /*  color: rgba(153, 153, 153, 1);*/
  /*  font-size: 14px;*/
  /*  line-height: 150%;*/

  /*  background-color: rgba(244, 244, 244, 1);*/
  /*  border-radius: 4px;*/

  /*  box-sizing: border-box;*/
  /*  padding: 6px 10px;*/
  /*}*/

  /*.sheet-label {*/
  /*  color: rgba(153, 153, 153, 1);*/
  /*  font-size: 14px;*/
  /*  line-height: 150%;*/

  /*  margin: 6px 0;*/
  /*}*/

  .page {
    color: rgba(80, 80, 80, 1);
    background-color: rgba(244, 244, 244, 1);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    box-sizing: border-box;
    min-height: 100%;
    padding: 16px 0 56px;

    .body {
      width: 343px;
      margin: 0 auto;
    }

    .footer {
      position: fixed;
      z-index: 2;
      bottom: 0;
      width: 100%;
      height: 40px;

      background-color: rgba(255, 255, 255, 1);

      box-sizing: border-box;
      padding-right: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    /deep/ .van-button {
      width: 88px;
      height: 30px;
      font-size: 12px;
    }
  }

  .shipping-address {
    width: 100%;
    min-height: 75px;

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

      .address-title {
        display: flex;
        justify-content: space-between;

        .name {
          color: rgba(51, 51, 51, 1);
          font-size: 14px;
          line-height: 150%;
          font-weight: bold;
        }

        .phone {
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          line-height: 150%;

          width: 75px;
        }
      }

      .address {
        color: rgba(51, 51, 51, 1);
        font-size: 12px;
        line-height: 150%;
      }
    }

  }

  .panel {
    width: 343px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 11px;
    box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);

    margin: 16px 0;
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
        display: flex;
        justify-content: space-between;

        .name {
          margin-left: -7px;
        }
      }

    }
  }

  .commodity-btn {
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
  }

  .price {
    display: flex;
    justify-content: space-between;

    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    line-height: 150%;

    margin-bottom: 6px;
  }

  .price:last-of-type {
    margin-bottom: 0;
    font-size: 14px
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
</style>
