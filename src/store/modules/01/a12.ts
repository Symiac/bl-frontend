import basicModule from '@/store/baseModule'
import { getRows } from '@/api/mock/a12'

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
        prop: 'name',
        label: '供应商简称',
        align: 'left',
        width: '140',
        fixed: true
      },
      {
        prop: 'name_cn',
        label: '供应商全称（中文）',
        align: 'left',
        width: '240',
      },
      {
        prop: 'name_en',
        label: '供应商全称（英文）',
        sortable: true,
        align: 'left',
        width: '360'
      },
      {
        prop: 'type',
        label: '供应商类型',
        sortable: true,
        align: 'left',
        width: '120'
      },
      {
        prop: 'state',
        label: '状态',
        sortable: true,
        align: 'left',
        width: '100'
      },
      {
        prop: 'applied_by',
        label: '申请人',
        sortable: true,
        align: 'left',
        width: '120'
      },
      {
        prop: 'applied_at',
        label: '申请时间',
        sortable: true,
        align: 'left',
        width: '120'
      },
      {
        prop: 'reviewed_by',
        label: '审核人',
        sortable: true,
        align: 'left',
        width: '120'
      },
      {
        prop: 'reviewed_at',
        label: '审核时间',
        sortable: true,
        align: 'left',
        width: '120'
      }
    ]
  }
})
