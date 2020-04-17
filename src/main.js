import Vue from 'vue'
import App from './App'
import './style/stylesheet.css'
import './style/global.css'
import './style/animate.min.css'
import NativeUtil from './utils/native'
import Utils from './utils/utils'
import StoreUtil from './utils/store'
import HttpUtil from './utils/http'

Vue.config.productionTip = false

Vue.prototype.$native = NativeUtil
Vue.prototype.$utils = Utils
Vue.prototype.$store = StoreUtil
Vue.prototype.$http = HttpUtil

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
