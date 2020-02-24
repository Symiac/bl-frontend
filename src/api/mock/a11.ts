import { AxiosPromise } from 'axios'

export function getRows(param: any): AxiosPromise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res: any = {
        success: true,
        message: 'data loaded',
        data: {
          rows: [
            {
              id: 1,
              name: '微软',
              name_cn: '美国微软公司',
              name_en: 'Microsoft Corporation',
              type: '生产厂商',
              state: '已提交',
              applied_by: '郭虎城',
              applied_com: '中铁十一局',
              applied_at: '2019-12-5',
              reviewed_by: '',
              reviewed_at: ''
            },
            {
              id: 2,
              name: '福昕',
              name_cn: '福建福昕软件开发股份有限公司',
              name_en: 'Foxit',
              type: '生产厂商',
              state: '已提交',
              applied_by: '郭虎城',
              applied_com: '中铁十二局',
              applied_at: '2019-12-5',
              reviewed_by: '',
              reviewed_at: ''
            },
            {
              id: 3,
              name: '金山',
              name_cn: '金山软件股份有限公司',
              name_en: 'Kingsoft',
              type: '生产厂商',
              state: '已通过',
              applied_by: '郭虎城',
              applied_com: '中铁十五局',
              applied_at: '2019-12-5',
              reviewed_by: '陆妍鲲',
              reviewed_at: '2019-12-6',
              remark: ''
            },
          ]
        }
      }
      resolve(res)
    }, 600)
  })
}