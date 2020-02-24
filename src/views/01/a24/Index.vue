<template>
  <layout class="a24" :operation="false">
    <template slot="search">
      <el-form inline :model="formSearch">
        <div class="search-left">
          <el-form-item>
            <el-input v-model="formSearch.post" style="width:200px" placeholder="申请单位名称" clearable></el-input>
          </el-form-item>
          <el-form-item style="margin-right:20px">
            <el-input
              v-model="formSearch.keyword"
              style="width:120px"
              placeholder="申请人名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item style="margin-right:20px">
            <el-date-picker
              v-model="time"
              type="daterange"
              range-separator="至"
              start-placeholder="申请时间"
              end-placeholder="申请时间"
              class="data"
            ></el-date-picker>
          </el-form-item>
          <!--
          <el-form-item>
            <el-date-picker v-model="formSearch.data" type="date"   prefix-icon="date-icon" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          -->

          <!--
          <el-form-item>
            <el-checkbox checked>未启用</el-checkbox>
            <el-checkbox checked>启用</el-checkbox>
            <el-checkbox checked>禁用</el-checkbox>
          </el-form-item>
          -->
        </div>
        <div class="search-right">
          <el-button @click="clear">清空</el-button>
          <el-button type="primary">统计</el-button>
          <el-button type="primary">
            <a href="data:text/txt;charset=utf-8,导出下载" download="单位承诺书统计.xlsx">导出</a>
          </el-button>
        </div>
      </el-form>
    </template>
    <template slot="content">
      <el-table
        height="100%"
        border
        stripe
        :data="tableData"
        :default-sort="defaultSort"
        row-key="id"
        :row-style="changeCss"
        @selection-change="selectionChange"
      >
        <el-table-column type="index" :index="getIndex" fixed label="序号" align="right" width="50"></el-table-column>
        <el-table-column prop="post" label="申请单位" fixed align="left" width="195"></el-table-column>
        <el-table-column prop="person" fixed label="申请人" sortable align="left" width="105"></el-table-column>
        <el-table-column label="申请" align="center" width="240">
          <el-table-column prop="shouldNum" label="申请数量" sortable align="left" width="120"></el-table-column>
          <el-table-column prop="alreadyNum" label="通过数量" sortable align="left" width="120"></el-table-column>
        </el-table-column>
        <el-table-column label="审批" align="left" min-width="240">
          <el-table-column prop="passNum" label="审批数量" sortable align="left" width="120"></el-table-column>
          <el-table-column prop="notNum" label="超时数量" sortable align="left" width="120"></el-table-column>
          <el-table-column prop="rate" label="超时率" sortable align="left" min-width="120"></el-table-column>
        </el-table-column>
      </el-table>
    </template>
  </layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Layout from '@/views/_common/Layout.vue'

interface ISoftwareAuthorization {
  post: string
  person: string
  shouldNum: number
  alreadyNum: number
  passNum: number
  notNum: number
  rate: string
}
interface ISoftwareAuthorizationSearch {
  post: string
  data: string
}

@Component({
  components: {
    Layout
  }
})
export default class Index extends Vue {
  selected: boolean = false
  singleSelected: boolean = false
  selection: any[] = []
  formSearch: ISoftwareAuthorizationSearch = {
    post: '',
    data: ''
  }
  time: string = ''

  tableData: ISoftwareAuthorization[] = [
    {
      post: '中铁十一局',
      person: '尚健',
      shouldNum: 10,
      alreadyNum: 5,
      passNum: 8,
      notNum: 2,
      rate: '25.0%'
    },
    {
      post: '中铁十二局',
      person: '焦英伟',
      shouldNum: 15,
      alreadyNum: 4,
      passNum: 10,
      notNum: 3,
      rate: '30.0%'
    }
  ]

  defaultSort: object = {
    prop: 'createTime',
    order: 'descending'
  }
  created() {
    // console.log(this.$router)
    // console.log(this.$route.path)
    this.sum()
  }

  sum() {
    const row_sum = {
      post: '',
      person: '合计',
      shouldNum: 0,
      alreadyNum: 0,
      passNum: 0,
      notNum: 0,
      rate: '',
    }
    for (let row of this.tableData) {
      row_sum.shouldNum += row.shouldNum
      row_sum.alreadyNum += row.alreadyNum
      row_sum.passNum += row.passNum
      row_sum.notNum += row.notNum
    }
    this.tableData.unshift(row_sum)
  }
  changeCss({ row, rowIndex }) {
    if (row.post === '合计') {
      return 'background:#eff3fa'
    }
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
    this.formSearch.post = ''
    this.formSearch.data = ''
  }
  selectionChange(selection: any) {
    this.selected = selection.length > 0
    this.singleSelected = selection.length === 1
    console.log(selection)
  }
  sizeChange() {}
  currentChange() {}
  getIndex(index) {
    return index > 0 ? index : ''
  }
}
</script>
<style lang="scss">
.a24 {
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

  //起止日期结束

  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>