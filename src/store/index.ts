import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

interface IRoute {
  path: string,
  name: string,
  title: string
}
const state: any = {
  routeTabs: [
    {
      path: '/home',
      name: 'home',
      title: '首页',
    }
  ],
  is_signed: false,
  is_upload: false,
}
const store = new Vuex.Store({

  modules,
  state,
  getters: {},
  mutations: {
    SET_ROUTE_TABS(state, payload) {
      state.routeTabs = payload
    },
    SET_IS_SIGNED(state, payload) {
      state.is_signed = payload
    },
    SET_IS_UPLOAD(state, payload) {
      state.is_upload = payload
    }
  },
  actions: {}
})
export default store

// export default new Vuex.Store({
//   state: {
//     routeTabs: []
//   },
//   mutations: {},
//   actions: {},
//   getters: {},
//   modules
// })
