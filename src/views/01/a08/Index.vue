<template>
  <layout class="a08">
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
             download="软件产地.xlsx">导出</a></el-button>
      </el-button-group>
      <dialog-detail ref="dialogDetail"></dialog-detail>
    </template>
    <template slot="search">
      <el-form inline
               :model="formSearch">
        <div class="search-left">
          <el-form-item>
            <el-input v-model="formSearch.area"
                      style="width:200px"
                      placeholder="产地"
                      clearable></el-input>
          </el-form-item>
          <el-form-item style="margin-right:20px">
            <el-input v-model="formSearch.keyword"
                      style="width:200px"
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
        <el-table-column prop="area"
                          fixed
                          label="产地"
                          sortable
                          width="80">
          <template slot-scope="scope">
            <span style="color:#004098;cursor:pointer"
                  title="点击修改"
                  @click="edit">{{scope.row.area}}</span>
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
        </el-table-column>
        <el-table-column prop="remark"
                         label="备注"
                         sortable
                         min-width="160">
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
                     :total="5">
      </el-pagination> -->
    </template>
  </layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Layout from '@/views/_common/Layout.vue'
import DialogDetail from './DialogDetail.vue'

interface ISoftwareArea {
  id: string | number
  area: string
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
interface ISoftwareAreaSearch {
  area: string
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
    dialogDetail: any
  }
  selected: boolean = false
  singleSelected: boolean = false
  selection: any[] = []
  formSearch: ISoftwareAreaSearch = {
    area: '',
    keyword: ''
  }
  tableData: ISoftwareArea[] = [
    {
      id: 1,
      area: '国内',
      state: '启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-09-11',
      updatePerson: '郭虎城',
      updateTime: '2019-10-07',
      enablePerson: '郭虎城',
      enableTime: '2019-10-11',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 2,
      area: '国外',
      state: '未启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-09-10',
      updatePerson: '郭虎城',
      updateTime: '2019-10-07',
      enablePerson: '',
      enableTime: '',
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
    this.$refs.dialogDetail.open(true)
  }
  edit() {
    this.$refs.dialogDetail.open(false)
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
        // this.$message({
        //   type: 'info',
        //   message: '已取消启用'
        // })
        this.$alert('您选择了2条不是 “未启用” 或 “禁用” 状态的数据，不能进行启用操作，请重新选择！', '错误提示', {
          confirmButtonText: '确定',
          type: 'error'
        })
      })
  }
  disable() {
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
        // this.$message({
        //   type: 'info',
        //   message: '已取消禁用'
        // })
        this.$alert('您选择了2条不是“启用”状态的数据，不能进行禁用操作，请重新选择！', '错误提示', {
          confirmButtonText: '确定',
          type: 'error'
        })
      })
  }
  refresh() {}
  export() {}
  clear() {
    this.formSearch.area = ''
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
.a08 {
}
</style>