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
              names: 'Windows Server_标准版2003',
              category1: '服务器用',
              category2: '操作系统',
              variety: 'Windows Server',
              configuration: '标准版',
              version: '2003',
              authorization: '单机永久',
              service: '数量授权',
              manufacturer: '微软',
              area: '国外',
              state: '已提交',
              created_by: '郭虎城',
              created_at: '2019-11-19',
              updated_by: '郭虎城',
              updated_at: '2010-11-22',
              applied_by: '郭虎城',
              applied_at: '2019-12-19',
              reviewed_by: '郭虎城',
              reviewed_at: '',
              applied_com: '中铁十一局',
              reviewed_length: '9天',
              remark: ''
            },
            {
              id: 2,
              name: 'Windows Server_标准版2003',
              names: 'Windows Server_标准版2003',
              category1: '服务器用',
              category2: '数据库',
              variety: 'SQL Server',
              configuration: '数据库标准版',
              version: '2000',
              authorization: '单机永久',
              service: '数量授权',
              manufacturer: '微软',
              area: '国外',
              state: '已提交',
              created_by: '郭虎城',
              created_at: '2019-11-21',
              updated_by: '郭虎城',
              updated_at: '2010-11-22',
              applied_by: '郭虎城',
              applied_at: '2019-12-22',
              reviewed_by: '郭虎城',
              reviewed_at: '',
              applied_com: '中铁十二局',
              reviewed_length: '6天',
              remark: ''
            },
          ]
        }
      }
      resolve(res)
    }, 400)
  })
}