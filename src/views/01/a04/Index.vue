<template>
  <layout class="a04">
    <template slot="operation">
      <el-button-group>
        <el-button type="primary"
                   @click="add">新增</el-button>
        <el-button type="primary"
                   :disabled="!singleSelected"
                   @click="edit">修改</el-button>
        <el-button type="primary"
                   :disabled="!selected"
                   @click="remove">删除</el-button>
        <el-button type="primary"
                   :disabled="!selected"
                   @click="enable">启用</el-button>
        <el-button type="primary"
                   :disabled="!selected"
                   @click="disable">禁用</el-button>
        <el-button type="primary"
                   @click="refresh">刷新</el-button>
        <el-button type="primary">
          <a href="data:text/txt;charset=utf-8,导出下载"
             download="软件规格.xlsx">导出</a></el-button>
      </el-button-group>
      <dialog-detail ref="dialog"></dialog-detail>
    </template>
    <template slot="search">
      <el-form inline
               :model="formSearch">
        <div class="search-left">
          <el-form-item>
            <el-input v-model="formSearch.authorization"
                      style="width:200px"
                      placeholder="授权方式"
                      clearable></el-input>
          </el-form-item>
          <el-form-item style="margin-right:20px">
            <el-input v-model="formSearch.keyword"
                      style="width:120px"
                      placeholder="模糊搜索"
                      clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="formSearch.apply"
              style="width:150px"
              placeholder="状态"
              clearable
              multiple
              collapse-tags
            >
              <el-option label="未启用" value="01"></el-option>
              <el-option label="启用" value="02"></el-option>
              <el-option label="禁用" value="03"></el-option>
            </el-select>
          </el-form-item>
          <!--
          <el-form-item>
            <el-checkbox checked>未启用</el-checkbox>
            <el-checkbox checked>启用</el-checkbox>
            <el-checkbox checked>禁用</el-checkbox>
          </el-form-item>
          -->
        </div>
        <div class="search-right">
          <el-button 
                     @click="clear">清空</el-button>
          <el-button 
                     type="primary">查询</el-button>
        </div>

      </el-form>
    </template>
    <template slot="content">
      <el-table height="100%"
                border
                stripe
                :data="tableData"
                :default-sort="defaultSort"
                row-key="id"
                @selection-change="selectionChange">
        <el-table-column type="selection"
                         fixed
                         width="40">
        </el-table-column>
        <el-table-column type="index"
                         fixed
                         label="序号"
                         align="right"
                         width="50">
        </el-table-column>
        <el-table-column prop="authorization"
                         label="授权方式"
                         fixed
                         sortable
                         align="center"
                         width="120">
          <template slot-scope="scope">
            <span style="color:#004098;cursor:pointer"
                  title="点击修改"
                  @click="edit">{{scope.row.authorization}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="state"
                         fixed
                         label="状态"
                         sortable
                         align="center"
                         width="80">
        </el-table-column>
        <el-table-column prop="creator"
                         fixed
                         label="创建人"
                         sortable
                         align="center"
                         width="90">
        </el-table-column>
        <el-table-column prop="createTime"
                         fixed
                         label="创建时间"
                         sortable
                         align="center"
                         width="110">
          <template slot-scope="scope">
            {{scope.row.createTime | DayFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="updatePerson"
                         label="最近更新人"
                         sortable
                         align="center"
                         width="120">
        </el-table-column>
        <el-table-column prop="updateTime"
                         label="最近更新时间"
                         sortable
                         align="center"
                         width="130">
          <template slot-scope="scope">
            {{scope.row.updateTime | DayFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="enablePerson"
                         label="启用人"
                         sortable
                         align="center"
                         width="90">
        </el-table-column>
        <el-table-column prop="enableTime"
                         label="启用时间"
                         sortable
                         align="center"
                         width="110">
          <template slot-scope="scope">
            {{scope.row.enableTime | DayFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="disablePerson"
                         label="禁用人"
                         sortable
                         align="center"
                         width="90">
        </el-table-column>
        <el-table-column prop="disableTime"
                         label="禁用时间"
                         sortable
                         align="center"
                         width="110">
          <template slot-scope="scope">
            {{scope.row.disableTime | DayFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="remark"
                         label="备注"
                         sortable
                         min-width="200">
        </el-table-column>
      </el-table>
      <!-- <el-pagination @size-change="sizeChange"
                     @current-change="currentChange"
                     background
                     :hide-on-single-page="true"
                     :current-page="1"
                     :page-sizes="[10, 20, 50, 100]"
                     :page-size="20"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="84">
      </el-pagination> -->
    </template>
  </layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Layout from '@/views/_common/Layout.vue'
import DialogDetail from './DialogDetail.vue'

interface ISoftwareAuthorization {
  id: string | number
  authorization: string
  state: string
  remark: string
  creator: string
  createTime: string
  updatePerson: string
  updateTime: string
  enablePerson: string
  enableTime: string
  disablePerson: string
  disableTime: string
}
interface ISoftwareAuthorizationSearch {
  authorization: string
  keyword: string
}

@Component({
  components: {
    Layout,
    DialogDetail
  }
})
export default class Index extends Vue {
  public $refs!: {
    dialog: any
  }
  selected: boolean = false
  singleSelected: boolean = false
  selection: any[] = []
  formSearch: ISoftwareAuthorizationSearch = {
    authorization: '',
    keyword: ''
  }
  tableData: ISoftwareAuthorization[] = [
    {
      id: 1,
      authorization: '单机永久',
      state: '启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-09-11',
      updatePerson: '郭虎城',
      updateTime: '2019-11-07',
      enablePerson: '郭虎城',
      enableTime: '2019-10-11',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 2,
      authorization: '单机租赁',
      state: '启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-09-10',
      updatePerson: '郭虎城',
      updateTime: '2019-10-07',
      enablePerson: '郭虎城',
      enableTime: '2019-10-11',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 3,
      authorization: '网络永久',
      state: '未启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-09-08',
      updatePerson: '郭虎城',
      updateTime: '2019-10-07',
      enablePerson: '',
      enableTime: '',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 4,
      authorization: '网络租赁',
      state: '禁用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-09-05',
      updatePerson: '郭虎城',
      updateTime: '2019-10-07',
      enablePerson: '郭虎城',
      enableTime: '2019-10-11',
      disablePerson: '郭虎城',
      disableTime: '2019-10-12'
    },
    {
      id: 5,
      authorization: '云租赁',
      state: '启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-09-01',
      updatePerson: '郭虎城',
      updateTime: '2019-10-07',
      enablePerson: '郭虎城',
      enableTime: '2019-10-11',
      disablePerson: '',
      disableTime: ''
    }
  ]
  defaultSort: object = {
    prop: 'createTime',
    order: 'descending'
  }
  created() {
    // console.log(this.$router)
    // console.log(this.$route.path)
  }
  add() {
    this.$refs.dialog.open(true)
  }
  edit() {
    this.$refs.dialog.open(false)
  }
  remove() {
    this.$alert('您选了“启用”或“禁用”的数据，不能删除！', '错误提示', {
      confirmButtonText: '确定',
      type: 'error',
      callback: action => {
        // this.$message({
        //   type: 'info',
        //   message: `action: ${action}`
        // })
        if (action === 'confirm') {
          this.$confirm('此操作将永久删除该数据, 是否继续?', '操作提示', {
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            type: 'warning'
          })
            .then(() => {
              this.$alert('数据删除成功！', '操作成功', {
                confirmButtonText: '确定',
                type: 'success'
              })
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              })
            })
        }
      }
    })
  }
  enable() {
    // this.$alert('您选择了2条不是 “未启用” 或 “禁用” 状态的数据，不能进行启用操作，请重新选择！', '错误提示', {
    //   confirmButtonText: '确定',
    //   type: 'error'
    // })
    this.$confirm('是否启用所选数据?', '操作提示', {
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      type: 'warning'
    })
      .then(() => {
        this.$alert('启用成功！', '操作成功', {
          confirmButtonText: '确定',
          type: 'success'
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消启用'
        })
      })
  }
  disable() {
    // this.$alert('您选择了2条不是“启用”状态的数据，不能进行禁用操作，请重新选择！', '错误提示', {
    //   confirmButtonText: '确定',
    //   type: 'error'
    // })
    this.$confirm('是否禁用所选数据?', '操作提示', {
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      type: 'warning'
    })
      .then(() => {
        this.$alert('禁用成功！', '操作成功', {
          confirmButtonText: '确定',
          type: 'success'
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消禁用'
        })
      })
  }
  refresh() {}
  export() {}
  clear() {
    this.formSearch.authorization = ''
    this.formSearch.keyword = ''
  }
  selectionChange(selection: any) {
    this.selected = selection.length > 0
    this.singleSelected = selection.length === 1
    console.log(selection)
  }
  sizeChange() {}
  currentChange() {}
}
</script>

<style lang="scss">
.a04 {
}
</style>