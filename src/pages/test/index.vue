<template>
  <div>
    <div class="yfont y-mb">1</div>
    <button @click="uploadPic">上传图片</button>
    <!--    <view style="z-index: 1; position: relative;top: 50px; left: 50px" @touchmove="touchstart" @touchstart="touchstart($event)" id="abc">-->
    <view :style="{'top':picY +'px','left': picX+'px','position': 'absolute'}" @touchmove="touchmove($event)" @touchstart="touchstart($event)" @touchend="touchend($event)" id="abc">
      <image src="/static/images/图片模板.png" :data-index="index" />
    </view>
    <div class="pic1">
      <image v-for="(item,itemkey) in picList" :src="item" catchtouchstart="touchstart" :data-index="index" />
    </div>
  </div>
</template>

<script>
  import wx from '../../utils/native'

  export default {

    data() {
      return {
        picX: 0,
        picY: 100,
        temPicX: 0,
        temPicY: 0,
        temX: 0,
        temY: 0,
        picList: [],
        source: {

        }
      }
    },
    components: {},

    methods: {
      uploadPic() {
        console.log(this.picList)
        wx.chooseImage(1, ['original', 'compressed'], ['album', 'camera'])
        .then((res) => {
          console.log(res)
          this.picList = res.tempFilePaths
        })
      },
      touchstart(e) {
        this.temPicX = this.picX
        this.temPicY = this.picY
        this.temX = e.clientX
        this.temY = e.clientY
      },
      touchmove(e) {
        this.picX = this.temPicX + e.clientX - this.temX
        this.picY = this.temPicY + e.clientY - this.temY
      },
      touchend(e) {
        console.log('touchend')
      }
    },

    mounted() {
      console.log(this.picList)
    }
  }
</script>

<style scoped>
  .testCss {
    top: 50px;
    left: 50px;
  }
  .pic1 {
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 3;
    width: 70%;
    clip: rect(0px, 200px, 200px, 0px)
  }
</style>
