import http from '@/lib/http'
import urls from '@/lib/urls'

const proxyPrefix = process.env.NODE_ENV === 'production' ? urls.pro_prefix : urls.dev_prefix

export function getCategories() {
  return http.getRequest(`${proxyPrefix}/v1/a01/categories`)
}

export function removeCategories(ids) {
  return http.deleteBodyRequest(`${proxyPrefix}/v1/a01/categories`, ids)
}

export function addCategory(param) {
  return http.postRequest(`${proxyPrefix}/v1/a01/category`, param)
}