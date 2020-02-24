import basicModule from '@/store/baseModule'
import { getRows } from '@/api/mock/a11'

const request = {
  query: getRows,
  add: getRows,
  edit: getRows,
  remove: getRows
}

export default <any>basicModule(request, {

})
