<template>
  <div class="calendar-box">
    <div class="calendar-header">
      <img v-if="currentMonth" class="prev-month" @click="tapGoPrev" src="/static/images/arrow-left.png">
      <div class="current-month">{{currentMonth}}</div>
      <img v-if="currentMonth" class="next-month" @click="tapGoNext" src="/static/images/arrow-right.png">
    </div>
    <div class="calendar-body">
      <div class="date-list">
        <div class="date-item" v-for="(weekInfo, index) in weekList" :key="index">
          <div class="date-info week-info">{{weekInfo}}</div>
        </div>
      </div>
      <div class="date-list">
        <div class="date-item" v-for="(dateInfo, index) in dateList" :key="index">
          <div class="date-inner" v-if="dateInfo">
            <div class="date-info" @click="switchDate(dateInfo.fullDate)" :class="{
              'today': today === dateInfo.fullDate,
             'current-date': currentDate === dateInfo.fullDate}">{{dateInfo.date}}
            </div>
            <div class="date-point" v-if="points" :class="{
              'point-blue': points[dateInfo.fullDate] === true,
              'point-red': points[dateInfo.fullDate] === false
            }"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="calendar-footer"></div>
  </div>
</template>

<script>
  export default {
    props: ['points'],
    data () {
      return {
        today: '',
        currentDate: '',
        currentMonth: '',
        monthDays: null,
        dateList: [],
        weekList: ['日', '一', '二', '三', '四', '五', '六']
      }
    },
    computed: {},
    methods: {
      switchMonth (date) {
        if (!date) return
        this.currentMonth = this.$utils.formatTime(date, 'yyyy/MM')
        // 获取1号是周几，并计算补齐空格
        const week = date.getDay()
        const dateList = week ? new Array(date.getDay()).join(',').split(',') : []
        // 日期移动到本月最后一天
        date.setMonth(date.getMonth() + 1)
        date.setDate(date.getDate() - 1)
        // 获取本月天数
        this.monthDays = date.getDate()
        // 获取当前选中日期
        const tempDate = Math.min(new Date(this.currentDate).getDate(), this.monthDays)
        this.switchDate(this.$utils.formatTime(date, `yyyy-MM-${this.$utils.formatNumber(tempDate)}`))
        // 生成当月日期数据
        date.setDate(1)
        for (let i = 0; i < this.monthDays; i++) {
          dateList.push({
            fullDate: this.$utils.formatTime(date, 'yyyy-MM-dd'),
            date: date.getDate()
          })
          date.setDate(date.getDate() + 1)
        }
        this.dateList = dateList
      },
      switchDate (date) {
        this.currentDate = date
        this.$emit('change', {
          currentDate: date,
          firstDate: this.$utils.formatTime(date, 'yyyy-MM-01'),
          lastDate: this.$utils.formatTime(date, `yyyy-MM-${this.$utils.formatNumber(this.monthDays)}`)
        })
      },
      tapGoPrev () {
        if (!this.currentDate) return
        const date = new Date(this.$utils.formatTime(this.currentDate, 'yyyy-MM-01'))
        date.setMonth(date.getMonth() - 1)
        this.switchMonth(date)
      },
      tapGoNext () {
        if (!this.currentDate) return
        const date = new Date(this.$utils.formatTime(this.currentDate, 'yyyy-MM-01'))
        date.setMonth(date.getMonth() + 1)
        this.switchMonth(date)
      }
    },
    onReady () {
      const today = new Date()
      const todayStr = this.$utils.formatTime(today, 'yyyy-MM-dd')
      this.today = todayStr
      this.currentDate = todayStr
      this.switchMonth(new Date(this.$utils.formatTime(today, 'yyyy-MM-01')))
    }
  }
</script>

<style scoped>
  .calendar-box {
    flex: none;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    margin: 2px 0;
  }

  .prev-month, .next-month {
    flex: none;
    width: 10px;
    height: 15px;
    padding: 10px;
  }

  .current-month {
    flex: 1;
    text-align: center;
    color: #000;
    font-size: 18px;
    font-weight: bold;
  }

  .date-list {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
  }

  .date-list + .date-list {
    height: 246px;
  }

  .date-item {
    flex: none;
    width: 14.2857143%;
    height: 41px;
  }

  .date-info {
    width: 30px;
    height: 30px;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
  }

  .week-info {
    color: #68DFE3;
    font-weight: normal;
  }

  .today {
    background-color: #D4FEFF;
  }

  .current-date {
    color: #fff;
    background-color: #68DFE3;
  }

  .date-point {
    display: none;
    margin: 2px auto;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .point-blue {
    display: block;
    background-color: #4692C7;
  }

  .point-red {
    display: block;
    background-color: #E64340;
  }

  .calendar-footer {
    margin: 10px auto 0;
    width: 30px;
    height: 4px;
    background-color: #68DFE3;
    border-radius: 2px;
  }
</style>
