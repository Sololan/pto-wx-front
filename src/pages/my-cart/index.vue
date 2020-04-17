<template>
  <div class="cart">
    <div class="cart-block">
      <div class="cart-list">
        <van-checkbox-group v-model="result" @change="onChange($event)">
          <div class="cart-item">
            <div class="cart-r" v-for="(item,index) in cartList" :key="index">
              <div class="cart-r-1">
                <van-checkbox radius="20rpx" checked-color="#ff5050" icon-size="38rpx" :name="index">{{item.name}}</van-checkbox>
              </div>
              <div class="cart-r-2">
                <van-image
                  width="586rpx"
                  height="250rpx"
                  fit="cover"
                  radius="20rpx"
                  :src="item.picture" />
              </div>
              <div class="cart-r-3">
                <div class="r-r-1">{{item.series}}</div>
                <div class="r-r-2">{{item.size}}</div>
              </div>
              <div class="cart-r-4">
                <div class="r-r-1">{{item.price}}</div>
                <div class="r-r-2">
                  <van-button custom-style="width:180rpx;height:44rpx;line-height:44rpx;color:#999999;font-size:24rpx;" color="#e5e5e5"
                              @click="deleteCartItem(item.id)" round size="mini" type="info">
                    删除
                  </van-button>
                </div>
              </div>
            </div>
          </div>
        </van-checkbox-group>
      </div>
    </div>
    <div class="cart-bottom">
      <div class="b-1">
        <van-checkbox-group v-model="checkAll" @change="selectAll($event)">
          <van-checkbox radius="20rpx" checked-color="#ff5050" icon-size="38rpx" :name="1">
            <div class="font-color">全选</div>
          </van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="b-2">
        <div class="b-2-1">
          <div class="b-2-1-1">{{delivery}}</div>
          <div class="b-2-1-2">合计：</div>
          <div class="b-2-1-3">{{totalPrice}}</div>
        </div>
        <div class="b-2-2" v-if="!btnFlag">
          <div class="b-2-2-1">商品优惠</div>
          <div class="b-2-2-2">{{totalPrice}}</div>
          <div class="b-2-2-3" @click="showCoupon">优惠明细</div>
          <van-icon class="my-coupon-icon" custom-style="font-size:20rpx; color:#ff4064" :class="{'rotate-right': overLayShow}" name="arrow-down" />
        </div>
      </div>
      <div class="b-3">
        <van-button :disabled="btnFlag" custom-style="width:180rpx; height:88rpx; line-height:150%; color:white; font-size: 28rpx;" color="#ff4064"
                    @click="settle()" round size="normal" type="info">
          结算
        </van-button>
      </div>
    </div>
    <van-overlay :show="overLayShow" :class="{'cart-show':overLayShow,'cart-hide':!overLayShow}">
      <div class="cart-details">
        <div class="cart-r-1">
          <div class="cart-r-1-1">
            金额优惠明细
          </div>
          <div @click="onClickHide(1)" class="cart-r-1-2">
            <van-icon name="cross" size="24px" />
          </div>
        </div>
        <div class="cart-r-2">
          *实际优惠明细以下单页为准
        </div>
        <div class="cart-r-3">
          <div class="cart-r-3-1">
            商品总价
          </div>
          <div class="cart-r-3-2">
            {{totalPrice}}
          </div>
        </div>
        <div class="cart-r-4">
          <div class="cart-r-4-1">
            店铺优惠
          </div>
          <div class="cart-r-4-2">
            {{totalPrice}}
          </div>
        </div>
        <div class="cart-r-5">
          <div class="cart-r-5-1">
            共优惠
          </div>
          <div class="cart-r-5-2">
            {{totalPrice}}
          </div>
        </div>
        <div class="cart-r-6">
          <div style="display: flex;">
            <div class="cart-r-6-1">
              合计
            </div>
            <div class="cart-r-6-2">
              (合计金额不含运费、优惠券)
            </div>
          </div>
          <div class="cart-r-6-3">
            {{totalPrice}}
          </div>
        </div>
        <div class="cart-r-7">
          优惠券抵扣金额请在下单页查看
        </div>
      </div>
    </van-overlay>
    <!--    <van-popup
          :show="overLayShow"
          position="bottom"
          custom-style="height: 20%;"
          bind:close="onClose">
          <div class="cart-details">
            <div class="cart-r-1">
              <div class="cart-r-1-1">
                金额优惠明细
              </div>
              <div @click="onClickHide(1)" class="cart-r-1-2">
                <van-icon name="cross" size="24px" />
              </div>
            </div>
            <div class="cart-r-2">
              *实际优惠明细以下单页为准
            </div>
            <div class="cart-r-3">
              <div class="cart-r-3-1">
                商品总价
              </div>
              <div class="cart-r-3-2">
                {{totalPrice}}
              </div>
            </div>
            <div class="cart-r-4">
              <div class="cart-r-4-1">
                店铺优惠
              </div>
              <div class="cart-r-4-2">
                {{totalPrice}}
              </div>
            </div>
            <div class="cart-r-5">
              <div class="cart-r-5-1">
                共优惠
              </div>
              <div class="cart-r-5-2">
                {{totalPrice}}
              </div>
            </div>
            <div class="cart-r-6">
              <div style="display: flex;">
                <div class="cart-r-6-1">
                  合计
                </div>
                <div class="cart-r-6-2">
                  (合计金额不含运费、优惠券)
                </div>
              </div>
              <div class="cart-r-6-3">
                {{totalPrice}}
          </div>
        </div>
        <div class="cart-r-7">
          优惠券抵扣金额请在下单页查看
        </div>
      </div>
    </van-popup>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // btnFlag: true,
        delivery: '不含运费',
        totalPrice: '￥888.88',
        overLayShow: false,
        checkAll: [],
        result: [],
        cartList: [
          {id: '1', name: '暧昧丶五分熟', picture: 'https://img.yzcdn.cn/vant/cat.jpeg', series: '【灵异事件系列】', size: '尺寸 240*240', price: '￥88.88'},
          {id: '2', name: '暧昧丶五分熟', picture: 'https://img.yzcdn.cn/vant/cat.jpeg', series: '【灵异事件系列】', size: '尺寸 240*240', price: '￥188.88'},
          {id: '3', name: '暧昧丶五分熟', picture: 'https://img.yzcdn.cn/vant/cat.jpeg', series: '【灵异事件系列】', size: '尺寸 240*240', price: '￥288.88'}
        ]
      }
    },
    computed: {
      btnFlag: function () {
        console.log(this.result.length > 0)
        return !(this.result.length > 0)
      }
    },
    components: {},
    methods: {
      deleteCartItem (cardId) {
        for (let i = 0; i < this.cartList.length; i++) {
          console.log(cardId)
          if (cardId === this.cartList[i].id) {
            this.cartList.splice(i, 1)
            break
          }
        }
      },
      onChange (event) {
        this.result = event.mp.detail
        if (this.result.length === this.cartList.length) {
          this.checkAll = ['1']
        } else {
          this.checkAll = []
        }
      },
      selectAll (event) {
        this.checkAll = event.mp.detail
        let tempList = []
        if (this.result.length !== this.cartList.length) {
          for (let i = 0; i < this.cartList.length; i++) {
            tempList.push(i.toString())
          }
          this.result = tempList
        } else {
          this.result = []
        }
      },
      onClickButton () {
        console.log(1111)
      },
      showCoupon () {
        this.overLayShow ? this.overLayShow = false : this.overLayShow = true
        console.log(12312)
      },
      onClickHide (event) {
        if (event.y) {
          this.overLayShow = event.y > 307
          console.log(1)
        } else {
          this.overLayShow = false
          console.log(2)
        }
      },
      settle () {
        if (!this.btnFlag) {
          mpvue.navigateTo({
            url: '../my-cart/settle/main'
          })
        }
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  .cart-r {
    border-radius: 11px;
    font-size: 14px;
    line-height: 150%;
    box-shadow: 4px 4px 6px 0 rgba(51, 51, 51, 0.05);
    background-color: white;
    margin-left: 16px;
    width: 343px;
    height: 246px;
  }
  .cart-r + .cart-r {
    margin-top: 16px;
  }
  .cart-r-1 {
    color: rgba(80, 80, 80, 1);
    font-size: 16px;
    text-align: left;
    font-weight: bold;
    padding-top: 9px;
    margin-left: 11px;
    margin-bottom: 18px;
  }
  .cart-r-2 {
    margin-left: 40px;
  }
  .cart-r-3 {
    margin-top: 5px;
    display: flex;
    margin-left: 40px;
  }
  .cart-r-3 .r-r-1 {
    color: #333333;
    font-size: 11px;
    text-align: left;
    font-weight: bold;
  }
  .cart-r-3 .r-r-2 {
    margin-left: 10px;
    color: #333333;
    font-size: 11px;
    text-align: left;
    font-weight: bold;
  }
  .cart-r-4 {
    justify-content: space-between;
    display: flex;
    margin-top: 10px;
    margin-left: 40px;
  }
  .cart-r-4 .r-r-1 {
    color: #FF4064;
    font-size: 14px;
    text-align: left;
    font-weight: bold;
  }
  .cart-r-4 .r-r-2 {
    margin-right: 10px;
  }
  .cart {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .cart-block {
    overflow-x: hidden;
    overflow-y: auto;
    min-height: calc(100% - 50px);
  }
  .cart-list {
    flex: auto;
    border-radius: 11px 11px 0 0;
    background-color: rgba(244, 244, 244, 1);
    min-height: 100%;
  }
  .cart-item {
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 11px 11px 0 0;
    background-color: rgba(244, 244, 244, 1);
  }
  .cart-bottom {
    z-index: 2;
    justify-content: space-between;
    align-items: center;
    display: flex;
    height: 50px;
    flex: none;
    background-color: #FFFFFF;
  }
  .cart-bottom .b-1 {
    margin-left: 15px;
    color: #999999;
    font-size: 16px;
  }
  .cart-bottom .b-2 {
    display: flex;
    flex-direction: column;
  }
  .b-2 .b-2-1 {
    align-items: center;
    padding-left: 23px;
    display: flex;
    height: 24px;
  }
  .b-2 .b-2-2 {
    margin-left: 23px;
    display: flex;
    height: 18px;
    transition: transform 0.3s;

    .my-coupon-icon {
      font-size: 16px;
      line-height: 16px;
      align-self: center;
      transition: transform 0.3s;
    }
  }
  .b-2-2-1 {
    color: #FF4064;
    font-size: 12px;
  }
  .b-2-2-2 {
    color: #FF4064;
    font-size: 12px;
  }
  .b-2-2-3 {
    margin-left: 10px;
    color: #FF4064;
    font-size: 12px;
  }
  .cart-bottom .b-2-1-2 {
    margin-left: 6px;
    color: #383838;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .cart-bottom .b-2-1-3 {
    color: #FF4064;
    color: rgba(255, 64, 100, 1);
    font-size: 11px;
    text-align: left;
    font-weight: bold;
  }
  .b-2-1-1 {
    color: #999999;
    font-size: 12px;
    text-align: center;
  }
  .cart-bottom .b-3 {
    margin-right: 15px;
  }
  .cart-details {
    border-radius: 30px 30px 0 0;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    height: 284px;
    width: 100%;
    position: absolute;
    bottom: 50px;
  }
  .cart-show {
    /*animation: bounceInUp .5s;*/
  }
  .cart-hide {
    /*animation: fadeOutUp .5s;*/
  }
  .cart-details .cart-r-1 {
    display: flex;
    position: relative;
    line-height: 24px;
    margin-top: 16px;
    padding-top: 0;
    margin-bottom: 0;
    margin-left: 0;
  }
  .cart-r-1-1 {
    text-align: center;
    margin: 0 auto;
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
    font-weight: bold;
  }
  .cart-r-1-2 {
    right: 0;
    position: absolute;
    margin-right: 14px;
  }
  .cart-details .cart-r-2 {
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    padding-left: 0;
    margin-bottom: 0;
    margin-left: 0;
  }
  .cart-details .cart-r-3 {
    display: flex;
    justify-content: space-between;
    line-height: 18px;
    padding-left: 0;
    margin-bottom: 0;
    margin-left: 0;
  }
  .cart-details .cart-r-4 {
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    margin-bottom: 0;
    margin-left: 0;

  }
  .cart-details .cart-r-5 {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
  .cart-details .cart-r-6 {
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
  }
  .cart-details .cart-r-7 {
    display: flex;
    justify-content: space-between;
    color: rgba(255, 64, 100, 1);
    font-size: 12px;
    text-align: left;
    margin-left: 16px;
    margin-top: 6px;
  }
  .cart-details .cart-r-3-1 {
    color: rgba(51, 51, 51, 1);
    font-size: 12px;
    text-align: left;
    margin-left: 17px;
  }
  .cart-details .cart-r-3-2 {
    color: rgba(51, 51, 51, 1);
    font-size: 12px;
    font-weight: bold;
    margin-right: 17px;
  }
  .cart-details .cart-r-4-1 {
    color: rgba(51, 51, 51, 1);
    font-size: 12px;
    text-align: left;
    margin-left: 17px;
  }
  .cart-details .cart-r-4-2 {
    color: rgba(255, 64, 100, 1);
    font-size: 12px;
    font-weight: bold;
    margin-right: 17px;
  }
  .cart-details .cart-r-5-1 {
    margin-left: 16px;
    color: rgba(51, 51, 51, 1);
    font-size: 14px;
    font-weight: bold;
  }
  .cart-details .cart-r-5-2 {
    color: rgba(255, 64, 100, 1);
    font-size: 12px;
    font-weight: bold;
    margin-right: 17px;
  }
  .cart-details .cart-r-6-1 {
    margin-left: 16px;
    color: rgba(51, 51, 51, 1);
    font-size: 14px;
    font-weight: bold;
  }
  .cart-details .cart-r-6-2 {
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    margin-left: 6px;
  }
  .cart-details .cart-r-6-3 {
    color: rgba(51, 51, 51, 1);
    font-size: 12px;
    font-weight: bold;
    margin-right: 17px;
  }
  .font-color {
    color: #999999;
  }
  .rotate-right {
    transform: rotate(180deg);
  }
</style>
