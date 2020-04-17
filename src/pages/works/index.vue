<template>
  <div class="box">
    <div class="box-margin">
      <div class="box-images">
        <div class="box-image" v-for="(item, index) in imaList" :key="index">
          <image class="image" :src="item.src"></image>
          <div class="image-pageNum">{{item.pageNo}}</div>
        </div>
      </div>
      <div class="button-group">
        <van-button type="default" round="true" class="button-left" @click="navigateToPageSort">页面排序</van-button>
        <van-button type="danger" round="true" class="button-right">全部保存</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
      onClickButton () {},

      onChange () {
      },
      navigateToPageSort () {
        this.$native.navigateTo('pages/works-order/main')
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
    margin: 11px 11px 0;
    padding-bottom: 70px;
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

  .button-group{
    overflow: hidden;
    position: fixed;
    bottom: 16px;
    width: 100%;
  }

  .button-left{
    float: left;
    margin-left: 4px;
  }

  .button-right{
    float: right;
    margin-right: 29px;
  }

  van-button >>> .van-button--default{
    width: 110px;
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
