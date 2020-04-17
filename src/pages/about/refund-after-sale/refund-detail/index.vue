<template>
  <div class="page">
    <div class="body">

      <div class="refund-price-panel">
        <panel
          :left-title="amountLeftTitle"
          :right-title="'¥ ' + refundAmount.total"
          :with-title-border="false">
          <template slot="body">
            <div class="row">
              <div>退回运费</div>
              <div>¥ 10.00</div>
            </div>
            <div class="row return-coupon">
              <div>退回优惠券</div>
              <div>¥ 5.00</div>
            </div>
          </template>
        </panel>
      </div>

      <panel
        :left-title="albumLeftTitle"
        :right-title="albumRightTitle">
        <template slot="body">
          <album-info :album-info="albumInfo"></album-info>
          <div class="album-row refund-reason">
            <div class="label">退款原因：</div>
            <div class="reason">文本文本文本文本文本文本文本文本文本文本文本文本文本</div>
          </div>
          <div class="album-row">
            <div class="label">退款金额：</div>
            <div>¥ 35.50</div>
          </div>
          <div class="album-row">
            <div class="label">申请时间：</div>
            <div>2020-03-05 12:12:13</div>
          </div>
          <div class="album-row">
            <div class="label">退款编号：</div>
            <div>156564562156542</div>
          </div>
          <div class="album-row">
            <div class="label">退款时间：</div>
            <div>2020-03-05 12:12:13</div>
          </div>
        </template>
      </panel>

    </div>
  </div>

</template>

<script>
  import PageContainer from '../../../../components/common/page-container'
  import panel from '../../../../components/common/panel'
  import AlbumInfo from '../../../../components/common/album-info'

  export default {
    data () {
      return {
        amountLeftTitle: '退款总金额',
        amountRightTitle: '¥ ',
        refundAmount: {
          total: '35.50'
        },
        albumLeftTitle: '自定义相册名称',
        albumRightTitle: '退款成功',
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
  .page {
    background-color: rgba(244, 244, 244, 1);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    box-sizing: border-box;
    min-height: 100%;
    padding-top: 16px;

    .body {
      width: 343px;
      margin: 0 auto;
    }
  }

  .refund-price-panel {
    margin-bottom: 16px;

    /deep/ .left-title {
      color: rgba(51, 51, 51, 1) !important;
      font-size: 14px !important;
      font-weight: normal !important;
    }

    /deep/ .right-title {
      font-size: 14px !important;
    }

    .row {
      display: flex;
      justify-content: space-between;

      color: rgba(51, 51, 51, 1);
      font-size: 14px;
      line-height: 150%;
    }

    .return-coupon {
      margin-top: 6px;
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

</style>
