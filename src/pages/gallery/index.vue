<template>
  <van-tabs :active=" active " @change="onChange" sticky>
    <van-tab title="照片" name="1">
      <div style="height: 100%">
        <div class="box">
          <div v-for="(list, indexTimeLine) in timeLine" :key="indexTimeLine">
            <div class="gallery-timeLine-title">
              <div class="gallery-timeLine-title-front">
                {{list.time}}
              </div>
              <div>
                <div @click="selectAll(indexTimeLine)" class="gallery-check-all">
                  {{list.isCheckAllPic?'全不选':'全选'}}
                </div>
              </div>
            </div>
            <div class="van-checkbox-group">
              <van-checkbox-group :value="list.picResult" @change="checkPicChange(indexTimeLine, $event)">
                <div class="d-1" v-for="(item,index) in list.imgList" :key="index">
                  <van-checkbox checked-color="#ff4064" icon-size="38rpx" :name="item.id" class="d-1-checkbox" />
                  <img :src="item.src" class="d-1-img" />
                </div>
              </van-checkbox-group>
            </div>
          </div>
        </div>
        <van-uploader :disabled="upload">
          <van-submit-bar
            button-text="添加图片"
            @submit="onClickButton"
            safe-area-inset-bottom="false"
            class="van-submit-bar">
            <div class="d">
              <div class="d-1">
                <div @click="showPopup" class="d-1-1">
                  <span class="yfont y-yd"></span>
                </div>
                <div class="d-1-2">
                  移动
                </div>
              </div>
              <div class="d-2">
                <div class="d-2-1">
                  <span class="yfont y-sc"></span>
                </div>
                <div class="d-2-2">
                  删除
                </div>
              </div>
            </div>
          </van-submit-bar>
        </van-uploader>
      </div>
      <van-popup round position="bottom" custom-style="height:700rpx" :show="show" @close="onClose">
        <div class="gallery-popup">
          <div class="gallery-popup-r1">
            添加到文件夹
          </div>
          <div class="gallery-popup-r2">
            <div class="gallery-popup-folder" @click="onShowDialog" v-for="item in folderList" :key="index">
              <div class="gallery-folder-picture">
                <van-image width="88rpx"
                           height="88rpx" :src="'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=949549237,3507845745&fm=11&gp=0.jpg'" />
              </div>
              <div class="gallery-folder-detail">
                <div class="gallery-folder-folder">
                  {{item.folderName? '文件夹名称':'新建文件夹'}}
                </div>
                <div v-if="item.folderName" class="gallery-folder-name">
                  {{item.folderName}}
                </div>
              </div>
            </div>
          </div>
          <div class="gallery-popup-r3">
            <van-button custom-style="width:686rpx; height:88rpx; background-color:#eeeeee; border-radius:44rpx; font-size:28rpx; font-weight:bold;" type="default" @click="onClose">取消
            </van-button>
          </div>
        </div>
      </van-popup>
    </van-tab>
    <van-tab title="文件夹" name="2">
      <div class="gallery-checkbox-group">
        <van-checkbox-group :value="folder" @change="checkFolderChange($event)">
          <div class="gallery-tab-d" v-for="(item,index) in imgList" :key="index">
            <van-checkbox checked-color="#ff4064" icon-size="38rpx" :name="item.id" class="d-1-checkbox" />
            <img :src="item.src" class="d-2-img" />
            <div class="gallery-tab-2">
              相册名称
            </div>
            <div class="gallery-tab-3">
              {{item.folderName}}
            </div>
          </div>
        </van-checkbox-group>
      </div>
      <van-submit-bar
        button-text="添加文件夹"
        @submit="onClickButton"
        safe-area-inset-bottom="false"
        class="van-submit-bar">
        <div class="gallery-d">
          <div class="d-1">
            <div @click="onShowDialog" class="d-1-1">
              <span class="yfont y-xg"></span>
            </div>
            <div class="d-1-2">
              修改名称
            </div>
          </div>
          <div class="d-2">
            <div class="d-2-1">
              <span class="yfont y-sc"></span>
            </div>
            <div class="d-2-2">
              删除
            </div>
          </div>
        </div>
      </van-submit-bar>
      <van-dialog
        zIndex="200"
        use-slot
        title="重命名文件夹"
        :show="showDialog"
        show-cancel-button
        @close="onClose"
      >
        <van-cell-group>
          <van-field
            custom-style="border:1px"
            focus="true"
            :value="inputValue"
            @change="onChangeFolderName"
          />
        </van-cell-group>
      </van-dialog>
    </van-tab>
  </van-tabs>
</template>

