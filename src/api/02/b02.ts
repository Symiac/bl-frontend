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
              version: 'V2',
              state: '未发布',
              created_by: '郭虎城',
              created_at: '2019-12-11',
              issued_by: '',
              issued_at: '',
            },
            {
              id: 2,
              version: 'V1',
              state: '已发布',
              created_by: '郭虎城',
              created_at: '2019-12-11',
              issued_by: '郭虎城',
              issued_at: '2019-12-12',
            },
          ]
        }
      }
      resolve(res)    
    }, 600)
  })
}