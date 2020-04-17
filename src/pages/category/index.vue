<template>
  <div>

    <van-tabs :active="active" sticky type="line">

      <van-tab v-for="(tab, indexOut) in tabsData" :title="tab.title" :name="tab.tabName" :key="index">
        <div class="box">
          <div class="box-1" v-for="(tabContent, indexInner) in tab.tabData" @click="navigateToDetail" :key="index">
            <div class="d-1">
              <div class="d-1-1">
                <image
                  class="d-1-1-img"
                  :src="tabContent.pic" />
                <span class="d-1-1-2">{{tabContent.pageCount}}</span>
              </div>

              <div class="d-1-2">
                <span class="d-1-2-1">【珍异皮册系列】   size：{{tabContent.size}}mm</span>
              </div>

              <div class="d-1-3">
                <span class="d-1-3-1">{{tabContent.buyPerson}}人下单</span>
                <span class="d-1-3-2">{{tabContent.prePrice}}</span>
                <span class="d-1-3-3">{{tabContent.nowPrice}}</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Tab from '../../components/common/tab'

  export default {
    data () {
      return {
        active: 'kind1',
        tabsData: [
          {
            tabName: 'kind1',
            title: '标签1',
            tabData: [{pic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=227865653,4109405088&fm=26&gp=0.jpg', pageCount: 24, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4205491160,1915674852&fm=26&gp=0.jpg', pageCount: 36, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3885248216,2587088249&fm=26&gp=0.jpg', pageCount: 48, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3035939304,1926067551&fm=26&gp=0.jpg', pageCount: 24, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'http://img0.imgtn.bdimg.com/it/u=3078544922,1863987782&fm=26&gp=0.jpg', pageCount: 36, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'http://img1.imgtn.bdimg.com/it/u=2933720103,2169241796&fm=26&gp=0.jpg', pageCount: 48, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'http://img4.imgtn.bdimg.com/it/u=3996477588,3104200340&fm=26&gp=0.jpg', pageCount: 24, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1674755838,1878368217&fm=26&gp=0.jpg', pageCount: 36, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'http://img1.imgtn.bdimg.com/it/u=315209317,2080569846&fm=26&gp=0.jpg', pageCount: 48, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3435140774,1341861573&fm=26&gp=0.jpg', pageCount: 24, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4110894667,3651514495&fm=26&gp=0.jpg', pageCount: 36, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2084322970,2141614374&fm=26&gp=0.jpg', pageCount: 48, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5}
            ]
          },
          {
            tabName: 'kind2',
            title: '标签2',
            tabData: [
              {pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3035939304,1926067551&fm=26&gp=0.jpg', pageCount: 24, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'http://img0.imgtn.bdimg.com/it/u=3078544922,1863987782&fm=26&gp=0.jpg', pageCount: 36, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'http://img1.imgtn.bdimg.com/it/u=2933720103,2169241796&fm=26&gp=0.jpg', pageCount: 48, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5}
            ]
          },
          {
            tabName: 'kind3',
            title: '标签3',
            tabData: [{pic: 'http://img4.imgtn.bdimg.com/it/u=3996477588,3104200340&fm=26&gp=0.jpg', pageCount: 24, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1674755838,1878368217&fm=26&gp=0.jpg', pageCount: 36, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5},
              {pic: 'http://img1.imgtn.bdimg.com/it/u=315209317,2080569846&fm=26&gp=0.jpg', pageCount: 48, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5}
            ]
          },
          {
            tabName: 'kind4',
            title: '标签4',
            tabData: [{pic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3435140774,1341861573&fm=26&gp=0.jpg', pageCount: 24, size: '240*240', buyPerson: 234, prePrice: 38.5, nowPrice: 30.5}

            ]
          }
        ]
      }
    },
    components: {Tab},

    methods: {
      navigateToDetail () {
        this.$native.navigateTo('pages/category/product-detail/main')
      }
    },

    mounted () {
    }
  }
</script>

<style scoped>
  .box {
    background-color: #F4F4F4;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding-top: 8px;
    position: fixed;
    top: 44px;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    overflow-y: scroll;
  }

  .box-1 {
    padding: 8px 0;
  }

  .d-1 {
    margin: 0 16px;
  }

  .d-1-1 {
    width: 100%;
    position: relative;
  }

  .d-1-1-img {
    border-radius: 10px;
    width: 100%;
    height: 39vw;
  }

  .d-1-1-2 {
    border-radius: 4px;
    position: absolute;
    left: 10px;
    top: 9px;
    background-color: #FFDF50;
    width: 48px;
    height: 20px;
    font-size: 12px;
    text-align: center;
    line-height: 150%;
    color: #505050;
  }

  .d-1-2 {
    margin-top: 6px;
  }

  .d-1-2-1 {
    color: #333333;
    font-size: 14px;
    line-height: 150%;
    font-weight: bold;
    margin-left: -8px;
  }

  .d-1-3 {
    overflow: hidden;
    position: relative;
  }

  .d-1-3-1 {
    color: #999999;
    font-size: 12px;
    line-height: 150%;
    text-align: left;
  }

  .d-1-3-2 {
    float: right;
    color: #999999;
    font-size: 12px;
    text-decoration: line-through;
    text-align: right;
    line-height: 150%;
    margin-top: 2px
  }

  .d-1-3-3 {
    float: right;
    color: #FF4064;
    font-size: 14px;
    line-height: 150%;
    text-align: left;
    font-weight: bold;
  }

  >>> .van-tabs__line {
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: 1;
    height: 3px;
    background-color: #EE0A24;
    border-radius: 3px;
  }

  van-tabs >>> .van-tab--active  {
    color: black;
    font-weight: bold;
  }

  /*>>> .van-tab__pane--active {
    background-color: #F4F4F4;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    height: 598px;

  }*/


</style>
