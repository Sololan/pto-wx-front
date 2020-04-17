<template>
  <div class="box">
    <div class="d-img">
      <image :src="src" class="image" mode="widthFix"/>
    </div>

    <div class="d-slider">
      <van-slider
        bar-height="6px"
        :value='currentValue'
        use-button-slot
        min="1"
        :max="imageData.length"
        @drag="onDrag"
        @change="onChange">

        <div class="d-slider-1" slot="button">
          <div class="d-slider-1-1">
            {{ currentValue }}/{{ imageData.length }}
          </div>
          <div class="d-slider-1-2">

          </div>

          <div class="d-slider-1-3">

          </div>
        </div>
        <!--<view style="border: 1px solid black;font-size: 12px" slot="button">
          {{ currentValue }}/{{ imageData.length }}
        </view>-->
      </van-slider>
    </div>

    <div class="d-button">
      <van-button type="danger" size="normal" round="true">开始制作</van-button>
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
  .box{
    height: 100%;
    width: 100%;
    position: relative
  }

  .d-img{
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 100%;
  }

  .d-img::before,.d-img::after{
    content: '';
    flex: auto;
    height: 0;
  }

  .image{
    width: 100%;
    flex: none;
  }

  .d-slider{
    width: 70%;
    position: fixed;
    bottom: 15%;
    left: 15%
  }

  .d-slider-1{
    margin-left: 25px;
    position: relative;
    margin-bottom: 110px;
  }

  .d-slider-1-1{
    width: 66px;
    height: 66px;
    border-radius: 33px;
    text-align: center;
    line-height: 66px;
    background-color: #ffdf50;
    z-index: 2;
  }

  .d-slider-1-2{
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    position: absolute;
    top: 30px;
    left: 13px;
    background-color: #ffdf50;
    z-index: -1;
  }

  .d-slider-1-3{
    height: 20px;
    width: 20px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: #333333;
    position: absolute;
    top: 80px;
    left: 23px
  }

  .d-button{
    position: absolute;
    bottom: 0;
    right: 16px
  }

  van-button >>> .van-button--danger {
    font-size: 14px;
    width: 200px;
    height: 44px;
  }
</style>
