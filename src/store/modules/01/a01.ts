
interface IStateA01 {
  count: number,
  table_data: number[]
}
const state: IStateA01 = {
  count: 10,
  table_data: [1, 2, 3]
}

const a01 = {
  namespaced: true,
  state,
  mutations: {},
  actions: {}
}
export default a01
