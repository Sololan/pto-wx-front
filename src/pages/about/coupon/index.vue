<template>
  <div class="my-coupon-container">
    <div class="my-coupon">
      <van-collapse :value="activeNames" @change="onChange">
        <div class="my-coupon-item" v-for="(item, index) in list" :key="index" :class="{'my-coupon-box-shadow':index%2 === 0}">
          <div class="my-coupon-item-body">
            <div class="my-coupon-body-left">
              <van-image width="158rpx" height="174rpx" src="/static/images/coupon.png" />
              <div class="my-coupon-left-1">
                ¥{{5}}
              </div>
              <div class="my-coupon-left-2">
                {{'满288使用'}}
              </div>
            </div>
            <div class="my-coupon-body-right">
              <div class="my-coupon-front-1">
                {{'【分享有礼】5元红包'}}
              </div>
              <div class="my-coupon-front-2">
                {{'限非活动商品使用'}}
              </div>
              <div class="my-coupon-front-2">
                {{'全品类红包'}}
              </div>
              <div class="my-coupon-front-2">
                {{'有效期：2020-03-27至2020-09-29'}}
              </div>
            </div>
            <div class="my-coupon-expired" v-if="index%2 === 0">
              <van-image
                width="134rpx"
                height="110rpx"
                :src="'/static/images/coupon-expired.png'"
              />
            </div>
          </div>
          <div class="my-coupon-item-line"></div>
          <van-collapse-item :is-link="false" :name="item.name">
            <view class="my-coupon-line" slot="title">
              <div class="my-coupon-detail">
                详细信息
                <van-icon class="my-coupon-icon" :class="{'rotate-right': item.open}" name="arrow-down" />
              </div>
            </view>
            <div class="my-coupon-collapse">
              <div class="my-coupon-front-3">
                劲爆低价品不可用
              </div>
            </div>
          </van-collapse-item>
        </div>
      </van-collapse>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        up: false,
        list: [
          {name: 1, open: false},
          {name: 2, open: false},
          {name: 3, open: false},
          {name: 4, open: false}
        ],
        activeNames: []
      }
    },
    computed: {},
    methods: {
      onChange (event) {
        const activeNames = event.mp.detail
        this.list = this.list.map((item) => ({name: item.name, open: activeNames.indexOf(item.name) > -1}))
        this.activeNames = event.mp.detail
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  .my-coupon-container {
    height: 100%;
  }
  .my-coupon {
    box-sizing: border-box;
    min-height: 100%;
    background-color: #F4F4F4;
    border-radius: 30px 30px 0 0;
    padding: 16px 16px 1px 16px;

    .my-coupon-item-body {
      display: flex;
      padding: 10px 10px 10px 10px;

      .my-coupon-body-left {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        .my-coupon-left-1 {
          margin-top: 19px;
          position: absolute;
          text-align: center;
          color: rgba(255, 255, 255, 1);
          font-size: 22px;
          line-height: 150%;
          font-weight: bold;
        }

        .my-coupon-left-2 {
          position: absolute;
          margin-top: 55px;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          line-height: 150%;
          text-align: center;
        }
      }

      .my-coupon-body-right {
        display: flex;
        flex-direction: column;
        margin-left: 11px;

        .my-coupon-front-1 {
          margin-bottom: 7px;
          color: rgba(51, 51, 51, 1);
          font-size: 14px;
          line-height: 21px;
          text-align: left;
          font-weight: bold;
        }

        .my-coupon-front-2 {
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          line-height: 18px;
          text-align: left;
        }
      }
    }

    .my-coupon-item {
      position: relative;
      margin-bottom: 10px;
      border-radius: 10px;
      width: 100%;
      background-color: white;

      .my-coupon-item-line {
        margin: 0 auto;
        width: 323px;
        color: rgba(204, 204, 204, 1);
        text-align: center;
        border: none;
        border-bottom: 1px dashed;
      }

      .my-coupon-line {
        width: 100%;
        color: rgba(51, 51, 51, 1);
        font-size: 14px;
        display: flex;
        flex-direction: column;
        /*align-items: center;*/

        .my-coupon-detail {
          margin: 6px 0 6px 10px;
          display: flex;
          text-align: start;

          .my-coupon-icon {
            font-size: 14px;
            line-height: 24px;
            align-self: center;
            margin-left: 5px;
            transition: transform 0.3s;
          }
        }
      }

      .my-coupon-expired {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }

  .my-coupon-collapse {
    padding: 10px 0 10px 10px;
    color: rgba(80, 80, 80, 1);
    background-color: rgba(238, 238, 238, 1);
    border-radius: 11px;
    align-items: start;

    .my-coupon-front-3 {
      font-size: 14px;
    }
  }

  .my-coupon /deep/ .van-cell:after {
    border: 0;
    border-radius: 10px;
  }

  .my-coupon /deep/ .van-cell {
    border-radius: 10px 10px 10px 10px;
    padding: 0 0 0 0;
  }

  .my-coupon /deep/ .van-collapse-item__content {
    padding: 0 10px 10px 10px;
    border-radius: 0 0 10px 10px;
    /*margin-bottom: 10px;*/
  }

  .rotate-right {
    transform: rotate(180deg);
  }

  .rotate-left {
    transition-duration: 0.3s;
    transform: rotate(360deg);
  }

  .my-coupon-box-shadow {
    opacity: 0.5;
    pointer-events: none;
  }

</style>
