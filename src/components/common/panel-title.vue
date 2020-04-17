<template>
  <div class="panel">
    <div v-if="withTitle" class="title" :style="{'--title-border-width': titleBorderWidth}">
      <div class="left-title">{{leftTitle}}</div>
      <div class="right-title">{{rightTitle}}</div>
    </div>
    <div v-if="withDivider" class="title-border"></div>
  </div>
</template>

<script>
  export default {
    props: {
      withTitle: {
        type: Boolean,
        default: true
      },
      withTitleBorder: {
        type: Boolean,
        default: true
      },
      leftTitle: String,
      rightTitle: String,
      withDivider: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {}
    },
    components: {},

    computed: {
      titleBorderWidth: function () {
        return this.withTitleBorder ? '6rpx' : '0'
      }
    },

    methods: {},

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .panel {
    width: 100%;
    height: auto;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      &::before {
        width: var(--title-border-width);
        height: 16px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        margin: auto 0;

        content: '';
        background-color: rgba(255, 64, 100, 1);
      }

      .left-title {
        color: #505050;
        font-size: 16px;
        line-height: 150%;
        font-weight: bold;
      }

      .right-title {
        color: rgba(255, 64, 100, 1);
        font-size: 12px;
        line-height: 150%;
      }
    }

    .title-border {
      width: 100%;
      height: 1px;
      background-color: rgba(244, 244, 244, 1);

      margin: 8px 0 10px;
    }
  }
</style>
