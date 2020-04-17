<template>
  <div class="box" :style="'margin-top:'+top+'rpx'">
    <div class="box-margin">
      <div class="describe">
        长按拖拽排序
      </div>
      <div class="box-images">
        <div class="box-image" v-for="(item, index) in imaList" :key="index">
          <image class="image" :src="item.src" @click="onClick"></image>
          <div class="image-pageNum">{{item.pageNo}}</div>
        </div>
      </div>
      <div class="scolle">
        <div class="scolle-d" @click="upSilder" id="up">
          <div class="scolle-d-background">
          </div>
          <div class="scolle-d-up-d">
            <div class="scolle-d-d-d">
              <van-icon name="arrow-up" size="48rpx" color="#333333"/>
              <div class="scolle-d-up-font">
                <div class="scolle-d-up-font1">go</div>
                <div class="scolle-d-up-font2">向上</div>
              </div>
            </div>
          </div>
        </div>

        <div class="scolle-d scolle-down" @click="downSilder">
          <div class="scolle-d-background">
          </div>
          <div class="scolle-d-down-d">
            <div class="scolle-d-d-d">
              <div class="scolle-d-down-font">
                <div class="scolle-d-down-font1">向下</div>
                <div class="scolle-d-down-font2">go</div>
              </div>
              <van-icon name="arrow-down" size="48rpx" color="#333333" class="scolle-d-down-icon"/>
            </div>
          </div>
        </div>
      </div>
      <div class="button-group">
        <van-button type="default" round="true" class="button-left-1">返回</van-button>
        <van-button type="default" round="true" class="button-left-2">还原</van-button>
        <van-button type="danger" round="true" class="button-right">完成</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        top: '',
        imaList: [
          {id: '1', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 1},
          {id: '2', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 2},
          {id: '3', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 3},
          {id: '4', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 4},
          {id: '5', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 5},
          {id: '6', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 6},
          {id: '7', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 7},
          {id: '8', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 8},
          {id: '9', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 9},
          {id: '10', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 10},
          {id: '11', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 11},
          {id: '12', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 12},
          {id: '13', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 13},
          {id: '14', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 14},
          {id: '15', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 15},
          {id: '16', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg', pageNo: 16}
        ]
      }
    },

    components: {},

    methods: {

      onClick (e) {
        //let nodesRef = document.getElementsByClassName('.box-image')
        //console.log(e)
      },

      upSilder (event) {
        //console.log(event)
        this.top = this.top + 100
      },

      downSilder () {
        this.top = this.top - 100
      }
    },

    mounted () {
    }
  }
  </script>

<style scoped>
  .box{
    border-top: 1px solid black;
  }

  .box-margin{
    margin: 0 11px;
    padding-bottom: 70px;
  }

  .describe{
    text-align: center;
    margin: 14px 0;
    font-size: 14px;
    color: #999999;
  }

  .box-images{
    display: flex;
    flex-wrap: wrap;
  }

  .box-image{
    flex: none;
    width: 47%;
    height: 50vw;
    padding: 5px;
  }

  .image{
    width: 100%;
    height: 87%;
  }

  .image-pageNum{
    float: right;
    font-size: 14px;
    color: #505050;
    margin-top: 6px;
  }
  .scolle{
    position: fixed;
    right: 16px;
    top: 133px;
  }

  .scolle-d{
    width: 50px;
    height: 50px;
    position: relative;
  }

  .scolle-down{
    margin-top: 300%
  }

  .scolle-d-background{
    width: 50px;
    height: 50px;
    border-radius: 26px;
    text-align: center;
    background-color: #ffdf50;
    opacity: 0.7;
  }

  .scolle-d-up-d{
    position: absolute;
    top: 0;
    left: 12px;
  }

  .scolle-d-down-d{
    position: absolute;
    top: 3px;
    left: 12px;
  }

  .scolle-d-d-d{
    position: relative;
  }

  .scolle-d-up-font{
    position: absolute;
    top:15px;
    text-align: center;
  }

  .scolle-d-up-font1{
    font-size: 10px;
    color: #333333;
    font-weight: bold;
  }

  .scolle-d-up-font2{
    font-size: 12px;
    color: #ff4064;
    font-weight: bold;
  }

  .scolle-d-down-font{
    text-align: center;
  }

  .scolle-d-down-font1{
    font-size: 12px;
    color: #ff4064;
    font-weight: bold;
  }

  .scolle-d-down-font2{
    font-size: 10px;
    color: #333333;
    font-weight: bold;
  }

  .scolle-d-down-icon{
    position: absolute;
    bottom: -18px;
  }

  .button-group{
    overflow: hidden;
    position: fixed;
    bottom: 16px;
    width: 100%;
  }

  .button-left-1{
    float: left;
    margin-left: 4px;
  }

  .button-left-2{
    float: left;
    margin-left: 10px;
  }

  .button-right{
    float: right;
    margin-right: 29px;
  }

  van-button >>> .van-button--default{
    width: 88px;
    height: 44px;
    background-color: white;
    border-color: #999999;
    font-size: 14px;
    font-weight: bold;
    color: #333333;
    float: left;
  }

  van-button >>> .van-button--danger{
    width: 110px;
    height: 44px;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    float: right;
    background-color: #ff4064;
  }
</style>
