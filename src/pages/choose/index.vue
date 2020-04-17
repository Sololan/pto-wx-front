<template>
  <van-tabs :active=" active " @change="onChange" sticky>
    <van-tab title="照片" name="1">
      <div class="box">
        <div>
            <van-checkbox-group :value="picResult" @change="checkPicChange" class="van-checkbox-group">
              <div class="d-1" v-for="(item,index) in imgList" :key="index">
                <van-checkbox checked-color="#ff4064" icon-size="38rpx" :name="item.id" class="d-1-checkbox">
                </van-checkbox>
                <image :src="item.src" class="d-1-img"></image>
              </div>
            </van-checkbox-group>
        </div>

        <van-submit-bar
          button-text="确认"
          @submit="onClickButton"
          safe-area-inset-bottom="false"
          class="van-submit-bar"
        >
          <van-checkbox v-model="isCheckAllPic" @click="checkAllPic()" icon-size="38rpx" checked-color="#ff4064" radius="20" class="van-submit-bar-checkbox">全选</van-checkbox>
        </van-submit-bar>
      </div>
    </van-tab>
    <van-tab title="文件夹" name="2">
      <div class="box">
        <div>
          <van-checkbox-group :value="fileResult" @change="checkFileChange">
              <div class="d-1-file" v-for="(item,index) in fileList" :key="index">
                <van-checkbox checked-color="#ff4064" icon-size="38rpx" :name="item.id" class="d-1-checkbox">
                </van-checkbox>
                <image :src="item.src" class="d-1-img-r"></image>
                <div class="d-1-file-name">相册名称</div>
                <div class="d-1-file-count">123</div>
              </div>
          </van-checkbox-group>
        </div>

        <van-submit-bar
          button-text="确认"
          @submit="onClickButton"
          safe-area-inset-bottom="false"
          class="van-submit-bar"
        >
          <van-checkbox v-model="isCheckAllFile" @click="checkAllFile()" icon-size="38rpx" checked-color="#ff4064" radius="20" class="van-submit-bar-checkbox">全选</van-checkbox>
        </van-submit-bar>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
  export default {
    data () {
      return {
        active: '1',
        isCheckAllPic: false,
        isCheckAllFile: false,
        picResult: [],
        fileResult: [],
        imgList: [{id: '1', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=949549237,3507845745&fm=11&gp=0.jpg'},
          {id: '6', src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3910641899,3187940079&fm=26&gp=0.jpg'},
          {id: '8', src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4247833059,2940313440&fm=11&gp=0.jpg'},
          {id: '7', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1420829909,802073227&fm=26&gp=0.jpg'},
          {id: '5', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'}],
        fileList: [{id: '1', src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2740316453,793603930&fm=26&gp=0.jpg'},
          {id: '2', src: 'http://img4.imgtn.bdimg.com/it/u=623843277,407295937&fm=26&gp=0.jpg'},
          {id: '3', src: 'http://img5.imgtn.bdimg.com/it/u=3495666838,2378317367&fm=26&gp=0.jpg'},
          {id: '4', src: 'http://img1.imgtn.bdimg.com/it/u=312930442,387542997&fm=26&gp=0.jpg'},
          {id: '5', src: 'http://img4.imgtn.bdimg.com/it/u=3183358336,1301231140&fm=26&gp=0.jpg'}]
      }
    },

    components: {},

    methods: {
      onClickButton () {
          this.$native.navigateTo('pages/order-img/main')
      },

      onChange () {

      },

      checkAllPic () {
        this.isCheckAllPic = !this.isCheckAllPic
        if (this.isCheckAllPic === true) {
          const picResult = this.imgList.map(value => { return value.id })
          this.picResult = picResult
        } else {
          this.picResult = []
        }
      },

      checkPicChange (e) {
        this.picResult = e.mp.detail
        console.log(this.picResult)
        if (this.picResult.length === this.imgList.length) {
          this.isCheckAllPic = true
        } else {
          this.isCheckAllPic = false
        }
      },

      checkFileChange (e) {
        this.fileResult = e.mp.detail
        if (this.fileResult.length === this.fileList.length) {
          this.isCheckAllFile = true
        } else {
          this.isCheckAllFile = false
        }
      },

      checkAllFile () {
        this.isCheckAllFile = !this.isCheckAllFile
        if (this.isCheckAllFile === true) {
          const fileResult = this.fileList.map(value => { return value.id })
          this.fileResult = fileResult
        } else {
          this.fileResult = []
        }
      }
    },

    mounted () {
    }
  }
  </script>

<style scoped>

  van-tab >>> .van-tab__pane{
    padding-bottom: 44px;
  }

  .box{
    margin: 3% 2% 0 3%;
  }

  .box-d{
    overflow-y: auto
  }

  .van-checkbox-group{
    overflow: hidden;
  }

  .d-1{
    position: relative;
    width: 31%;
    height: 30vw;
    float: left;
    margin: 1%;
  }

  .d-1-file{
    position: relative;
    width: 31%;
    height: 42vw;
    float: left;
    margin: 1%;
  }

  .d-1-file-name{
    font-size: 14px;
    color: #333333
  }

  .d-1-file-count{
    font-size: 12px;
    color: #999999
  }

  .d-1-img{
    width: 100%;
    height: 100%;
  }

  .d-1-img-r{
    width: 100%;
    height: 71.5%;
    border-radius: 10px;
  }

  .d-1-checkbox{
    position: absolute;
    top: 8%;
    right: 8%;
  }

  .van-submit-bar{
    position: relative;
    padding: 0 3%;
    height: 44px
  }

  .van-submit-bar-checkbox{
    position: absolute;
    left: 16px;
  }

  van-submit-bar /deep/ .van-submit-bar__button{
    width: 200px;
  }
  van-submit-bar /deep/.van-button{
    height: 44px;
  }
  van-submit-bar /deep/.van-submit-bar__bar{
    height: 47px;
  }
  van-checkbox /deep/.van-checkbox__label{
    font-size: 16px;
  }
  van-submit-bar /deep/.van-button--normal{
    background-color: #ff4064;
    font-size: 14px;
  }

  van-submit-bar /deep/.van-submit-bar__bar{
    padding: 0 16px;
  }

  van-tabs >>> .van-tab--active  {
    color: black;
    font-weight: bold;
  }

  van-checkbox.data-v-9f4e5b3c >>> .van-checkbox__label{
    color: #999999;
  }
</style>

