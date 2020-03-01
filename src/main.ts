import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import '@/assets/element-variables.scss'
// import 'element-ui/lib/theme-chalk/index.css';
import { get } from 'lodash'
import dayjs from 'dayjs'
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

Vue.filter('DayFormat', (date: any) => {
  return date ? dayjs(date).format('YYYY-MM-DD') : ''
})

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$get = get

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
