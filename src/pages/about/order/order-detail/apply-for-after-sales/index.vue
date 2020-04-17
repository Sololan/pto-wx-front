<template>
  <div class="page">
    <div class="body">
      <div class="panel item-panel">
        <img class="item-img" :src="item.image" alt="">
        <div class="item-info">
          <div class="album-name">{{item.albumName}}</div>
          <div class="item-name">【{{item.itemName}}】 size：{{item.size}}</div>
        </div>
      </div>

      <div class="panel reason-panel">
        <div class="panel-title">售后原因</div>
        <textarea v-model="reason" placeholder="请输入售后原因"></textarea>
        <div class="reason-input"></div>
      </div>

      <div class="panel upload-panel">
        <div class="panel-title">上传凭证</div>
        <van-uploader
          preview-size="208rpx"
          :file-list="fileList">
          <div class="upload-btn">
            <i class="yfont y-shpz"></i>
            <div>上传凭证</div>
            <div>(最多三张)</div>
          </div>
        </van-uploader>
      </div>
    </div>

    <div class="footer">
      <van-button color="#ff4064">提交</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        item: {
          image: '/static/images/home-goods1.jpg',
          albumName: '自定义相册名称',
          itemName: '珍异皮册系列',
          size: '240*240mm'
        },
        reason: '售后原因',
        fileList: [
          {url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1'}
        ]
      }
    },
    components: {},

    methods: {},

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .page {
    background-color: rgba(244, 244, 244, 1);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    box-sizing: border-box;
    height: 100%;
    padding-top: 16px;

    .body {
      width: 343px;
      margin: 0 auto;
      padding-bottom: 66px;
    }

    .footer {
      position: fixed;
      bottom: 0;
      z-index: 2;
      width: 100%;
      height: 50px;

      background-color: rgba(255, 255, 255, 1);

      display: flex;
      align-items: center;
      justify-content: center;

      /deep/ .van-button {
        width: 343px;
        height: 44px;
        color: #FFFFFF;
        background-color: rgba(255, 64, 100, 1);
        border-radius: 11px;
        font-size: 14px;
        line-height: 150%;
        font-weight: bold;
      }
    }
  }

  .panel {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 11px;
    font-size: 14px;
    line-height: 150%;
    box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);

    box-sizing: border-box;
    padding: 10px 8px;

    .panel-title {
      color: rgba(51, 51, 51, 1);
      font-size: 16px;
      line-height: 150%;
      margin-bottom: 10px;
    }
  }

  .item-panel {
    min-height: 71px;

    display: flex;

    .item-img {
      width: 120px;
      height: 51px;
      border-radius: 11px;
      box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);
      flex: none;
    }

    .item-info {
      margin-left: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .album-name {
        color: rgba(80, 80, 80, 1);
        font-size: 16px;
        line-height: 150%;
        font-weight: bold;
      }

      .item-name {
        margin-left: -7px;

        color: rgba(153, 153, 153, 1);
        font-size: 12px;
        line-height: 150%;
      }
    }
  }

  .reason-panel {
    min-height: 158px;
    margin: 16px 0;

    textarea {
      width: 100%;
      height: 104px;
      color: rgba(153, 153, 153, 1);
      background-color: rgba(243, 243, 243, 1);
      border-radius: 11px;

      box-sizing: border-box;
      padding: 10px;

      font-size: 12px;
      line-height: 150%;
    }
  }

  .upload-panel {
    min-height: 155px;

    .uploader {
      width: 104px;
      height: 104px;
    }

    .upload-btn {
      width: 104px;
      height: 104px;
      border: #333 dashed 1px;
      border-radius: 4px;
      color: rgba(51, 51, 51, 1);
      font-size: 12px;
      line-height: 150%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      i {
        font-size: 36px;
        margin-bottom: 10px;
      }
    }
  }
</style>
