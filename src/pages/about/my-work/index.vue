<template>
  <div class="my-work">
    <div class="my-work-body">
      <van-checkbox-group :value="result" @change="onCheckBoxChange">
        <div class="my-work-item-list" v-for="(itemList,index) in timeLine" :key="index">
          <div class="my-work-year">{{itemList.year}}年</div>
          <div class="my-work-item" v-for="(item,itemIndex) in itemList.monthList" :key="itemIndex">
            <div class="my-work-day">
              {{item.day}}
            </div>
            <div class="my-work-month">
              {{item.month}}月
            </div>
            <div class="my-work-item-line-2">
              <van-checkbox checked-color="#ff4064" icon-size="38rpx" :name="item.id" />
            </div>
            <div>
              <van-image
                fit="cover"
                radius="20rpx"
                width="160rpx"
                height="160rpx"
                :src="item.picUrl"
              />
            </div>
            <div class="my-work-item-line">
              <div class="my-work-line-1">
                {{item.name}}
              </div>
              <div class="my-work-line-2">
                {{item.status===1?'未完成':'已完成'}}
              </div>
            </div>
            <div class="my-work-item-line-3">
              <span class="yfont font-small y-xg"></span>
            </div>
          </div>
        </div>
      </van-checkbox-group>
    </div>
    <div class="my-work-bottom">
      <van-submit-bar
        button-text="加入购物车"
        @submit="onClickButton($event)"
        safe-area-inset-bottom="false"
        class="van-submit-bar">
        <div class="d">
          <div class="d-1">
            <van-checkbox checked-color="#ff4064" icon-size="38rpx" :value="isCheckAll" @change="onCheckAll">全选</van-checkbox>
          </div>
          <div class="d-2">
            <div class="d-2-1">
              <span class="yfont y-sc"></span>
            </div>
            <div class="d-2-2">
              删除
            </div>
          </div>
        </div>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isCheckAll: false,
        result: [],
        timeLine: [{
          year: 2020, monthList: [{id: 1, day: 12, month: '03', picUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', name: '自定义', status: '1'},
            {id: 2, day: 12, month: '03', picUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', name: '自定义', status: '1'},
            {id: 3, day: 12, month: '03', picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=949549237,3507845745&fm=11&gp=0.jpg', name: '自定义', status: '1'}]
        },
          {
            year: 2010, monthList: [{id: 4, day: 12, month: '03', picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=949549237,3507845745&fm=11&gp=0.jpg', name: '自定义', status: '1'},
              {id: 5, day: 12, month: '03', picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=949549237,3507845745&fm=11&gp=0.jpg', name: '自定义', status: '1'},
              {id: 6, day: 12, month: '03', picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=949549237,3507845745&fm=11&gp=0.jpg', name: '自定义', status: '1'}]
          }]
      }
    },
    methods: {
      onClickButton () {

      },
      onCheckBoxChange (e) {
        this.result = e.mp.detail
        this.isCheckAll = this.result.length === this.handelCheck().length
      },
      onCheckAll () {
        let count = 1
        this.isCheckAll = !this.isCheckAll
        if (this.isCheckAll) {
          this.result = this.handelCheck()
        } else {
          this.result = []
        }
      },
      handelCheck () {
        return this.timeLine.map(item => {
          return item.monthList.map(value => {
            return value.id.toString()
          })
        }).flat(Infinity)
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  .my-work {
    display: flex;
    flex-direction: column;

    .my-work-body {
      flex: auto;
      height: auto;

      .my-work-item-list {
        display: flex;
        flex-direction: column;

        .my-work-year {
          margin-bottom: 7px;
          margin-left: 16px;
          color: rgba(51, 51, 51, 1);
          font-size: 16px;
          line-height: 24px;
          text-align: left;
          font-weight: bold;
        }

        .my-work-item {
          position: relative;
          height: 80px;
          display: flex;
          align-items: center;
          margin-bottom: 16px;

          .my-work-day {
            margin-left: 16px;
            color: rgba(51, 51, 51, 1);
            font-size: 20px;
            line-height: 30px;
            text-align: left;
            font-weight: bold;
          }

          .my-work-month {
            margin-left: 6px;
            color: rgba(153, 153, 153, 1);
            font-size: 12px;
            line-height: 18px;
            text-align: left;
            font-weight: bold;
          }

          .my-work-item-line-2 {
            margin-left: 12px;
            margin-right: 13px;
          }

          .my-work-item-line {
            margin-left: 10px;
            display: flex;
            flex-direction: column;

            .my-work-line-1 {
              color: rgba(80, 80, 80, 1);
              font-size: 14px;
              line-height: 21px;
              text-align: left;
              font-weight: bold;
            }

            .my-work-line-2 {
              color: rgba(153, 153, 153, 1);
              font-size: 14px;
              line-height: 21px;
              text-align: left;
              margin-top: 18px;
            }
          }

          .my-work-item-line-3 {
            position: absolute;
            top: 0;
            right: 0;
            margin-right: 16px;
            margin-top: 10px;
          }
        }
      }
    }

    .my-work-bottom {
      height: 50px;
      flex: none;

      .d {
        /*width: 100%;*/
        position: absolute;
        left: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > .d-1 {
          width: auto;
          height: 44px;
          display: flex;
          margin-left: 12px;
          align-items: center;
          text-align: center;
        }

        .d-2 {
          display: flex;
          flex-direction: column;
          margin-left: 36px;

          .d-2-1 {

          }

          .d-2-2 {
            color: rgba(255, 64, 100, 1);
            font-size: 12px;
            line-height: 150%;
            text-align: left;
          }
        }
      }
    }
  }

  .van-submit-bar {
    position: relative;
    padding: 0 3%;
    height: 44px;
  }

  van-submit-bar /deep/ .van-submit-bar__button {
    width: 200px;
  }

  van-submit-bar /deep/ .van-button {
    height: 44px;
  }
  van-submit-bar /deep/ .van-submit-bar__bar {
    height: 47px;
  }
  van-submit-bar /deep/ .van-button--normal {
    font-size: 14px;
  }
  van-checkbox /deep/ .van-checkbox__label {
    font-size: 16px;
  }

  .yfont {
    font-size: 24px;
    color: red;
  }

  .font-small {
    font-size: 16px;
  }
</style>
