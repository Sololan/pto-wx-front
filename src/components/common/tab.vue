<template>
  <div class="tab-box">
    <div class="tab-item" @click="handleChange(tab.value)" v-for="tab in tabs" :key="tab.value"
         :class="{'tab-item-active': current === tab.value}">
      <div class="tab-item-inner">
        {{tab.name}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['tabs', 'active', 'left'],
    data () {
      return {}
    },
    computed: {
      current: {
        get () {
          return this.active
        },
        set (active) {
          this.$emit('update:active', active)
        }
      },
      turnLeft: {
        get () {
          return this.left
        },
        set (left) {
          this.$emit('update:left', left)
        }
      }
    },
    methods: {
      handleChange (current) {
        if (current === this.current) {
          return
        }
        const oldIndex = this.tabs.findIndex(e => e.value === this.current)
        const newIndex = this.tabs.findIndex(e => e.value === current)
        this.turnLeft = newIndex < oldIndex
        this.current = current
        this.$emit('change', current)
      }
    },
    onReady () {
    }
  }
</script>

<style scoped>
  .tab-box {
    display: flex;
  }

  .tab-item {
    flex: 1;
    height: 44px;
    text-align: center;
  }

  .tab-item-inner {
    position: relative;
    display: inline-flex;
    color: #999;
    font-size: 14px;
    height: 100%;
    align-items: center;
  }

  .tab-item-active > .tab-item-inner {
    color: #333;
    font-weight: bold;
  }

  .tab-item-active > .tab-item-inner::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #FF4064;
  }

</style>
