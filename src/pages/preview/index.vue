<template>
  <div class="box">

    <div class="d-1">横屏观看体验更佳</div>
    <div class="d-2">
      <div class="d-img d-2-1">
        <image :src="src" class="image" mode="aspectFit" />
      </div>
    </div>
    <div class="d-3">
      <van-slider bar-height="3px"
                  :value='currentValue'
                  use-button-slot
                  active-color="#333333"
                  min="1"
                  :max="imageData.length"
                  @drag="onDrag"
                  @change="onChange">
        <div class="d-3-slider-d" slot="button"></div>
      </van-slider>
    </div>
    <div class="d-4">
      <div class="d-4-1">
        <div>
          <span class="yfont y-xg.y-xg d-4-1-1-span"/>
        </div>
        <div class="d-4-1-2">编辑</div>
      </div>

      <div class="d-5">
        <van-button type="danger" size="normal" round="true">开始制作</van-button>
      </div>

    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentValue: 1,
        imageData: ['https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=220424758,3218730757&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1511130937,863826015&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3062301945,921732919&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2366084015,42990655&fm=26&gp=0.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1048963317,1088606746&fm=26&gp=0.jpg',
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2976977768,409870884&fm=26&gp=0.jpg'
        ],
        src: ''
      }
    },

    components: {},

    methods: {
      onDrag (event) {
        this.currentValue = event.target.value
        this.src = this.imageData[event.target.value - 1]
      },

      onChange (e) {
        this.currentValue = e.mp.detail
        this.src = this.imageData[e.mp.detail - 1]
      }
    },

    mounted () {
      console.log(this.imageData[0])
      this.src = this.imageData[0]
    }
  }
  </script>

<style scoped>
  .d-img::before,.d-img::after{
    content: '';
    flex: auto;
    height: 0;
  }

  .box{
    border-top: 1px solid #505050;
    position: relative;
    height: 99%;
    overflow: hidden;
  }

  .d-1{
    margin-top: 16px;
    color: #999999;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
  }

  .d-2{
    margin-top: 16px;
    height: 100%;
  }

  .d-2-1{
    transform: rotate(90deg);
    display: flex;
    flex-direction: column;
    height: 70%;
  }

  .image{
    width: 100%;
  }

  .d-3{
    width: 70%;
    position: fixed;
    bottom: 15%;
    left: 15%
  }

  .d-3-slider-d{
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: #333333;
  }

  .d-4{
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }

  .d-4-1{
    float: left;
    color: #ff4064;
    margin-left: 76px;
  }

  .d-4-1-1-span{
    font-size: 6vw
  }

  .d-4-1-2{
    font-size: 3.5vw
  }

  .d-5{
    float: right;
    margin-right: 16px;
  }

  van-button >>> .van-button--danger {
    font-size: 14px;
    width: 200px;
    height: 44px;
    background-color: #ff4064;
  }
</style>
