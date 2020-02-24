import basicModule from '@/store/baseModule'
import { getRows } from '@/api/mock/a10'
// interface IStateA01 {
//   count: number,
//   table_data: number[]
// }
// const state: IStateA01 = {
//   count: 10,
//   table_data: [1, 2, 3]
// }

// const a01 = {
//   namespaced: true,
//   state,
//   mutations: {},
//   actions: {}
// }
// export default a01


const request = {
  query: getRows,
  add: getRows,
  edit: getRows,
  remove: getRows
}

export default <any>basicModule(request, {
  state: {
    columns: [
      {
        index: 0,
        prop: 'name',
        label: '软件名称',
        align: 'left',
        width: '300',
        fixed: false
      },
      {
        index: 1,
        prop: 'state',
        label: '状态',
        align: 'left',
        width: '100',
        fixed: false
      },
      {
        index: 2,
        label: '软件类别',
        align: 'center',
        width: '240',
        children: [
          {
            index: 21,
            prop: 'category1',
            label: '类目一名称',
            align: 'center',
            width: '120'
          },
          {
            index: 22,
            prop: 'category2',
            label: '类目二名称',
            align: 'center',
            width: '120'
          }
        ]
      },
      {
        index: 3,
        prop: 'variety',
        label: '软件品种名称',
        sortable: true,
        align: 'center',
        width: '160'
      },
      {
        index: 4,
        label: '软件规格',
        align: 'center',
        width: '200',
        children: [
          {
            index: 41,
            prop: 'configuration',
            label: '功能配置',
            align: 'left',
            width: '100'
          },
          {
            index: 42,
            prop: 'version',
            label: '版本',
            align: 'left',
            width: '100'
          }
        ]
      },
      {
        index: 5,
        prop: 'authorization',
        label: '授权方式',
        sortable: false,
        align: 'center',
        width: '200',
      },
      {
        index: 6,
        prop: 'manufacturer',
        label: '生产厂商',
        sortable: true,
        align: 'center',
        width: '120'
      }
    ]
  }
})
