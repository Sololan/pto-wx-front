<template>
  <page-container>
    <div class="comment-page">
      <div class="comment-panel" v-for="(value, index) in 2" :key="index">
        <AlbumInfoB :album-info="albumInfo"></AlbumInfoB>

        <div class="rate">
          <div class="label">宝贝评价</div>
          <van-rate
            :value="rate"
            size="48rpx"
            icon="like"
            void-icon="like-o"
            @change="handleRateChange" />
        </div>

        <textarea v-model="comment" placeholder="请输入评价"></textarea>

        <van-uploader
          preview-size="208rpx"
          :file-list="fileList">
          <div class="upload-btn">
            <i class="yfont y-mjx"></i>
            <div>拍买家秀</div>
          </div>
        </van-uploader>
      </div>

    </div>
    <template slot="footer">
      <div class="footer">
        <van-button color="#ff4064">发布</van-button>
      </div>
    </template>
  </page-container>
</template>

<script>
  import PageContainer from '../../../../../components/common/page-container'
  import AlbumInfoB from '../../../../../components/common/album-info-b'

  export default {
    data () {
      return {
        albumInfo: {
          image: '/static/images/home-goods1.jpg',
          albumName: '自定义相册名称',
          name: '珍异皮册系列',
          size: '240*240mm'
        },
        rate: 5,
        comment: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        fileList: [
          {url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1'}
        ]
      }
    },
    components: {
      PageContainer,
      AlbumInfoB
    },

    methods: {
      handleRateChange (val) {
        this.rate = val.mp.detail
      }
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .comment-page {
    padding-bottom: 50px;

    /deep/ .page {
    }
  }

  .comment-panel {
    width: 343px;
    height: auto;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 11px;
    box-shadow: 4px 4px 6px 0px rgba(51, 51, 51, 0.05);

    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 16px;

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

      margin-bottom: 18px;
    }
  }

  .rate {
    margin: 12px 0 10px;
    display: flex;
    align-items: center;

    .label {
      width: 93px;
      color: rgba(80, 80, 80, 1);
      font-size: 14px;
      line-height: 150%;
    }
  }

  .upload-btn {
    width: 104px;
    height: 104px;
    border: #FF4064 dashed 1px;
    background-color: rgba(255, 64, 100, 0.05);
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
      border-radius: 11px;
      color: #FFFFFF;
      background-color: rgba(255, 64, 100, 1);
      font-size: 14px;
      line-height: 150%;
      font-weight: bold;
    }
  }
</style>
