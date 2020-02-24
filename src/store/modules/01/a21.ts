import basicModule from '@/store/baseModule'
import { getRows } from '@/api/01/a21'

const request = {
  query: getRows,
  add: getRows,
  edit: getRows,
  remove: getRows,
}

export default <any>basicModule(request, {
  
})