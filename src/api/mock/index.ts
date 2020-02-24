import { AxiosPromise } from 'axios'

export function getRows(param: any):AxiosPromise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res: any = {
        success: true,
        message: 'data loaded',
        data: {
          columns: [
            {
              index: 1,
              prop: 'authorization',
              label: '授权方式',
              sortable: true,
              align: 'left',
              width: '120',
              fixed: true
            },
            {
              index: 2,
              prop: 'state',
              label: '状态',
              sortable: true,
              align: 'center',
              width: '80',
              fixed: true
            },
            {
              index: 3,
              prop: 'created_by',
              label: '创建人',
              sortable: true,
              align: 'center',
              width: '90',
              fixed: true
            },
            {
              index: 4,
              prop: 'created_at',
              label: '创建时间',
              sortable: true,
              align: 'center',
              width: '110',
              fixed: true
            },
            {
              index: 5,
              prop: 'updated_by',
              label: '最近更新人',
              sortable: true,
              align: 'center',
              width: '120',
              fixed: true
            },
            {
              index: 6,
              prop: 'updated_at',
              label: '最近更新时间',
              sortable: true,
              align: 'center',
              width: '130',
              fixed: true
            },
            {
              index: 7,
              prop: 'enabled_by',
              label: '启用人',
              sortable: true,
              align: 'center',
              width: '90',
            },
            {
              index: 8,
              prop: 'enabled_at',
              label: '启用时间',
              sortable: true,
              align: 'center',
              width: '110',
            },
            {
              index: 9,
              prop: 'disabled_by',
              label: '禁用人',
              sortable: true,
              align: 'center',
              width: '90',
            },
            {
              index: 10,
              prop: 'disabled_at',
              label: '禁用时间',
              sortable: true,
              align: 'center',
              width: '110',
            },
            {
              index: 11,
              prop: 'remark',
              label: '备注',
              sortable: true,
              align: 'left',
              width: '200',
            }
          ],
          rows: [
            {
              id: 1,
              authorization: '单机永久',
              state: '启用',
              remark: '',
              created_by: '郭虎城',
              created_at: '2019-09-11',
              updated_by: '郭虎城',
              updated_at: '2019-11-07',
              enabled_by: '郭虎城',
              enabled_at: '2019-10-11',
              disabled_by: '',
              disabled_at: ''
            },
            {
              id: 2,
              authorization: '单机租赁',
              state: '启用',
              remark: '',
              created_by: '郭虎城',
              created_at: '2019-09-10',
              updated_by: '郭虎城',
              updated_at: '2019-10-07',
              enabled_by: '郭虎城',
              enabled_at: '2019-10-11',
              disabled_by: '',
              disabled_at: ''
            },
            {
              id: 3,
              authorization: '网络永久',
              state: '未启用',
              remark: '',
              created_by: '郭虎城',
              created_at: '2019-09-08',
              updated_by: '郭虎城',
              updated_at: '2019-10-07',
              enabled_by: '',
              enabled_at: '',
              disabled_by: '',
              disabled_at: ''
            },
            {
              id: 4,
              authorization: '网络租赁',
              state: '禁用',
              remark: '',
              created_by: '郭虎城',
              created_at: '2019-09-05',
              updated_by: '郭虎城',
              updated_at: '2019-10-07',
              enabled_by: '郭虎城',
              enabled_at: '2019-10-11',
              disabled_by: '郭虎城',
              disabled_at: '2019-10-12'
            },
            {
              id: 5,
              authorization: '云租赁',
              state: '启用',
              remark: '',
              created_by: '郭虎城',
              created_at: '2019-09-01',
              updated_by: '郭虎城',
              updated_at: '2019-10-07',
              enabled_by: '郭虎城',
              enabled_at: '2019-10-11',
              disabled_by: '',
              disabled_at: ''
            }
          ]
        }
      }
      resolve(res)    
    }, 1000)
  })
}