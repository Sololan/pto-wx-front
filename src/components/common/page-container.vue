<template>
  <div class="page">
    <div class="body">
      <slot />
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
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
    min-height: 100%;
    padding-top: 16px;

    .body {
      width: 343px;
      margin: 0 auto;
    }
  }
</style>
