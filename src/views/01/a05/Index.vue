<template>
  <layout class="a05" :operation=false>
    <template slot="search">
      <el-form inline
               :model="formSearch">
        <div class="search-left">
          
          <el-form-item style="margin-right:20px">
             <el-select
              v-model="formSearch.keyword"
              style="width:150px"
              placeholder="订货单位"
              clearable
              multiple
              collapse-tags
            >
              <el-option label="BL1901" value="01"></el-option>
              <el-option label="BL1902" value="02"></el-option>
              <el-option label="（历史记录）" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="formSearch.apply"
              style="width:150px"
              placeholder="产品工号"
              clearable
              multiple
              collapse-tags
            >
              <el-option label="BL1901" value="01"></el-option>
              <el-option label="BL1902" value="02"></el-option>
              <el-option label="（历史记录）" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="margin-right:20px">
            <el-date-picker
              v-model="time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              class="data"
            ></el-date-picker>
          </el-form-item>
          <!--
          <el-form-item>
            <el-checkbox checked>未启用</el-checkbox>
            <el-checkbox checked>启用</el-checkbox>
            <el-checkbox checked>禁用</el-checkbox>
          </el-form-item>-->
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
        <el-table-column prop="service" 
                         fixed
                         label="填单日期"
                         sortable
                         align="left"
                         width="120">
        </el-table-column>
        <el-table-column prop="state"
                         fixed
                         label="通知单号"
                         sortable
                         align="center"
                         width="120">
        </el-table-column>
        <el-table-column prop="creator"
                         fixed
                         label="订货单位"
                         sortable
                         align="center"
                         width="120">
        </el-table-column>
        <el-table-column prop="createTime"
                         fixed
                         label="交货日期"
                         sortable
                         align="center"
                         width="120">
        </el-table-column>
        <el-table-column prop="updatePerson"
                         label="交货地点"
                         sortable
                         align="center"
                         width="120">
        </el-table-column>
         <el-table-column prop="disablePerson"
                         label="交货状态"
                         sortable
                         align="center"
                         width="120">
        </el-table-column>
        <el-table-column prop="updateTime"
                         label="运输方式"
                         sortable
                         align="center"
                         width="130">
        </el-table-column>
        <el-table-column prop="enablePerson"
                         label="产品工号"
                         sortable
                         align="center"
                         width="120">
        </el-table-column>
        <el-table-column prop="enableTime"
                         label="通知单状态"
                         sortable
                         align="center"
                         min-width="120">
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

interface ISoftwareService {
  id: string | number
  service: string
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
interface ISoftwareServiceSearch {
  service: string
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
  formSearch: ISoftwareServiceSearch = {
    service: '',
    keyword: ''
  }
  tableData: any []= [
    {
      id: 1,
      service: '2019-12-30',
      state: '19-034',
      creator: '东亚利根',
      createTime: '2020-03-11',
      updatePerson: '大窑湾港',
      updateTime: '汽运',
      enablePerson: 'BL1901',
      enableTime: '未提交',
      disablePerson: '成品',
    },
    {
      id: 2,
      service: '2019-12-30',
      state: '19-034',
      creator: '东亚利根',
      createTime: '分批交货',
      updatePerson: '大窑湾港',
      updateTime: '汽运',
      enablePerson: 'BL1901',
      enableTime: '待审批',
      disablePerson: '成品',
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
    this.formSearch.service = ''
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
.a05 {
   .data {
    width: 70%;
    height: 30px;
    line-height: 30px;
    // padding: 0 15px !important;
    .el-icon-circle-close {
      line-height: 22px;
    }
  }
   .el-date-editor .el-range__icon {
    line-height: 25px;
  }
  .el-date-editor .el-range-separator {
    line-height: 23px;
  }
}
</style>