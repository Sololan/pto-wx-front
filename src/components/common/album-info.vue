<template>
  <div class="album">
    <img :src="albumInfo.image" alt="">
    <div class="album-info">
      <div class="album-description">
        <div class="name">【{{albumInfo.name}}】</div>
        <div>size：{{albumInfo.size}}</div>
      </div>
      <div>¥ {{albumInfo.price}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      albumInfo: {
        default: {
          image: '',
          name: '',
          size: '',
          price: ''
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
      flex: none;
      width: 120px;
      height: 51px;
      border-radius: 11px;
      box-shadow: 4px 4px 6px 0 rgba(51, 51, 51, 0.05);

      margin-right: 8px;
    }

    .album-info {
      color: rgba(51, 51, 51, 1);
      font-size: 12px;
      line-height: 150%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .album-description {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .name {
          margin-left: -7px;
        }
      }

    }
  }
</style>
