<template>
  <page-container>
    <div class="after-sale-panel">
      <panel
        :left-title="'需补差价'"
        :right-title="'¥ ' + priceDifference"
        :with-divider="false"
        :with-title-border="false"></panel>
    </div>

    <panel
      :left-title="albumLeftTitle"
      :right-title="albumRightTitle">
      <template slot="body">
        <album-info :album-info="albumInfo"></album-info>
        <div class="album-row refund-reason">
          <div class="label">售后原因：</div>
          <div class="reason">文本文本文本文本文本文本文本文本文本文本文本文本文本</div>
        </div>
        <div class="album-row">
          <div class="label">需补差价：</div>
          <div>¥ 35.50</div>
        </div>
        <div class="album-row">
          <div class="label">申请时间：</div>
          <div>2020-03-05 12:12:13</div>
        </div>
        <div class="album-row">
          <div class="label">售后编号：</div>
          <div>156564562156542</div>
        </div>
        <div class="album-row">
          <div class="label">处理时间：</div>
          <div>2020-03-05 12:12:13</div>
        </div>
      </template>
    </panel>

    <template slot="footer">
      <div class="footer">
        <van-button color="#ff4064">补差价</van-button>
      </div>
    </template>
  </page-container>
</template>

<script>
  import PageContainer from '../../../../components/common/page-container'
  import panel from '../../../../components/common/panel'
  import AlbumInfo from '../../../../components/common/album-info'

  export default {
    data () {
      return {
        priceDifference: '35.50',
        albumLeftTitle: '自定义相册名称',
        albumRightTitle: '已经处理',
        albumInfo: {
          image: '/static/images/home-goods1.jpg',
          name: '珍异皮册系列',
          size: '240*240mm',
          price: '30.50'
        }
      }
    },
    components: {
      PageContainer,
      panel,
      AlbumInfo
    },

    methods: {},

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .after-sale-panel {
    margin-bottom: 16px;

    /deep/ .left-title {
      color: rgba(51, 51, 51, 1) !important;
      font-size: 14px !important;
      font-weight: normal !important;
    }

    /deep/ .right-title {
      font-size: 14px !important;
    }
  }

  .album-row {
    color: rgba(153, 153, 153, 1);
    font-size: 14px;
    line-height: 150%;

    margin-top: 6px;
    display: flex;

    &.refund-reason {
      margin-top: 16px;
    }

    .label {
      width: 70px;
      flex: none;
    }

    .reason {
      display: flex;
      flex-wrap: wrap;
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
