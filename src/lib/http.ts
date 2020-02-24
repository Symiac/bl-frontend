import Axios from 'axios'
import { Notification } from 'element-ui'

Axios.interceptors.response.use(
  (response: any) => {
    if (response.status === 200 && response.data.success) {
      let data = response.data
      // data.msg = data.msg || data.message
      // if (['token已过期！', 'token格式错误！'].includes(data.msg)) {
      //   router.push('/login')
      //   return Promise.reject()
      // }
      // let isBlob = Object.prototype.toString.call(data) === '[object Blob]'
      // if (data.success !== true && !isBlob) {
      //   let temp = { ...data }
      //   temp.message ? temp.message : (temp.message = temp.msg)
      //   return Promise.reject(temp)
      // }
      // if (data.code) {
      //   return Promise.reject(data)
      // } else {
      //   return data
      // }
      return data
    } else {
      return Promise.reject()
    }
  },
  error => {
    if (error.code === 'ECONNABORTED') {
      Notification.error('请求超时')
    }
    return Promise.reject(error)
  }
)

const http = {
  getRequest: async (url: any, params: any = null) => { 
    let config: any = {
      method: 'get',
      url,
      params: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      },
      timeout: 10000
    }
    return Axios(config).catch(error => {
      return Promise.reject(error)
    })
  },
  postRequest: async (url: any, params: any) => {
    let config: any = {
      method: 'post',
      url,
      data: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
    return Axios(config).catch(error => {
      return Promise.reject(error)
    })
  },
  putRequest: async (url: any, params: any) => {
    let config: any = {
      method: 'put',
      url,
      data: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
    return Axios(config).catch(error => {
      return Promise.reject(error)
    })
  },
  deleteBodyRequest: async (url: any, params: any = null) => {
    let config: any = {
      method: 'delete',
      url,
      data: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
    return Axios(config).catch(error => {
      return Promise.reject(error)
    })
  },
}
export default http
