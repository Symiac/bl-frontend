import Vue from 'vue'
import Router from 'vue-router'
//import Menu01 from './menus/menu_01'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/Index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: '首页',
            icon: 'el-icon-house',
          },
          component: () => import('@/views/home/Index.vue')
        },
        {
          path: '/01',
          name: '01',
          meta: {
            title: '生产通知管理',
            icon: '',
          },
          component: () => import('@/views/01/a05/Index.vue')
        },
        {
          path: '/02',
          name: '02',
          meta: {
            title: '工艺工时设计',
            icon: '',
          },
      
        },
        {
          path: '/bi',
          name: 'biindex',
          meta: {
            title: '管理',
            icon: '',
          },
          component: () => import('@/views/BI/index.vue')
        },
      ]
    }
  ]
})
