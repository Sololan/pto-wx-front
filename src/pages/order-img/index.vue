<template>
  <div class="page">
    <div class="box">
      <div class="box-images">
        <div class="box-image" v-for="(item, index) in imgList" :key="index">
          <image class="image" :src="item.src" />
        </div>
        <!--<image style="flex: none; width: 33.33%" src="http://img5.imgtn.bdimg.com/it/u=3166961976,675928379&fm=26&gp=0.jpg"/>
        <image style="flex: none; width: 33.33%" src="http://img4.imgtn.bdimg.com/it/u=4268816941,2107030219&fm=26&gp=0.jpg"/>
        <image style="flex: none; width: 33.33%" src="http://img3.imgtn.bdimg.com/it/u=2344601237,3469454306&fm=26&gp=0.jpg"/>
        <image style="flex: none; width: 33.33%" src="http://img4.imgtn.bdimg.com/it/u=861650138,2621915240&fm=26&gp=0.jpg"/>
        <image style="flex: none; width: 33.33%" src="http://img4.imgtn.bdimg.com/it/u=861650138,2621915240&fm=26&gp=0.jpg"/>
        <image style="flex: none; width: 33.33%" src="http://img4.imgtn.bdimg.com/it/u=861650138,2621915240&fm=26&gp=0.jpg"/>
        <image style="flex: none; width: 33.33%" src="http://img4.imgtn.bdimg.com/it/u=861650138,2621915240&fm=26&gp=0.jpg"/>-->
      </div>
      <div class="scolle">
        <div class="scolle-d">
          <div class="scolle-d-background">
          </div>
          <div class="scolle-d-up-d">
            <div class="scolle-d-d-d">
              <van-icon name="arrow-up" size="48rpx" color="#333333" />
              <div class="scolle-d-up-font">
                <div class="scolle-d-up-font1">go</div>
                <div class="scolle-d-up-font2">向上</div>
              </div>
            </div>
          </div>
        </div>

        <div class="scolle-d scolle-down">
          <div class="scolle-d-background">
          </div>
          <div class="scolle-d-down-d">
            <div class="scolle-d-d-d">
              <div class="scolle-d-down-font">
                <div class="scolle-d-down-font1">向下</div>
                <div class="scolle-d-down-font2">go</div>
              </div>
              <van-icon name="arrow-down" size="48rpx" color="#333333" class="scolle-d-down-icon" />
            </div>
          </div>
        </div>
      </div>
      <div class="button-group">
        <van-button type="default">取消</van-button>
        <van-button @click="navigateToWorksOrder" type="danger">确定</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imgList: [
          {id: '1', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '2', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '3', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '4', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '5', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '6', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '7', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '8', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '9', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '10', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '11', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '12', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '13', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '14', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '15', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '16', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '17', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '18', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '19', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'},
          {id: '20', src: 'http://img0.imgtn.bdimg.com/it/u=4214115922,1730244294&fm=26&gp=0.jpg'}
        ]
      }
    },

    components: {},

    methods: {
      navigateToWorksOrder () {
        this.$native.navigateTo('pages/works-order/main')
      }
    },

    mounted () {
    }
  }
</script>

<style scoped>
  .page{
    overflow: hidden;
    padding-bottom: 65px;
  }

  .box{
    margin: 11px 11px 0;
  }

  .box-images{
    display: flex;
    flex-wrap: wrap;
  }

  .box-image{
    flex: none;
    width: 30.5%;
    height: 30vw;
    padding: 5px;
  }

  .image{
    width: 100%;
    height: 100%;
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
    margin-top: 300%;
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
    text-align: center;
    position: fixed;
    bottom: 18px;
    left: 16px;
  }


  van-button >>> .van-button--default{
    width: 172px;
    height: 44px;
    border-top-left-radius: 23px;
    border-bottom-left-radius: 23px;
    background-color: #cccccc;
    color: #ffffff;
    font-size: 14px;
  }

  van-button >>> .van-button--danger{
    width: 172px;
    height: 44px;
    border-top-right-radius: 23px;
    border-bottom-right-radius: 23px;
    background-color: #ff4064;
    color: #ffffff;
    font-size: 14px;
  }

</style>

