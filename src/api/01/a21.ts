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
              state: '已提交',
              created_by: '郭虎城',
              created_at: '2019-11-22',
              updated_by: '郭虎城',
              updated_at: '2010-11-22',
              applied_by: '郭虎城',
              applied_at: '2019-11-22',
              reviewed_by: '郭虎城',
              reviewed_at: '2010-11-22',
              remark: ''
            },
            {
              id: 2,
              name: 'Windows Server_标准版2003',
              category1: '服务器用',
              category2: '数据库',
              variety: 'SQL Server',
              configuration: '数据库标准版',
              version: '2000',
              authorization: '单机永久',
              service: '数量授权',
              manufacturer: '微软',
              area: '国外',
              state: '已通过',
              created_by: '郭虎城',
              created_at: '2019-11-22',
              updated_by: '郭虎城',
              updated_at: '2010-11-22',
              applied_by: '郭虎城',
              applied_at: '2019-11-22',
              reviewed_by: '郭虎城',
              reviewed_at: '2010-11-22',
              remark: ''
            },
            {
              id: 3,
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
              state: '暂存',
              created_by: '郭虎城',
              created_at: '2019-11-22',
              updated_by: '郭虎城',
              updated_at: '2010-11-22',
              applied_by: '郭虎城',
              applied_at: '2019-11-22',
              reviewed_by: '郭虎城',
              reviewed_at: '2010-11-22',
              remark: ''
            },
          ]
        }
      }
      resolve(res)    
    }, 400)
  })
}