<template>
  <div>
    <van-tabs :active="active" sticky type="line">
      <van-tab title="全部" name="allOrders">
        <div class="box">
          <div class="box-1" v-for="item in allOrdersData" :key="index">
            <div class="d-1">
              <div class="d-1-1">
                <span class="d-1-1-1">{{item.albumName}}</span>
                <span class="d-1-1-2" v-if="item.status===1">等待买家付款</span>
                <span class="d-1-1-2" v-if="item.status===2">买家已付款</span>
                <span class="d-1-1-2" v-if="item.status===3">卖家已发货</span>
                <span class="d-1-1-2" v-if="item.status===4">交易成功</span>
              </div>

              <div class="d-1-2" @click="navigateToOrderDetail">
                <image
                  class="d-1-2-1"
                  :src="item.pic"
                />
              </div>

              <div class="d-1-3">
                <span class="d-1-3-1">
                  【{{item.series}}】   size：{{item.size}}mm
                </span>
                <span class="d-1-3-2">{{item.price}}</span>
                <span class="d-1-3-3">¥</span>
              </div>

              <div class="d-1-4">
                <span class="d-1-4-1">配送费</span>
                <span class="d-1-4-2">{{item.postage}}</span>
                <span class="d-1-4-3">¥</span>
              </div>

              <div class="d-1-5">
                <span class="d-1-5-1">共1件商品，合计：￥{{item.sum}}</span>
              </div>

              <div class="d-1-6" v-if="item.status === 1">
                <van-button plain type="danger" round="true" class="d-1-6-1">付款</van-button>
                <van-button type="default" round="true" class="d-1-6-1">取消订单</van-button>
              </div>
              <div class="d-1-6" v-if="item.status === 2">
                <van-button type="default" round="true" class="d-1-6-1" @click="openSheet">取消订单</van-button>
              </div>
              <div class="d-1-6" v-if="item.status === 3">
                <van-button plain type="danger" round="true" class="d-1-6-1">确认收货</van-button>
              </div>
              <div class="d-1-6" v-if="item.status === 4">
                <van-button plain type="danger" round="true" class="d-1-6-1" @click="navigateToComment">评价</van-button>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款" name="pendingPayment">
        <div class="box">
          <div class="box-1" v-for="item in pendingPayData" :key="index">
            <div class="d-1">
              <div class="d-1-1">
                <span class="d-1-1-1">{{item.albumName}}</span>
                <span class="d-1-1-2">等待买家付款</span>
              </div>

              <div class="d-1-2">
                <image
                  class="d-1-2-1"
                  :src="item.pic"
                />
              </div>

              <div class="d-1-3">
                <span class="d-1-3-1">
                  【{{item.series}}】   size：{{item.size}}mm
                </span>
                <span class="d-1-3-2">{{item.price}}</span>
                <span class="d-1-3-3">¥</span>
              </div>

              <div class="d-1-4">
                <span class="d-1-4-1">配送费</span>
                <span class="d-1-4-2">{{item.postage}}</span>
                <span class="d-1-4-3">¥</span>
              </div>

              <div class="d-1-5">
                <span class="d-1-5-1">共1件商品，合计：￥{{item.sum}}</span>
              </div>

              <div class="d-1-6">
                <van-button plain type="danger" round="true" class="d-1-6-1">付款</van-button>
                <van-button type="default" round="true" class="d-1-6-1">取消订单</van-button>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待发货" name="toBeShipped">
        <div class="box">
          <div class="box-1" v-for="item in PaymentData" :key="index">
            <div class="d-1">
              <div class="d-1-1">
                <span class="d-1-1-1">{{item.albumName}}</span>
                <span class="d-1-1-2">买家已付款</span>
              </div>

              <div class="d-1-2">
                <image
                  class="d-1-2-1"
                  :src="item.pic"
                />
              </div>

              <div class="d-1-3">
                <span class="d-1-3-1">
                  【{{item.series}}】   size：{{item.size}}mm
                </span>
                <span class="d-1-3-2">{{item.price}}</span>
                <span class="d-1-3-3">¥</span>
              </div>

              <div class="d-1-4">
                <span class="d-1-4-1">配送费</span>
                <span class="d-1-4-2">{{item.postage}}</span>
                <span class="d-1-4-3">¥</span>
              </div>

              <div class="d-1-5">
                <span class="d-1-5-1">共1件商品，合计：￥{{item.sum}}</span>
              </div>

              <div class="d-1-6">
                <van-button type="default" round="true" class="d-1-6-1" @click="openSheet">取消订单</van-button>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待收货" name="toBeReceived">
        <div class="box">
          <div class="box-1" v-for="item in ReceiveData" :key="index">
            <div class="d-1">
              <div class="d-1-1">
                <span class="d-1-1-1">{{item.albumName}}</span>
                <span class="d-1-1-2">卖家已发货</span>
              </div>

              <div class="d-1-2">
                <image
                  class="d-1-2-1"
                  :src="item.pic"
                />
              </div>

              <div class="d-1-3">
                <span class="d-1-3-1">
                  【{{item.series}}】   size：{{item.size}}mm
                </span>
                <span class="d-1-3-2">{{item.price}}</span>
                <span class="d-1-3-3">¥</span>
              </div>

              <div class="d-1-4">
                <span class="d-1-4-1">配送费</span>
                <span class="d-1-4-2">{{item.postage}}</span>
                <span class="d-1-4-3">¥</span>
              </div>

              <div class="d-1-5">
                <span class="d-1-5-1">共1件商品，合计：￥{{item.sum}}</span>
              </div>

              <div class="d-1-6">
                <van-button plain type="danger" round="true" class="d-1-6-1">确认收货</van-button>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待评价" name="toBeEvaluated">
        <div class="box">
          <div class="box-1" v-for="item in Evaluated" :key="index">
            <div class="d-1">
              <div class="d-1-1">
                <span class="d-1-1-1">{{item.albumName}}</span>
                <span class="d-1-1-2">交易成功</span>
              </div>

              <div class="d-1-2">
                <image
                  class="d-1-2-1"
                  :src="item.pic"
                />
              </div>

              <div class="d-1-3">
                <span class="d-1-3-1">
                  【{{item.series}}】   size：{{item.size}}mm
                </span>
                <span class="d-1-3-2">{{item.price}}</span>
                <span class="d-1-3-3">¥</span>
              </div>

              <div class="d-1-4">
                <span class="d-1-4-1">配送费</span>
                <span class="d-1-4-2">{{item.postage}}</span>
                <span class="d-1-4-3">¥</span>
              </div>

              <div class="d-1-5">
                <span class="d-1-5-1">共1件商品，合计：￥{{item.sum}}</span>
              </div>

              <div class="d-1-6">
                <van-button plain type="danger" round="true" class="d-1-6-1" @click="navigateToComment">评价</van-button>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>

    <van-action-sheet
      class="order-sheet"
      :show="sheetVisible"
      @close="closeSheet">

      <div class="body">
        <div class="sheet-title">
          取消订单
          <van-icon name="cross" class="cross" @click="closeSheet" />
        </div>
        <div class="sheet-body">
          <div class="sheet-tip">订单取消后无法恢复，优惠券可退回，请注意在有效 期内使用</div>
          <div class="sheet-label">请输入取消原因</div>

          <textarea
            v-model="sheetContent"
            name="" id="" cols="30" rows="10" placeholder="输入内容">
          </textarea>
          <!--          <van-field-->
          <!--            :value="sheetContent"-->
          <!--            type="textarea"-->
          <!--            -->
          <!--          />-->

          <van-button
            size="large"
            color="#cccccc"
            custom-style="border-top-left-radius: 44rpx; border-bottom-left-radius: 44rpx;"
            @click="closeSheet">暂不取消
          </van-button>

          <van-button
            size="large"
            color="#FF4064"
            custom-style="border-top-right-radius: 44rpx; border-bottom-right-radius: 44rpx; left: 50%"
            @click="closeSheet">确定取消
          </van-button>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 'allOrders',
        allOrdersData: [{status: 1, albumName: '自定义相册名称', pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=227380552,3092281363&fm=26&gp=0.jpg', series: '珍异皮册系列', size: '240*240', price: '30.50', postage: '0', sum: '30.5'},
          {status: 2, albumName: '自定义相册名称', pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3176238647,494725287&fm=26&gp=0.jpg', series: '珍异皮册系列', size: '240*240', price: '30.50', postage: '0', sum: '30.5'},
          {status: 2, albumName: '自定义相册名称', pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3176238647,494725287&fm=26&gp=0.jpg', series: '珍异皮册系列', size: '240*240', price: '30.50', postage: '0', sum: '30.5'},
          {status: 2, albumName: '自定义相册名称', pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3176238647,494725287&fm=26&gp=0.jpg', series: '珍异皮册系列', size: '240*240', price: '30.50', postage: '0', sum: '30.5'}],
        pendingPayData: [{status: 1, albumName: '自定义相册名称', pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=227380552,3092281363&fm=26&gp=0.jpg', series: '珍异皮册系列', size: '240*240', price: '30.50', postage: '0', sum: '30.5'}],
        PaymentData: [{status: 2, albumName: '自定义相册名称', pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3176238647,494725287&fm=26&gp=0.jpg', series: '珍异皮册系列', size: '240*240', price: '30.50', postage: '0', sum: '30.5'}],
        ReceiveData: [{status: 3, albumName: '自定义相册名称', pic: 'https://tse2-mm.cn.bing.net/th/id/OIP.421eCzpwS1icbx9xX9X7sQHaEN?w=300&h=170&c=7&o=5&pid=1.7', series: '珍异皮册系列', size: '240*240', price: '30.50', postage: '0', sum: '30.5'}],
        Evaluated: [{status: 4, albumName: '自定义相册名称', pic: 'https://tse1-mm.cn.bing.net/th/id/OIP.DNKhSbzueuAdI_TRkB_9TAHaEH?w=258&h=160&c=7&o=5&pid=1.7', series: '珍异皮册系列', size: '240*240', price: '30.50', postage: '0', sum: '30.5'}],
        tabNames: ['allOrders', 'pendingPayment', 'toBeShipped', 'toBeReceived', 'toBeEvaluated'],

        /* sheet */
        sheetVisible: false,
        sheetContent: '取消订单的原因'
      }
    },
    components: {},

    methods: {
      navigateToOrderDetail () {
        this.$native.navigateTo('pages/about/order/order-detail/main')
      },
      navigateToComment () {
        this.$native.navigateTo('pages/about/order/order-detail/comment/main')
      },
      openSheet () {
        this.sheetVisible = true
      },
      closeSheet () {
        this.sheetVisible = false
      }
    },
    onLoad (option) {
      if (!option.tab) {
        option.tab = 0
      }
      this.active = this.tabNames[option.tab]
    },
    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  /* sheet */
  .order-sheet {
    /deep/ .van-popup--round {
      border-radius: 30px 30px 0 0;
    }
  }

  .body {
    width: 343px;
    margin: 0 auto;
  }

  .sheet-title {
    font-size: 16px;
    line-height: 150%;
    font-weight: bold;
    position: relative;

    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .cross {
      position: absolute;
      right: 0;
      color: #999;
      font-size: 24px;
    }
  }

  .sheet-body {
    height: 306px;

    textarea {
      text-indent: 5px;
      border: solid 1px #CCCCCC;
      border-radius: 2px;
      font-size: 12px;
      line-height: 150%;
      box-sizing: border-box;
      width: 100%;
      height: 77px
    }

    /deep/ .van-button {
      width: 171px !important;
      height: 44px !important;
      color: #FFFFFF;
      font-size: 14px !important;
      line-height: 150%;
      font-weight: bold;

      position: fixed;
      bottom: 2px;
    }
  }

  .sheet-tip {
    width: 100%;
    color: rgba(153, 153, 153, 1);
    font-size: 14px;
    line-height: 150%;

    background-color: rgba(244, 244, 244, 1);
    border-radius: 4px;

    box-sizing: border-box;
    padding: 6px 10px;
  }

  .sheet-label {
    color: rgba(153, 153, 153, 1);
    font-size: 14px;
    line-height: 150%;

    margin: 6px 0;
  }

  .settle {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

/*  .box {
    background-color: #F4F4F4;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding-top: 8px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    flex: auto;
  }*/

  .box {
    background-color: #F4F4F4;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding-top: 8px;
    width: 100%;
    position:fixed;
    overflow-y:auto;
    box-sizing: border-box;
    top: 44px;
    bottom: 0;
  }

  .box-1 {
    padding: 8px 0;
  }

  .d-1 {
    background-color: #FFFFFF;
    padding-top: 9px;
    margin: 0 16px;
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgba(51, 51, 51, 0.05);
  }

  .d-1-1 {
    overflow: hidden;
    border-left: 3px #FF4064 solid;
  }

  .d-1-1-1 {
    float: left;
    display: inline-block;
    color: #505050;
    font-weight: bold;
    margin-left: 10px;
    line-height: 1.5;
    text-align: left;
    font-size: 16px;
  }

  .d-1-1-2 {
    float: right;
    display: inline-block;
    color: #FF4064;
    font-size: 12px;
    line-height: 150%;
    text-align: right;
    margin-right: 10px;
    margin-top: 4px;
  }

  .d-1-2 {
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 8px;
    border-top: 1px solid #F4F4F4;
  }

  .d-1-2-1 {
    border-radius: 10px;
    display: inline-block;
    margin-top: 10px;
    width: 100%;
    height: 37vw;
  }

  .d-1-3 {
    margin-top: 10px;
    overflow: hidden;
    font-size: 12px;
    color: #333333;
    text-align: left;
    line-height: 150%;
  }

  .d-1-3-1 {
    float: left;
    display: inline-block;
    margin-left: 5px;
  }

  .d-1-3-2 {
    float: right;
    margin-right: 10px;
  }

  .d-1-3-3 {
    float: right;
    margin-right: 10px;
  }

  .d-1-4 {
    margin-top: 4px;
    overflow: hidden;
    font-size: 12px;
    text-align: left;
    color: #333333;
    line-height: 150%;
  }

  .d-1-4-1 {
    float: left;
    margin-left: 10px;
  }

  .d-1-4-2 {
    float: right;
    margin-right: 10px;
  }

  .d-1-4-3 {
    float: right;
    margin-right: 7px;
  }

  .d-1-5 {
    margin-top: 10px;
    overflow: hidden;
    color: #333333;
    font-size: 12px;
    line-height: 150%;
    text-align: left;
  }

  .d-1-5-1 {
    float: right;
    margin-right: 10px;
  }

  .d-1-6 {
    padding: 10px 0;
    overflow: hidden;
  }

  .d-1-6-1 {
    float: right;
    margin-right: 10px;
  }

  van-button >>> .van-button--default {
    font-size: 12px;
    width: 88px;
    height: 30px;
  }

  van-button >>> .van-button--danger {
    font-size: 12px;
    width: 88px;
    height: 30px;
  }

  van-tabs >>> .van-tab--active  {
    color: black;
    font-weight: bold;
  }

/*
  >>> .van-tab__pane--active {
    height: 679px;
    overflow-y: hidden;
    padding-bottom: 16px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #F4F4F4;
  }
*/

 /* .d-1::before{
    margin-bottom: 16px;
  }
*/
</style>

