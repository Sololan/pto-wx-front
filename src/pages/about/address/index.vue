<template>
  <div class="page">
      <div class="address-list">
        <van-radio-group :value="radio" @change="handleRadioChange">
          <van-swipe-cell
            :right-width="130"
            async-close @close="handleDelete"
            v-for="(address, index) in addressList"
            :key="index"
            :name="index">
            <div class="address-item">
              <van-radio :name="address.id" checked-color="#FF4064" icon-size="30rpx"></van-radio>
              <div class="address-info">
                <div style="display: flex">
                  <span class="address-title">{{address.username}}</span>
                  <span class="phone address-title">{{address.phone}}</span>
                  <div class="tag" v-if="address.default">默认</div>
                </div>
                <div class="address-content">
                  {{address.address}}
                </div>
              </div>
              <span class="yfont .y-xg address-icon" @click="editAddress"></span>
            </div>
            <div slot="right" class="right-delete">删除</div>
          </van-swipe-cell>

        </van-radio-group>
      </div>

    <van-button
      size="large"
      color="#FF4064"
      @click="editAddress">新增地址
    </van-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: 2,
        addressList: [
          {
            id: 1,
            username: '张一',
            phone: '13212341234',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7楼501室',
            default: true
          },
          {
            id: 2,
            username: '张二',
            phone: '13100000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号',
            default: false
          }
        ]
      }
    },
    components: {},

    methods: {
      handleRadioChange (val) {
        this.radio = val.mp.detail
      },
      editAddress () {
        this.$native.navigateTo('pages/about/address/address-detail/main')
      },
      handleDelete (val) {
        const {position, instance, name} = val.mp.detail
        instance.close()
        if (position === 'right') {
          console.log(name)
          this.addressList.splice(name, 1)
        }
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

    box-sizing: border-box;
    min-height: 100%;
    padding-top: 20px;

    .body {
      width: 343px;
      margin: 0 auto;
    }

    /deep/ .van-button {
      width: 343px;
      height: 44px;

      position: fixed;
      bottom: 16px;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 2;

      font-size: 16px;
      line-height: 150%;
      border-radius: 11px;
    }
  }

  .address-list {
    color: rgba(80, 80, 80, 1);
    background-color: rgba(255, 255, 255, 1);
    /*border-radius: 11px;*/

    box-sizing: border-box;
    width: 100%;

    .right-delete {
      width: 65px;
      height: 100%;
      color: #FFF;
      /*background-color: #ee0a24;*/
      background-color: #FF4064;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .address-item {
      padding: 0 15px;
      min-height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: solid 1px rgba(244, 244, 244, 1);

      .address-info {
        box-sizing: border-box;
        width: 266px;
        padding: 14px 0;

        .address-title {
          color: rgba(56, 56, 56, 1);
          font-size: 14px;
          line-height: 150%;
          font-weight: bold;
        }

        .phone {
          margin-left: 15px;
          margin-right: 7px;
        }

        .tag {
          width: 38px;
          height: 20px;
          background-color: rgba(255, 64, 100, 0.15);
          border-radius: 2px;
          text-align: center;
          color: rgba(255, 64, 100, 1);
          font-size: 11px;
          line-height: 20px;
        }

        .address-content {
          color: rgba(166, 166, 166, 1);
          font-size: 12px;
          line-height: 150%;
        }
      }

      .address-icon {
        font-size: 12px;
      }
    }

  }
</style>
