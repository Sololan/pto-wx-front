<template>
  <view class="container">
    <view class="header">
      <van-icon name="down" size="24px" class="header-icon"></van-icon>
      <view class="header-opr">
        <view class="header-opr-box">
          <span class="yfont y-cx"></span>
          <span style="font-size: 12px">撤销</span>
        </view>
        <view class="header-opr-box">
          <span class="yfont y-cx" style="transform: rotateY(180deg);"></span>
          <span style="font-size: 12px;">还原</span>
        </view>
      </view>
      <span style="font-size: 14px;margin-right: 13px">保存</span>
    </view>
    <view class="body">
      <view class="body-main">
        <view class="top-space"><button @click="ttt">123</button></view>
        <view class="middle-space" style="overflow: hidden">
          <!-- 按钮层-->
          <view v-for="(item,index) in picList" :class="{'dashed': item.isChoosen}"
                :style="{'left': item.firseX * 2 +'rpx','top': item.firseY * 2 + 'rpx',
                'width': item.width * 2 + 'rpx','height': item.height * 2 + 'rpx',
                'position': 'absolute','z-index': '101'}"
                @click="choosePic(item, index)"
                @touchmove="touchmove($event,item)" @touchstart="touchstart($event,item,index)" @touchend="touchend($event,item)">
          </view>
          <!-- 图片容器层 -->
          <view v-for="(item,index) in picList" :class="{'overflow': !item.isChoosen}" :style="{'position': 'absolute', 'top': item.firseY * 2 + 'rpx', 'left': item.firseX * 2 + 'rpx', 'width': item.width * 2 + 'rpx', 'height': item.height * 2 + 'rpx'}">
            <image :src="item.path"
                   :style="{'position': 'absolute','z-index': '99','top': item.offsetTop + 'px','left': item.offsetLeft + 'px','width': '100%','transform': 'scale('+item.enlarge+','+item.enlarge+')', 'transform-origin': 'top left'}"
                   mode="widthFix"/>
          </view>
          <!-- 图片容器层 -->
          <image v-if="template != ''" :src="template.path" style="position: relative;width: 100%;z-index: 100" mode="widthFix" :class="{'opa': template.opacity}" @click="clickTemplate" />
        </view>
        <view class="buttom-space" />
      </view>
      <view class="body-page"><span style="font-size: 12px;color: rgba(153, 153, 153, 1);">第1页</span></view>
    </view>
    <view class="footer">
      <view class="footer-box" @click="showTemplate">
        <span class="yfont y-mb" />
        <span style="font-size: 12px">模板</span>
      </view>
      <view class="footer-box">
        <span class="yfont y-wb" />
        <span style="font-size: 12px">文本</span>
      </view>
    </view>
    <view class="pop" v-if="flag.popFlag">
      <image v-for="(item,index) in templateList" class="pop-img" :src="item.path" @click="chooseTemplate(item)" mode="heightFix" />
    </view>
    <view v-if="flag.sliderFlag" class="slider-panel">
      <van-slider class="slider" v-model="slider.enlarge" @change="bigSliderChange($event.mp.detail)" @drag="bigSliderChange($event.mp.detail.value)" />
      <van-slider class="slider" v-model="slider.enlarge" @change="bigSliderChange($event.mp.detail)" @drag="bigSliderChange($event.mp.detail.value)" />
    </view>
  </view>
</template>

