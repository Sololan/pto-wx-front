<template>
  <div class="container">
    <div class="header">
      <image class="tem-image" mode="aspectFit" :src="imageList[0].path" ></image>
      <span class="header-span">1</span>
    </div>
    <div class="body">
      <div style="height: 100%;position: absolute;border-left: black 1px dashed"></div>
      <div class="body-box" v-for="(item, index) in imageList" v-if="index != 0 & index != imageList.length - 1">
        <image class="tem-image" mode="aspectFit" :src="item.path" ></image>
        <span class="tem-number">{{index * 2 }}</span>
        <span class="tem-number">{{index * 2 + 1 }}</span>
      </div>
    </div>
    <div class="footer">
      <image class="tem-image" mode="aspectFit" :src="imageList[imageList.length - 1].path"></image>
      <span class="footer-span">{{(imageList.length - 1) * 2 }}</span>
    </div>
    <button class="tem-button">选择图片</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imageList: [
          {
            path: 'http://img0.imgtn.bdimg.com/it/u=3817237743,1158790849&fm=26&gp=0.jpg'
          },
          {
            path: 'http://img1.imgtn.bdimg.com/it/u=2274768630,541811083&fm=26&gp=0.jpg'
          },
          {
            path: 'http://img1.imgtn.bdimg.com/it/u=2274768630,541811083&fm=26&gp=0.jpg'
          },
          {
            path: 'http://img1.imgtn.bdimg.com/it/u=2274768630,541811083&fm=26&gp=0.jpg'
          },
          {
            path: 'http://img0.imgtn.bdimg.com/it/u=3817237743,1158790849&fm=26&gp=0.jpg'
          }
        ],
        singleImageList: [

        ],
        doubleImageList: [

        ]
      }
    },
    components: {},

    methods: {
    },

    mounted () {
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 16px 0 16px;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
  }

  .body-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .tem-image {
    height: 165px;
    width: 344px !important;
    margin-top: 9px;
    /*background-color: #CCCCCC;*/
  }

  .tem-number {
    margin-top: 6px;
    margin-bottom: 5px;
    width: 50%;
    text-align: center;
    font-size: 14px;
  }

  .tem-button {
    position: fixed;
    bottom: 20px;
    width: 343px;
    height: 44px;
    color: white;
    background-color: rgba(255, 64, 100, 1);
    font-size: 14px;
    border-radius: 11px;
    text-align: center;
    line-height: 40px;
  }

  .header-span {
    margin-top: 3px;
    margin-bottom: 2.5px;
    font-size: 14px;
  }

  .footer-span {
    margin-top: 3px;
    margin-bottom: 75px;
    font-size: 14px;
  }
</style>
