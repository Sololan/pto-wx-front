<template>
  <div class="card-title">
    <div class="title-icon"></div>
    <div class="title-text">{{title}}</div>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style scoped>
  .card-title {
    flex: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding: 0 5px;
    box-sizing: border-box;
  }

  .title-icon {
    flex: none;
    width: 4px;
    height: 18px;
    background-color: #68DFE3;
    border-radius: 2px;
    margin: 0 10px;
  }

  .title-text {
    flex: 1;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
