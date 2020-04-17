<template>
  <div class="modal-box" v-if="showModal">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">用户隐私政策概要</div>
      </div>
      <div class="modal-body">
        <div class="modal-scroll">
          <div class="policy-box">
            <div class="policy-block">
              <p class="policy-p">欢迎您使用嘉空间！</p>
            </div>
            <div class="policy-block">
              <p class="policy-p">1.我们将通过《<span
                class="link-text" @click="tapPrivacyPolicy()">嘉空间隐私保护协议</span>》和来《<span
                class="link-text" @click="tapUserPolicy()">嘉空间用户协议</span>》帮助您了解我们收集、使用、存储和共享个人信息的情况，以及你所享有的权利。</p>
              <p class="policy-p">2.未经您的再次同意，我们不会将上述信息用于您未授权的其他用途或目的。</p>
            </div>
            <div class="policy-block">
              <p class="policy-p">如您同意，请点击“同意”开始接受我们的服务。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer" @click="">
        <slot name="footer">
          <navigator class="button" open-type="exit" target="miniProgram">不同意</navigator>
          <button type="button" class="button button-confirm" @click="tapConfirm">同意</button>
        </slot>
      </div>
    </div>
    <div class="modal-mask"></div>
  </div>
</template>

<script>
  import {PolicyType} from '../../utils/constant'

  export default {
    props: ['value'],
    computed: {
      showModal: {
        get () {
          return this.value
        },
        set (v) {
          this.$emit('input', v)
        }
      }
    },
    methods: {
      tapPrivacyPolicy () {
        this.tapPolicy(PolicyType.Privacy)
      },
      tapUserPolicy () {
        this.tapPolicy(PolicyType.User)
      },
      tapPolicy (policyType) {
        // 进入政策详情页
        this.$native.navigateTo(`pages/home/agree-detail/main?type=${policyType}`)
      },
      tapConfirm () {
        // 进入登录页
        this.$native.reLaunch('/pages/common/login/main')
      }
    }
  }
</script>

<style scoped>
  .policy-block + .policy-block {
    margin-top: 15px;
  }

  .policy-p {
    font-size: 14px;
    line-height: 20px;
  }
</style>
