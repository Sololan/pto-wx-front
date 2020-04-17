<template>
  <div class="album">
    <img :src="albumInfo.image" alt="">
    <div class="item-info">
      <div class="album-name">{{albumInfo.albumName}}</div>
      <div class="album-description">
        <div class="name">【{{albumInfo.name}}】</div>
        <div>size：{{albumInfo.size}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      albumInfo: {
        default: {
          image: '',
          albumName: '',
          name: '',
          size: ''
        }
      }
    },
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
  .album {
    display: flex;

    img {
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

      .album-description {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        color: rgba(153, 153, 153, 1);
        font-size: 12px;
        line-height: 150%;

        .name {
          margin-left: -7px;
        }
      }
    }

  }
</style>
