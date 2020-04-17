<template>
  <div class="page">
    <div class="body">
      <div class="panel">
        <van-field
          custom-style="background-color: transparent"
          label="姓名"
          :value="name"
          required
          clearable
          placeholder="收货人姓名"
          @change="changeName"
        />
        <van-field
          custom-style="background-color: transparent"
          label="电话"
          :value="name"
          required
          clearable
          placeholder="收货人手机号"
          @change="changeName"
        />
        <van-field
          custom-style="background-color: transparent"
          label="地区"
          :value="name"
          required
          clearable
          placeholder="选择省 / 市 / 区"
          @change="changeName"
        />
        <van-field
          custom-style="background-color: transparent"
          label="详细地址"
          :value="name"
          required
          clearable
          placeholder="街道门牌、楼层房间号等信息"
          @change="changeName"
        />
        <van-field
          custom-style="background-color: transparent"
          label="邮政编码"
          :value="name"
          required
          clearable
          placeholder="邮政编码"
          @change="changeName"
        />
        <van-field
          custom-style="background-color: transparent"
          label="设为默认收货地址"
          title-width="120px"
          :value="name"
          required
          clearable
          placeholder=" "
          :readonly="true"
          @change="changeName">
          <van-switch slot="button" size="24px" :checked="address.default" @change="setDefault" />
        </van-field>
      </div>

      <van-button
        custom-style="border-radius: 11px; margin: 32px 0 17px"
        color="#FF4064"
        size="large">保存
      </van-button>

      <!--      <van-button-->
      <!--        class="delete-btn"-->
      <!--        custom-style="border-radius: 11px;color: rgba(80, 80, 80, 1);font-size: 16px;"-->
      <!--        color="#FFFFFF"-->
      <!--        size="large">删除-->
      <!--      </van-button>-->
    </div>
  </div>
</template>




<script>
  export default {
    data () {
      return {
        address: {
          name: '',
          default: false
        }
      }
    },
    components: {},

    methods: {
      changeName () {
      },

      setDefault (val) {
        this.address.default = val.mp.detail
      }
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .page {
    color: rgba(80, 80, 80, 1);
    background-color: rgba(244, 244, 244, 1);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    box-sizing: border-box;
    min-height: 100%;
    padding-top: 16px;

    .body {
      width: 343px;
      margin: 0 auto;

      .panel {
        width: 100%;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 11px;
      }

    }
  }
</style>
