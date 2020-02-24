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
              category1: '服务器用',
              category2: '操作系统',
              variety: 'Windows Server',
              configuration: '标准版',
              version: '2003',
              authorization: '单机永久',
              service: '数量授权',
              manufacturer: '微软',
              area: '国外',
              state: '启用',
              remark: '',
              createPerson: '郭虎城',
              createTime: '2019-11-22 20:18:45',
              updatePerson: '郭虎城',
              updateTime: '2010-11-22 20:18:11',
              enablePerson: '郭虎城',
              enableTime: '2019-11-22 20:10:23',
              disablePerson: '',
              disableTime: ''
            }
          ]
        }
      }
      resolve(res)    
    }, 600)
  })
}