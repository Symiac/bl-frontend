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
              name: 'Windows Server_标准版2003',
              category1: '个人终端',
              category2: '专业软件',
              variety: 'Visual Studio',
              configuration: '专业版',
              version: '2003',
              authorization: '单机永久',
              service: '数量授权',
              manufacturer: '微软',
              area: '国外',
              state: '启用',
              remark: '',
              created_by: '郭虎城',
              created_byTime: '2019-11-22',
              updatePerson: '郭虎城',
              updateTime: '2010-11-22',
              enablePerson: '郭虎城',
              enableTime: '2019-11-22',
              disablePerson: '',
              disableTime: ''
            },
          ]
        }
      }
      resolve(res)    
    }, 600)
  })
}