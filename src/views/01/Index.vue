<template>
  <layout class="a05">
    <template slot="search">
      <el-form inline :model="formSearch">
        <div class="search-left">
          <el-form-item style="margin-right:20px">
            <el-select
              v-model="formSearch.order_unit"
              style="width:150px"
              placeholder="订货单位"
              clearable
            >
              <el-option label="BL1901" value="01"></el-option>
              <el-option label="BL1902" value="02"></el-option>
              <el-option label="（历史记录）" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="formSearch.working_number"
              style="width:150px"
              placeholder="产品工号"
              clearable
            >
              <el-option label="BL1901" value="01"></el-option>
              <el-option label="BL1902" value="02"></el-option>
              <el-option label="（历史记录）" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="填单日期:" label-width="150">
            <el-date-picker v-model="formSearch.begin_time" type="date" placeholder="开始日期"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-date-picker v-model="formSearch.end_time" type="date" placeholder="结束日期"></el-date-picker>
          </el-form-item>
        </div>
        <div class="search-right">
          <el-button @click="clear">清 空</el-button>
          <el-button type="primary" icon="el-icon-search">查 询</el-button>
          <el-button type="primary" icon="el-icon-download">
            <a href="data:text/txt;charset=utf-8,导出下载" download="导出表格数据.xlsx">批量导出</a>
          </el-button>
        </div>
      </el-form>
    </template>
    <template slot="operation">
      <div class="operation-left">
        <div class="total">
          <div class="total_title" style="background:#666666">工单总数</div>
          <el-button class="total_btn" @click="clear">{{total.all_total}}</el-button>
        </div>
        <div class="total">
          <div class="total_title" style="background:#FF0000">待提交</div>
          <el-button class="total_btn" @click="clear">{{total.submit_total}}</el-button>
        </div>
        <div class="total">
          <div class="total_title" style="background:#FF9900">待审批</div>
          <el-button class="total_btn" @click="clear">{{total.audit_total}}</el-button>
        </div>
        <div class="total">
          <div class="total_title" style="background:#FFCC00">待批准</div>
          <el-button class="total_btn" @click="clear">{{total.approve_total}}</el-button>
        </div>
        <div class="total">
          <div class="total_title" style="background:#3399CC">进行中</div>
          <el-button class="total_btn" @click="clear">{{total.in_total}}</el-button>
        </div>
        <div class="total">
          <div class="total_title" style="background:#33CC66">已完工</div>
          <el-button class="total_btn" @click="clear">{{total.end_total}}</el-button>
        </div>
        <div class="total" style="border: none;margin-top:50px;margin-right:10px;">
          <el-button type="primary" @click="add">新增</el-button>
        </div>
        <div class="total" style="border: none;margin-top:50px;margin-right:10px;">
          <el-button type="primary" @click="edit">修改</el-button>
        </div>
        <div class="total" style="border: none;margin-top:50px;margin-right:10px;">
          <el-button type="primary" @click="review">审核</el-button>
        </div>
        <div class="total" style="border: none;margin-top:50px;margin-right:10px;">
          <el-button type="primary" @click="changes">变更</el-button>
        </div>
        <dialog-add ref="dialogAdd"></dialog-add>
         <dialog-detail ref="dialogDetail"></dialog-detail>
         <dialog-review ref="dialogReview"></dialog-review>
         <dialog-change ref="dialogChange"></dialog-change>
         
      </div>
    </template>
    <template slot="content">
      <el-table
        height="100%"
        border
        stripe
        :data="tableData"
        :default-sort="defaultSort"
        row-key="id"
        @selection-change="selectionChange"
      >
        <el-table-column type="selection" fixed width="40"></el-table-column>
        <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
        <el-table-column prop="fill_in_date" fixed label="填单日期" sortable align="left" width="120"></el-table-column>
        <el-table-column prop="notice_number" fixed label="通知单号" sortable align="center" width="120"></el-table-column>
        <el-table-column prop="order_unit" fixed label="订货单位" sortable align="center" width="120"></el-table-column>
        <el-table-column prop="delivery_date" fixed label="交货日期" sortable align="center" width="120"></el-table-column>
        <el-table-column prop="delivery_place" label="交货地点" sortable align="center" width="120"></el-table-column>
        <el-table-column prop="delivery_state" label="交货状态" sortable align="center" width="120"></el-table-column>
        <el-table-column prop="shipping_type" label="运输方式" sortable align="center" width="130"></el-table-column>
        <el-table-column prop="working_number" label="产品工号" sortable align="center" width="120"></el-table-column>
        <el-table-column prop="state" label="通知单状态" sortable align="center" min-width="120"></el-table-column>
      </el-table>
  
    </template>
  </layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Layout from '@/views/_common/Layout.vue'
import dialogAdd from './Dialog.vue'
import dialogDetail from './DialogDetail.vue'
import dialogReview from './DialogReview.vue'



@Component({
  components: {
    Layout,
    dialogAdd,
    dialogDetail,
    dialogReview,

  }
})
export default class Index extends Vue {
  public $refs!: {
    dialogAdd: any,
    dialogDetail: any,
    dialogReview: any,

  }
  selected: boolean = false
  singleSelected: boolean = false
  selection: any[] = []
  total: any = {
    all_total: '80',
    submit_total: '5',
    audit_total: '5',
    approve_total: '15',
    in_total: '30',
    end_total: '15'
  }
  formSearch: any = {
    begin_time: '', //查询开始日期
    end_time: '', //查询结束日期
    order_unit: '', //订货单位
    working_number: '' //产品工号
  }

  tableData: any[] = [
    {
  
      fill_in_date: '2019-12-30',
      notice_number: '19-034',
      order_unit: '东亚利根',
      delivery_date: '2020-03-11',
      delivery_place: '大窑湾港',
      shipping_type: '汽运',
      working_number: 'BL1901',
      state: '未提交',
      delivery_state: '成品'
    },
    {
    
      fill_in_date: '2019-12-30',
      notice_number: '19-035',
      order_unit: '东亚利根',
      delivery_date: '2020-03-11',
      delivery_place: '大窑湾港',
      shipping_type: '汽运',
      working_number: 'BL1903',
      state: '待审核',
      delivery_state: '成品'
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
   this.$refs.dialogAdd.open()
  }
  edit() {
    this.$refs.dialogDetail.open(false)
  }
  review(){
    this.$refs.dialogReview.open(true)
  }
  changes(){
    this.$refs.dialogDetail.change()
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
    this.formSearch.order_unit = ''
    this.formSearch.working_number = ''
    this.formSearch.begin_time = ''
    this.formSearch.end_time = ''
  }
  selectionChange(selection: any) {
    this.selected = selection.length > 0
    this.singleSelected = selection.length === 1
    console.log(selection)
  }

}
</script>

<style lang="scss">
.a05 {
  .total {
    height: 80;
    float: left;
    display: inline;
    border: 1px solid #ccc;
    margin-right: 30px;
    .total_title {
      width: 120px;
      color: #fff;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #ccc;
      border-top: none;
      border-left: none;
      border-right: none;
    }
    .total_btn {
      height: 50px;
      width: 120px;
      border-radius: 0;
      border: none;
      font-size: 28px;
      &:hover {
        color: #000;
        background: #fff;
      }
      &:focus {
        background: #e16003;
        color: #fff;
      }
    }
  }

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