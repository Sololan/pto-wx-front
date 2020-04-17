<template>
  <div class="body">
    <swiper class="swiper" indicator-dots="true" indicator-active-color="#FFFFFF" autoplay="true">
      <swiper-item v-for="(img, index) in swiperImages" :key="index">
        <img :src="img" class="swiper-img" mode="aspectFill">
      </swiper-item>
    </swiper>

    <div class="goods-list-title">
      热销商品 Hot Sale
    </div>
    <div class="goods" @click="navigateToDetail" v-for="(item, index) in itemList" :key="index">
      <img :src="item.images" class="goods-img">
      <span class="goods-pageSize">{{item.pageSize}}</span>
      <div class="goods-label">
        <span class="goods-name">{{item.name}}</span>
        <span>size：{{item.size}}</span>
      </div>
      <div class="goods-sales">{{item.sales}}人下单</div>
    </div>

  </div>
</template>

<script>
  import {EventName, ScheduleType} from '../../utils/constant'

  export default {
    data () {
      return {
        swiperImages: [
          '/static/images/home-goods1.jpg',
          '/static/images/home-goods1.jpg',
          '/static/images/home-goods1.jpg'
        ],
        itemList: [
          {
            pageSize: '页数',
            images: '/static/images/home-goods1.jpg',
            name: '【珍异皮册系列】',
            size: '240*240mm',
            sales: '234'
          },
          {
            pageSize: '页数',
            images: '/static/images/home-goods1.jpg',
            name: '【珍异皮册系列】',
            size: '240*240mm',
            sales: '234'
          }
        ]
      }
    },

    methods: {
      navigateToDetail () {
        this.$native.navigateTo('pages/category/product-detail/main')
      },
      showInfo () {
        this.$native.navigateTo('pages/home/schedule-detail/main').then((res) => {
          res.eventChannel.emit(EventName.FromOpenerPage, this.schedule)
        })
      },
      showVue (src) {
        this.$native.navigateTo(src)
      },
      showNotice (notice) {
        this.$native.navigateTo('pages/home/notice-detail/main').then((res) => {
          res.eventChannel.emit(EventName.FromOpenerPage, notice)
        })
      },
      showNoticeInfo () {
        this.$native.navigateTo('pages/home/notice/main')
      },
      init () {
      }
    },

    created: function () {
      // let app = getApp()
    },

    beforeMount () {
      this.init()
    },

    onTabItemTap () {
      this.init()
    },

    onLoad () {
      this.$native.hideHomeButton()
    }
  }
</script>

<style scoped lang="scss">

  .body {
    box-sizing: border-box;
    min-height: 100%;
    padding-top: 16px;
    width: 343px;
    margin: 0 auto;

    .swiper {
      width: 100%;
      height: 170px;

      .swiper-img {
        width: 100%;
        height: 100%;
        border-radius: 11px;
      }
    }

    .goods-list-title {
      color: rgba(51, 51, 51, 1);

      font-size: 18px;
      line-height: 150%;
      text-align: left;
      font-weight: bold;

      margin: 19px 0 11px;
    }

    .goods {
      position: relative;

      .goods-img {
        width: 100%;
        height: 147px;
        border-radius: 11px;
        box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);
      }

      .goods-pageSize {
        position: absolute;
        top: 10px;
        left: 10px;

        width: 48px;
        height: 20px;
        color: rgba(80, 80, 80, 1);
        background-color: rgba(255, 223, 80, 1);
        border-radius: 4px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        font-weight: bold;
      }

      .goods-label {
        color: rgba(51, 51, 51, 1);
        font-size: 14px;
        line-height: 150%;
        text-align: left;
        font-weight: bold;

        .goods-name {
          margin: 0 14px 0 -8px;
        }
      }

      .goods-sales {
        color: rgba(153, 153, 153, 1);
        font-size: 12px;
        line-height: 150%;
        text-align: left;

        margin-bottom: 10px;
      }

    }
  }

</style>
