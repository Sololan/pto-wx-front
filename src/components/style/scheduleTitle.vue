<template>
  <div class="schedule-title">
    <div class="dark-background">
      <div class="title-background">
        <img class="title-before" src="/static/images/icon-dark.png">
        <div class="title-text">{{title}}</div>
        <img class="title-after" src="/static/images/icon-dark.png">
      </div>
    </div>
    <div class="light-background">
      <div class="title-background">
        <img class="title-before" src="/static/images/icon-light.png">
        <div class="title-text"></div>
        <img class="title-after" src="/static/images/icon-light.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style scoped>

  .schedule-title {
    flex: none;
    display: inline-block;
    position: relative;
    max-width: 100%;
  }

  .dark-background {
    padding-right: 4px;
  }

  .light-background {
    position: absolute;
    top: 4px;
    left: 4px;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  .title-background {
    flex: none;
    display: flex;
    align-items: center;
    height: 20px;
    position: relative;
    z-index: 1;
  }

  .title-before, .title-after {
    flex: none;
    width: 9.5px;
    height: 20px;
  }

  .title-before {
    transform: rotate(180deg);
  }

  .title-text {
    flex: none;
    width: calc(100% - 18px);
    height: 20px;
    line-height: 20px;
    padding: 0 1px;
    margin: 0 -1px;
    color: #fff;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: #4692C7;
  }

  .title-before {
    flex: none;
  }

  .light-background .title-background {
    flex: 1;
    width: 100%;
  }

  .light-background .title-text {
    flex: 1;
    background-color: #C3F2F4;
  }


</style>
