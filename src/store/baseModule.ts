import { Notification, Message, Loading } from 'element-ui'
import { get, defaultsDeep, cloneDeep } from 'lodash'
import { StoreOptions, Store } from 'vuex'

import { AxiosPromise } from 'axios'

interface IStoreOpt<s> extends StoreOptions<s> {
  namespaced?: boolean
}
interface GenericIdentityFn<T> {
  (arg: T): T;
}
interface IRequest {
  query: (param: any) => AxiosPromise<any>,
  add: (param: any) => AxiosPromise<any>,
  remove: (ids: string[]) => AxiosPromise<any>,
  edit: (id: string, param: any) => AxiosPromise<any>
}
export interface IBaseState {
  rows: any[],
  sort: any[],
  loading: boolean,
  current: number,
  total: number,
  page_size: number
}

export default function (request: IRequest, option: IStoreOpt<any> = {}) {
  const baseModule = {
    namespaced: true,
    state: {
      rows: [{rid:0}],
      sort: [],
      loading: false,
      current: 1,
      total: 0,
      page_size: 20
    },
    mutations: {
      SET_COLUMNS(state: any, payload: any) {
        state.columns = payload
      },
      SET_ROWS(state: any, payload: any) {
        state.rows = payload
      },
      SET_SORT(state: any, payload: any) {
        state.sort = payload
      },
      SET_LOADING(state: any, payload: any) {
        state.loading = payload
      },
      SET_CURRENT(state: any, payload: any) {
        state.current = payload
      },
      SET_PAGE_SIZE(state: any, payload: any) {
        state.page_size = payload
      },
      SET_TOTAL(state: any, payload: any) {
        state.total = payload
      },
      RESET_ALL(state: any) {
        state.columns = []
        state.rows = []
        state.sort = []
        state.current = 1
        state.total = 0
        state.page_size = 20
      }
    },
    actions: {
      async COMMIT_QUERY({ state, commit }: any) {
        if(!request.query) {
          return
        }
        let param: any = {
          current: state.current,
          sorts: state.table_sort,
          size: state.page_size
        }
        commit('SET_LOADING', true)
        let res = await request.query(param).catch((err: any) => {
          Notification.error(`请求错误: ${err.message}`)
        }).finally(() => {
          commit('SET_LOADING', false)
        })
        if (res) {
          const { data } = res
          commit('SET_ROWS', get(data, 'rows', []))
          commit('SET_TOTAL', get(data, 'total', 0))
        }
      },
      async COMMIT_ADD({ dispatch }: any, param: any) {       
        let loading = Loading.service({
          fullscreen: true,
          lock: true
        })
        let resp = await request.add(param).catch((err: any) => {
          Notification.error(err.msg)
        })
        loading.close()
        if (resp) {
          Message.success('新增成功!')
          dispatch('COMMIT_QUERY')
          return true
        }
      },
      async COMMIT_EDIT({ dispatch }: any, param: any) {
        let loading = Loading.service({
          fullscreen: true,
          lock: true
        })
        let resp = await request.edit(param.id, param).catch((err: any) => {
          Notification.error(err.msg)
        })
        loading.close()
        if (resp) {
          Message.success('修改成功!')
          dispatch('COMMIT_QUERY')
          return true
        }
      },
      async COMMIT_REMOVE({ state, rootState, commit, dispatch }: any, param: any) {
        let loading = Loading.service({
          fullscreen: true,
          lock: true
        })
        let resp = await request.remove(param).catch((err: any) => {
          Notification.error(err.msg)
        })
        loading.close()
        if (resp) {
          Message.success('删除成功!')
          dispatch('COMMIT_QUERY')
          return true
        }
      }
    }
  }
  return defaultsDeep(baseModule, cloneDeep(option))
}