<script>
  import wx from '../../utils/native'

  export default {
    data () {
      return {
        originTop: 0,
        originLeft: 0,
        originPicTop: 0,
        originPicLeft: 0,
        slider: {
          enlarge: 1,
          index: 1
        },
        picList: [
          {
            path: '',
            firseX: 117,
            firseY: 135,
            secondX: 174,
            secondY: 192,
            width: 58,
            height: 58,
            offsetTop: 0,
            offsetLeft: 0,
            enlarge: 1,
            isChoosen: false
          },
          {
            path: '',
            firseX: 172,
            firseY: 106,
            secondX: 174,
            secondY: 192,
            width: 58,
            height: 58,
            offsetTop: 0,
            offsetLeft: 0,
            enlarge: 1,
            isChoosen: false
          },
          {
            path: '',
            firseX: 235,
            firseY: 134,
            secondX: 174,
            secondY: 192,
            width: 58,
            height: 58,
            offsetTop: 0,
            offsetLeft: 0,
            enlarge: 1,
            isChoosen: false
          }
        ],
        flag: {
          popFlag: false,
          sliderFlag: false
        },
        template: {
          path: '/static/images/template.png',
          opacity: false
        },
        templateList: [
          {
            path: '/static/images/template.png',
            picList: [
              {
                path: '',
                firseX: 117,
                firseY: 135,
                secondX: 174,
                secondY: 192,
                width: 58,
                height: 58,
                offsetTop: 0,
                offsetLeft: 0,
                isChoosen: false
              },
              {
                path: '',
                firseX: 172,
                firseY: 106,
                secondX: 174,
                secondY: 192,
                width: 58,
                height: 58,
                offsetTop: 0,
                offsetLeft: 0,
                isChoosen: false
              },
              {
                path: '',
                firseX: 235,
                firseY: 134,
                secondX: 174,
                secondY: 192,
                width: 58,
                height: 58,
                offsetTop: 0,
                offsetLeft: 0,
                isChoosen: false
              }
            ]
          },
          {
            path: '/static/images/template.png',
            picList: [
              {
                path: '',
                firseX: 117,
                firseY: 135,
                secondX: 174,
                secondY: 192,
                width: 58,
                height: 58,
                offsetTop: 0,
                offsetLeft: 0,
                isChoosen: false
              },
              {
                path: '',
                firseX: 172,
                firseY: 106,
                secondX: 174,
                secondY: 192,
                width: 58,
                height: 58,
                offsetTop: 0,
                offsetLeft: 0,
                isChoosen: false
              },
              {
                path: '',
                firseX: 235,
                firseY: 134,
                secondX: 174,
                secondY: 192,
                width: 58,
                height: 58,
                offsetTop: 0,
                offsetLeft: 0,
                isChoosen: false
              }
            ]
          },
          {
            path: '/static/images/template.png',
            picList: [
              {
                path: '',
                firseX: 117,
                firseY: 135,
                secondX: 174,
                secondY: 192,
                width: 58,
                height: 58,
                offsetTop: 0,
                offsetLeft: 0,
                overflow: true
              },
              {
                path: '',
                firseX: 172,
                firseY: 106,
                secondX: 174,
                secondY: 192,
                width: 58,
                height: 58,
                offsetTop: 0,
                offsetLeft: 0,
                overflow: true
              },
              {
                path: '',
                firseX: 235,
                firseY: 134,
                secondX: 174,
                secondY: 192,
                width: 58,
                height: 58,
                offsetTop: 0,
                offsetLeft: 0,
                overflow: true
              }
            ]
          },
          {
            path: '/static/images/template.png',
            picList: [
              {
                path: '',
                firseX: 118,
                firseY: 136,
                secondX: 174,
                secondY: 192,
                width: 56,
                height: 56
              }
            ]
          }
        ]
      }
    },
    components: {},

    methods: {
      bigSliderChange (value) {
        console.log(value)
        this.picList[this.slider.index].enlarge = 1 + value * 0.05
      },
      showTemplate() {
        this.flag.popFlag = true
      },
      clickTemplate() {
        this.flag.popFlag = false
        this.flag.sliderFlag = false
      },
      chooseTemplate(e) {
        this.template.path = e.path;
        this.picList = e.picList;
      },
      choosePic(item, index) {
        // const template = JSON.parse(JSON.stringify(this.template))
        if (!item.path) {
          wx.chooseImage(1, ['compressed'], ['album', 'camera'])
          .then((res) => {
            item.path = res.tempFilePaths[0]
            // template.picList[index].path = res.tempFilePaths[0]
            // this.template = template
          })
        }
      },
      touchstart(e,item,index) {
        this.originPicTop = item.offsetTop
        this.originPicLeft = item.offsetLeft
        this.originTop = e.clientY
        this.originLeft = e.clientX
        this.template.opacity = true
        item.isChoosen = true
        this.flag.sliderFlag = true
        // slider绑定为当前图片
        this.slider.index = index
        console.log(item.enlarge)
        this.slider.enlarge = (item.enlarge - 1) / 0.05
      },
      touchmove(e,item) {
        item.offsetTop = this.originPicTop + e.clientY - this.originTop
        item.offsetLeft = this.originPicLeft  + e.clientX - this.originLeft
      },
      touchend(e,item) {
        this.template.opacity = false
        item.isChoosen = false
      }
    },

    mounted() {
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-wrap: wrap;
  }
  .header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: none;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: white;
  }
  .header > .header-icon {
    margin-left: 16px;
    transform: rotate(90deg);
  }
  .header > .header-opr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
  }
  .header > .header-opr > .header-opr-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .body {
    flex: auto;
    height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .body-main {
    margin-top: 16px;
    flex: auto;
    width: 343px;
    background-color: rgba(227, 227, 227, 1);
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
  }
  .body-page {
    flex: none;
    margin-top: 11px;
    margin-bottom: 10px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 70px;
    flex: none;
  }
  .footer-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: white;
  }

  .pop {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    position: absolute;
    bottom: 0px;
    z-index: 1000;
    width: 100%;
    height: 120px;
    background-color: white;
    display: block;
  }

  .pop-img {
    margin: 10px 2.5px;
    height: 100px;
  }

  .top-space {
    flex: auto;
  }

  .buttom-space {
    flex: auto;
  }

  .middle-space {
    flex: none;
    position: relative;
  }

  .opa {
    opacity: 0.4;
  }

  .overflow {
    overflow: hidden;
  }

  .dashed {
    border: 1px dashed red;
  }

  .slider-panel {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0px;
    z-index: 1000;
    width: 100%;
    height: 120px;
    background-color: white;
  }

  .slider {
    height: 100%;
    margin-top: 10px;
  }
</style>
