<template>
  <div class="pd-container">
    <div class="pd-header">
      <tab :active.sync="activeTab" :left.sync="turnLeft" :tabs="tabs" />
    </div>
    <div class="pd-body">
      <div class="pd-tab-panel" :class="{'turn-left': turnLeft, 'turn-right': !turnLeft}" v-show="activeTab === 1">
        <div class="pd-tab-scroll" v-if="activeTab === 1">
          <div class="d-1">
            <image
              v-for="item in imgList"
              class="d-1-img"
              mode="widthFix"
              :src="item"
              :key="index"
            />
          </div>

          <div class="d-2">
            <van-button @click="navigateToWorks" type="default">开始制作</van-button>
          </div>
        </div>
      </div>
      <div class="pd-tab-panel" :class="{'turn-left': turnLeft, 'turn-right': !turnLeft}" v-show="activeTab === 2">
        <div class="comment-content" v-if="activeTab === 2">
          <div class="comment-count">{{commentCount}}</div>
          <div class="comment-scroll">
            <div class="list-comment-b">
              <div class="list-comment" v-for="item in commentList">
                <div class="r-1">
                  <van-image round width="80rpx" height="80rpx" fit="contain" :src="item.picture" />
                  <div>
                    <div class="r-1-1">
                      {{item.user}}
                    </div>
                    <div class="r-1-2">
                      {{item.time}}
                    </div>
                  </div>
                </div>
                <div class="r-2">
                  {{item.content}}
                </div>
                <div class="r-3">
                  <van-rate readonly size="28rpx" :value="item.level" bind:change="onChange" />
                </div>
                <div class="r-4">
                  <div class="r-4-1" v-for="(item,imgIndex) in imgList" :key="imgIndex">
                    <van-image custom-class="customClass" image-class="imageClass" fit='cover' width="174rpx" height="174rpx" :src="item" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Tab from '../../../components/common/tab'

  export default {
    data () {
      return {
        imgList: [
          'http://img2.imgtn.bdimg.com/it/u=1066980683,3807133669&fm=26&gp=0.jpg',
          'https://tse4-mm.cn.bing.net/th/id/OIP.umP2oaFJhUNKCtVrqfJ_7QHaFw?w=248&h=193&c=7&o=5&pid=1.7',
          'https://tse2-mm.cn.bing.net/th/id/OIP.UtjvmzPxF26JK9iFHDF0ugHaEr?w=300&h=189&c=7&o=5&pid=1.7',
          'https://tse4-mm.cn.bing.net/th/id/OIP.ssO1OCA6LFFmxciIfOUYYgHaFj?w=276&h=198&c=7&o=5&pid=1.7'
        ],

        tabs: [
          {value: 1, name: '详情'},
          {value: 2, name: '评价'}
        ],
        turnLeft: false,
        activeTab: 1,
        commentCount: '共122人参与评价',
        active: 'a',
        commentList: [
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '2天前', content: '窃钩者诛，窃国者侯', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '4天前', content: '圣人不除，大盗不已', level: 4},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '3天前', content: '在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5},
          {user: 'alice', picture: 'http://image.biaobaiju.com/uploads/20181021/13/1540100550-lgprsaYmIO.jpeg', time: '1天前', content: '圣人不除，大盗不已。窃钩者诛，窃国者侯。在异性之间看到了爱情，在同性之间看到了天堂', level: 5}
        ]
      }
    },
    components: {Tab},

    methods: {
      navigateToWorks () {
        this.$native.navigateTo('pages/choose/main')
      },
      onChange (event) {
      }
    },
    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .pd-tab-panel.turn-left {
    animation: bounceInLeft .5s;
  }

  .pd-tab-panel.turn-right {
    animation: bounceInRight .5s;
  }

  .pd-tab-panel.turn-left {
    animation: bounceInLeft .5s;
  }

  .pd-tab-panel.turn-right {
    animation: bounceInRight .5s;
  }

  .pd-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .pd-header {
    flex: none;
  }

  .pd-body {
    flex: auto;
    height: 0;
  }

  .pd-tab-panel {
    height: 100%;
  }

  .pd-tab-scroll {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .comment-content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .comment-count {
    flex: none;
    margin: 0 auto;
    width: 343px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #F8F8F8;
    border-radius: 10px;
    color: #333;
    font-size: 14px;
    font-weight: bold;
  }

  .comment-scroll {
    flex: auto;
    height: 0;
    margin: 16px auto;
    width: 343px;
    border-radius: 10px;
    background-color: #F8F8F8;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .list-comment {
    padding: 9px 0 0 9px;
  }

  .list-comment + .list-comment {
    margin-top: 15px;
  }

  .r-1 {
    display: flex;
  }
  .r-1-1 {
    margin-left: 10px;
    height: 24px;
    color: rgba(80, 80, 80, 1);
    font-size: 16px;
    line-height: 150%;
    text-align: left;
    font-weight: bold;
  }
  .r-1-2 {
    margin-left: 10px;
    height: 18px;
    color: rgba(153, 153, 153, 1);
    font-size: 11px;
    line-height: 150%;
    text-align: left;
    margin-bottom: 6px;
  }
  .r-2 {
    margin-top: 1px;
    margin-left: 50px;
    color: rgba(80, 80, 80, 1);
    font-size: 14px;
    line-height: 150%;
    text-align: left;
  }
  .r-3 {
    margin-left: 50px;
    margin-top: 5px;
    color: rgba(80, 80, 80, 1);
    font-size: 14px;
    line-height: 100%;
    text-align: left;
  }
  .r-4 {
    display: flex;
    flex-wrap: wrap;
    margin-left: 44px;
    margin-top: 8px;

    .r-4-1 {
      margin-bottom: 6px;
      margin-left: 6px;
      height: 87px;

      /deep/ .van-image {
        width: 87px;
        height: 87px;
      }

      /deep/ .van-image__img {
        width: 87px;
        height: 87px;
        border-radius: 10px;
      }
    }
  }

  .d-1 {
    padding-top: 12px;
    padding-bottom: 80px;
    width: 100%;
  }

  .d-2 {
    position: fixed;
    bottom: 16px;
    left: 12%;
  }

  .d-1-img {
    width: 100%;
    display: flex;
  }

  > > > .van-button--default {
    font-size: 16px;
    width: 283px;
    height: 44px;
    background-color: #FF4064;
    border-color: #FF4064;
    color: #FFFFFF;
    border-radius: 10px;
  }
</style>