<script>
  export default {
    data () {
      return {
        upload: true,
        inputValue: '文件夹',
        showDialog: false,
        show: false,
        active: '1',
        timeLine: [{
          id: 1, time: '2019年7月26日', imgList: [
            {id: '1', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=949549237,3507845745&fm=11&gp=0.jpg'},
            {id: '2', src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3910641899,3187940079&fm=26&gp=0.jpg'},
            {id: '3', src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4247833059,2940313440&fm=11&gp=0.jpg'},
            {id: '4', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1420829909,802073227&fm=26&gp=0.jpg'},
            {id: '5', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
            {id: '6', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
            {id: '7', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
            {id: '8', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'}
          ], picResult: [], isCheckAllPic: false
        },
          {
            id: 2, time: '2019年7月26日', imgList: [{id: '1', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=949549237,3507845745&fm=11&gp=0.jpg'},
              {id: '2', src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3910641899,3187940079&fm=26&gp=0.jpg'},
              {id: '3', src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4247833059,2940313440&fm=11&gp=0.jpg'},
              {id: '4', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1420829909,802073227&fm=26&gp=0.jpg'},
              {id: '5', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
              {id: '6', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
              {id: '7', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
              {id: '8', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'}
            ], picResult: [], isCheckAllPic: false
          },
          {
            id: 3, time: '2019年7月26日', imgList: [{id: '1', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=949549237,3507845745&fm=11&gp=0.jpg'},
              {id: '2', src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3910641899,3187940079&fm=26&gp=0.jpg'},
              {id: '3', src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4247833059,2940313440&fm=11&gp=0.jpg'},
              {id: '4', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1420829909,802073227&fm=26&gp=0.jpg'},
              {id: '5', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
              {id: '6', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
              {id: '7', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
              {id: '8', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'}
            ], picResult: [], isCheckAllPic: false
          },
          {
            id: 4, time: '2019年7月26日', imgList: [{id: '1', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=949549237,3507845745&fm=11&gp=0.jpg'},
              {id: '2', src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3910641899,3187940079&fm=26&gp=0.jpg'},
              {id: '3', src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4247833059,2940313440&fm=11&gp=0.jpg'},
              {id: '4', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1420829909,802073227&fm=26&gp=0.jpg'},
              {id: '5', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
              {id: '6', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
              {id: '7', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'},
              {id: '8', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3977678242,1831662565&fm=11&gp=0.jpg'}
            ], picResult: [], isCheckAllPic: false
          }
        ],
        imgList: [
          {id: '1', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=949549237,3507845745&fm=11&gp=0.jpg', folderName: '文件夹1'},
          {id: '2', src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3910641899,3187940079&fm=26&gp=0.jpg', folderName: '文件夹2'},
          {id: '3', src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4247833059,2940313440&fm=11&gp=0.jpg', folderName: '文件夹3'},
          {id: '4', src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1420829909,802073227&fm=26&gp=0.jpg', folderName: '文件夹4'}
        ],
        folderList: [
          {id: 1, folderName: ''},
          {id: 2, folderName: '文件夹2'},
          {id: 3, folderName: '文件夹2'}
        ],
        folder: []
      }
    },

    components: {},

    methods: {

      onChangeFolderName (event) {
        this.inputValue = event.mp.detail
      },

      onShowDialog () {
        console.log(13231)
        this.showDialog = true
      },

      onClickButton () {},

      onChange () {

      },

      showPopup () {
        this.show = true
      },

      onClose () {
        this.show = false
        this.showDialog = false
      },

      selectAll (index) {
        if (this.timeLine[index].picResult.length === this.timeLine[index].imgList.length) {
          this.timeLine[index].picResult = []
          this.timeLine[index].isCheckAllPic = false
        } else {
          this.timeLine[index].isCheckAllPic = true
          const picResult = this.timeLine[index].imgList.map(value => { return value.id })
          this.timeLine[index].picResult = picResult
        }
      },

      checkPicChange (index, e) {
        this.timeLine[index].picResult = e.mp.detail
        this.timeLine[index].isCheckAllPic = this.timeLine[index].picResult.length === this.timeLine[index].imgList.length
      },

      checkFolderChange (e) {
        console.log(e.mp.detail)
        this.folder = e.mp.detail
      }
    },

    mounted () {
    }
  }
</script>

<style lang="scss" scoped>

  .box {
    margin: 3% 2% 44px 3%;
  }

  .gallery-timeLine-title {
    display: flex;
    justify-content: space-between;
    margin-left: 8px;

    .gallery-timeLine-title-front {
      color: #505050;
      font-size: 14px;
      line-height: 21px;
      text-align: left;
    }

    .gallery-check-all {
      color: rgba(67, 67, 67, 1);
      background-color: rgba(238, 238, 238, 1);
      border-radius: 12px;
      font-size: 10px;
      line-height: 22px;
      width: 50px;
      text-align: center;
      margin-right: 8px;
    }
  }

  .van-checkbox-group {
    overflow: hidden;
  }

  .gallery-checkbox-group {
    padding: 10px;
    overflow: hidden;
  }

  .d-1 {
    position: relative;
    width: 31%;
    height: 30vw;
    float: left;
    margin: 1%;
  }

  .d-1-img {
    width: 100%;
    height: 100%
  }

  .d-1-checkbox {
    position: absolute;
    top: 14px;
    right: 14px;
  }

  .van-submit-bar {
    position: relative;
    padding: 0 3%;
    height: 44px;

    .d {
      /*width: 100%;*/
      position: absolute;
      left: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .d-1 {
        width: auto;
        height: 44px;
        display: flex;
        flex-direction: column;
        margin-left: 40px;

        .d-1-1 {

        }

        .d-1-2 {
          color: rgba(255, 64, 100, 1);
          font-size: 12px;
          line-height: 150%;
          text-align: left;

        }
      }

      .d-2 {
        display: flex;
        flex-direction: column;
        margin-left: 50px;

        .d-2-1 {

        }

        .d-2-2 {
          color: rgba(255, 64, 100, 1);
          font-size: 12px;
          line-height: 150%;
          text-align: left;
        }
      }
    }

  }

  .gallery-d {
    /*width: 100%;*/
    position: absolute;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .d-1 {
      text-align: center;
      width: 50px;
      height: 44px;
      display: flex;
      flex-direction: column;
      margin-left: 28px;

      .d-1-1 {

      }

      .d-1-2 {
        color: rgba(255, 64, 100, 1);
        font-size: 12px;
        line-height: 150%;
        text-align: left;

      }
    }

    .d-2 {
      text-align: center;
      display: flex;
      flex-direction: column;
      margin-left: 34px;

      .d-2-1 {

      }

      .d-2-2 {
        color: rgba(255, 64, 100, 1);
        font-size: 12px;
        line-height: 150%;
        text-align: left;
      }
    }
  }

  .gallery-popup {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding-bottom: 25px;
    box-sizing: border-box;

    .gallery-popup-r1 {
      margin-top: 17px;
      color: rgba(80, 80, 80, 1);
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      font-weight: bold;
    }

    .gallery-popup-r2 {
      overflow: auto;
      height: auto;
      flex: auto;

      .gallery-popup-folder {
        margin-top: 16px;
        margin-left: 16px;
        display: flex;

        .gallery-folder-picture {
          height: 44px;
          width: 44px;
          margin-right: 10px;
        }

        .gallery-folder-detail {
          display: flex;
          flex-direction: column;

          .gallery-folder-folder {
            color: rgba(51, 51, 51, 1);
            font-size: 14px;
            line-height: 21px;
            text-align: left;
            font-weight: bold;
            margin: auto 0;
          }

          .gallery-folder-name {
            color: rgba(153, 153, 153, 1);
            font-size: 12px;
            line-height: 18px;
            text-align: left;

          }
        }
      }
    }

    .gallery-popup-r3 {
      flex: none;
      height: 44px;
      align-items: center;
      text-align: center;
    }
  }

  .van-submit-bar-checkbox {
    left: 16px;
  }

  .gallery-tab-d {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 156px;
    float: left;
    padding: 1.5%;

    .d-2-img {
      margin-bottom: 3px;
      width: 107px;
      height: 107px;
      border-radius: 10px;
    }

    .gallery-tab-2 {
      margin-left: 6px;
      color: rgba(51, 51, 51, 1);
      font-size: 14px;
      line-height: 21px;
      text-align: left;
    }

    .gallery-tab-3 {
      margin-left: 6px;
      color: rgba(153, 153, 153, 1);
      font-size: 12px;
      line-height: 18px;
      text-align: left;
    }
  }

  van-submit-bar /deep/ .van-submit-bar__button {
    width: 200px;
  }
  van-submit-bar /deep/ .van-button {
    height: 44px;
    width: 200px;
  }
  van-submit-bar /deep/ .van-submit-bar__bar {
    height: 47px;
  }
  van-checkbox /deep/ .van-checkbox__label {
    font-size: 16px;
  }
  van-submit-bar /deep/ .van-button--normal {
    font-size: 14px;
  }

  van-submit-bar /deep/ .van-submit-bar__bar {
    padding: 0 16px;
  }

  .yfont {
    font-size: 24px;
    color: red;
  }

  van-tabs /deep/ .van-tab--active {
    color: black;
    font-weight: bold;
  }

</style>
