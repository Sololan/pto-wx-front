<template>
  <div class="select-coupon-outer">
    <div class="my-coupon-container">
      <div class="my-coupon">
        <van-checkbox-group v-model="result" @change="onChange($event)">
          <div class="my-coupon-item" v-for="(item, index) in list" :key="index">
            <div>
              <div class="my-coupon-item-body" :class="{'my-coupon-box-shadow':item.open}">
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
                <div class="my-coupon-expired">
                  <van-checkbox radius="20rpx" checked-color="#ff4064" icon-size="38rpx" :name="index" />
                </div>
              </div>
              <div class="my-coupon-item-line" v-show="item.open"></div>
              <div class="select-coupon-after-line" v-if="item.open">
                <van-icon name="warning" color="red" size="28rpx" />
                <div class="my-coupon-front-3">
                  与一选择的红包互斥，不可叠加使用
                </div>
              </div>
            </div>
          </div>
        </van-checkbox-group>
      </div>
    </div>
    <div class="select-coupon-bottom">
      <div class="select-coupon-bottom-left">
        <div class="font-style-1">
          已选择1张，可抵扣
        </div>
        <div class="font-style-2">
          ¥5
        </div>
      </div>
      <div class="select-coupon-bottom-right">
        <van-button custom-style="width:220rpx; height:88rpx; border-radius:44rpx; font-size:28rpx" color="#ff4064" type="primary">确认使用</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        result: [],
        up: false,
        list: [
          {name: 1, open: false},
          {name: 2, open: false},
          {name: 3, open: false}
        ],
        activeNames: []
      }
    },
    computed: {},
    methods: {
      onChange (event) {
        const count = event.mp.detail
        /* const templateList = []
        for (let countKey in count) {
          templateList.push(this.list[Number(countKey)])
        } */
        if (count.length > 0) {
          this.list = this.list.map((item) => ({name: item.name, open: !(count.indexOf((item.name - 1).toString()) > -1), remark: item.remark}))
        } else {
          this.list = this.list.map((item) => ({name: item.name, open: false, remark: item.remark}))
        }
        console.log(this.list)
        this.result = event.mp.detail
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  .my-coupon {
    min-height: 100%;
    background-color: #F4F4F4;
    border-radius: 30px 30px 0 0;
    padding: 16px 16px 1px 16px;
    box-sizing: border-box;

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

      .select-coupon-after-line {
        height: 37px;
        display: flex;
        padding: 0 0 0 10px;
        align-items: center;

        .my-coupon-line {
          width: 100%;
          color: rgba(51, 51, 51, 1);
          font-size: 14px;
          display: flex;
          flex-direction: column;

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

        .my-coupon-front-3 {
          line-height: 18px;
          margin-left: 6px;
          color: rgba(51, 51, 51, 1);
          font-size: 12px;
          text-align: left;
        }
      }

      .my-coupon-expired {
        position: absolute;
        right: 10px;
        top: auto;
        bottom: auto;
      }
    }
  }

  .my-coupon-container {
    overflow-y: auto;
    flex: auto;
    padding: 0 0 0 0;
    box-sizing: border-box;
  }

  .select-coupon-outer {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .select-coupon-bottom {
    height: 50px;
    flex: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .select-coupon-bottom-left {
      display: flex;
      margin-left: 16px;
      align-items: center;

      .font-style-1 {
        text-align: center;
        color: rgba(56, 56, 56, 1);
        font-size: 14px;
        line-height: 21px;
        font-weight: bold;
      }

      .font-style-2 {
        margin-left: 5px;
        color: rgba(255, 68, 68, 1);
        font-size: 18px;
        line-height: 27px;
        text-align: left;
        font-weight: bold;
      }
    }

    .select-coupon-bottom-right {
      margin-right: 16px;
    }
  }

  .my-coupon-collapse {
    padding: 10px 0 10px 10px;
    color: rgba(80, 80, 80, 1);
    background-color: rgba(238, 238, 238, 1);
    border-radius: 11px;
    align-items: start;
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
    padding: 5px 10px 10px 10px;
    border-radius: 0 0 10px 10px;
    margin-bottom: 10px;
  }

  .rotate-right {
    transform: rotate(180deg);
  }

  .rotate-left {
    transition-duration: 0.3s;
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }

  .my-coupon-box-shadow {
    opacity: 0.5;
    pointer-events: none;
  }

</style>
