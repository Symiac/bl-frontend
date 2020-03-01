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
          component: () => import('@/views/01/Index.vue')
        },
        {
          path: '/02',
          name: '02',
          meta: {
            title: '工艺工时设计',
            icon: '',
          },
          component: () => import('@/views/02/Index.vue')
        },
        {
          path: '/03',
          name: '03',
          meta: {
            title: '生产派工管理',
            icon: '',
          },
          component: () => import('@/views/03/Index.vue')
        },
        {
          path: '/bi1',
          name: 'biindex',
          meta: {
            title: 'bi首页',
            icon: '',
          },
          component: () => import('@/views/BI/index.vue')
        },{
          path: '/bi2',
          name: 'equipment',
          meta: {
            title: '设备报表',
            icon: '',
          },
          component: () => import('@/views/BI/equipment.vue')
        },{
          path: '/bi3',
          name: 'quality',
          meta: {
            title: '质量报表',
            icon: '',
          },
          component: () => import('@/views/BI/quality.vue')
        },{
          path: '/bi4',
          name: 'salary',
          meta: {
            title: '报表工资',
            icon: '',
          },
          component: () => import('@/views/BI/salary.vue')
        },
        {
          path: '/bi5',
          name: 'salary_all',
          meta: {
            title: '报表工资(公司)',
            icon: '',
          },
          component: () => import('@/views/BI/salary_all.vue')
        },
      ]
    }
  ]
})
