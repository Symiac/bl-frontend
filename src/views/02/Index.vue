<template>
  <el-tabs value="first" style="width:auto; padding:0 20px; margin-top:0px;">
    <el-tab-pane label="首页" name="first">
      <layout style="padding:0 0;">
        <template slot="search">
          <el-form inline :model="formSearch">
            <div class="search-left">
              <el-form-item>
                <el-select
                  v-model="formSearch.apply_company"
                  style="width:150px"
                  placeholder="输入图号"
                  clearable
                >
                  <el-option label="中国铁建" value="01"></el-option>
                  <el-option label="中土集团" value="02"></el-option>
                  <el-option label="中铁十一局" value="04"></el-option>
                  <el-option label="中铁十二局" value="05"></el-option>
                  <el-option label="中铁二十局" value="06"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select
                  v-model="formSearch.add"
                  style="width:150px"
                  placeholder="产品工号"
                  clearable
                >
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="formSearch.c" style="width:150px" placeholder="状态" clearable>
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="formSearch.b" style="width:150px" placeholder="类型" clearable>
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="formSearch.a" style="width:150px" placeholder="通知单号" clearable>
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="search-right">
              <el-button @click="clear">清空</el-button>
              <el-button type="primary">查询</el-button>
              <el-button type="primary">
                <a href="data:text/txt;charset=utf-8,导出下载" download="资料查询.xlsx">导出</a>
              </el-button>
            </div>
          </el-form>
        </template>
        <template slot="operation">
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit" @click="firstReview">审 核</el-button>
          </el-button-group>
        </template>
        <template slot="content">
          <el-table
            height="100%"
            border
            stripe
            :data="tableData"
            row-key="id"
            @row-dblclick="rowDoubleClick"
          >
            <el-table-column type="selection" fixed width="40"></el-table-column>
            <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
            <el-table-column prop="fill_in_date" fixed label="图号" align="center" width="100"></el-table-column>
            <el-table-column prop="notice_number" fixed label="品名" align="center" width="100"></el-table-column>
            <el-table-column prop="order_unit" fixed label="材质" align="center" width="100"></el-table-column>
            <el-table-column prop="delivery_date" label="数量" sortable align="center" width="100"></el-table-column>
            <el-table-column prop="delivery_place" label="交货日期" sortable align="center" width="120"></el-table-column>
            <el-table-column prop="d" label="通知单号" align="center" width="100"></el-table-column>
            <el-table-column prop="p" label="产品工号" align="center" width="100"></el-table-column>
            <el-table-column prop="t" label="类型" align="center" width="100"></el-table-column>
            <el-table-column prop="state" label="状态" align="center" width="100"></el-table-column>
            <el-table-column prop="remark" label="备注" align="center" min-width="100"></el-table-column>
          </el-table>
        </template>
      </layout>
    </el-tab-pane>
    <el-tab-pane label="产品通知" name="second"></el-tab-pane>
    <el-tab-pane label="返修处理" name="third">
      <layout style="padding:0 0;">
        <template slot="search">
          <el-form inline :model="formSearch">
            <div class="search-left">
              <el-form-item>
                <el-select
                  v-model="formSearch.apply_company"
                  style="width:150px"
                  placeholder="输入图号"
                  clearable
                >
                  <el-option label="中国铁建" value="01"></el-option>
                  <el-option label="中土集团" value="02"></el-option>
                  <el-option label="中铁十一局" value="04"></el-option>
                  <el-option label="中铁十二局" value="05"></el-option>
                  <el-option label="中铁二十局" value="06"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select
                  v-model="formSearch.add"
                  style="width:150px"
                  placeholder="失误工序"
                  clearable
                >
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="formSearch.c" style="width:150px" placeholder="状态" clearable>
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="search-right">
              <el-button @click="clear">清空</el-button>
              <el-button type="primary">查询</el-button>
              <el-button type="primary">
                <a href="data:text/txt;charset=utf-8,导出下载" download="资料查询.xlsx">导出</a>
              </el-button>
            </div>
          </el-form>
        </template>
        <template slot="operation">
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit" @click="thirdReview">设计处理</el-button>
          </el-button-group>
        </template>
        <template slot="content">
          <el-table height="100%" border stripe :data="tableData" row-key="id">
            <el-table-column type="selection" fixed width="40"></el-table-column>
            <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
            <el-table-column prop="d" label="失误工序" fixed align="center" width="120"></el-table-column>
            <el-table-column prop="fill_in_date" fixed label="图号" align="center" width="120"></el-table-column>
            <el-table-column prop="notice_number" fixed label="品名" align="center" width="120"></el-table-column>
            <el-table-column prop="order_unit" fixed label="材质" align="center" width="120"></el-table-column>
            <el-table-column prop="delivery_date" label="数量" sortable align="center" width="120"></el-table-column>
            <el-table-column prop="t" label="类型" align="center" width="120"></el-table-column>
            <el-table-column prop="state" label="状态" align="center" width="120"></el-table-column>
            <el-table-column prop="remark" label="备注" align="center" min-width="120"></el-table-column>
          </el-table>
        </template>
      </layout>
    </el-tab-pane>
    <el-tab-pane label="工装产品" name="four">
      <layout style="padding:0 0;">
        <template slot="search">
          <el-form inline :model="formSearch">
            <div class="search-left">
              <el-form-item>
                <el-select
                  v-model="formSearch.apply_company"
                  style="width:150px"
                  placeholder="输入图号"
                  clearable
                >
                  <el-option label="中国铁建" value="01"></el-option>
                  <el-option label="中土集团" value="02"></el-option>
                  <el-option label="中铁十一局" value="04"></el-option>
                  <el-option label="中铁十二局" value="05"></el-option>
                  <el-option label="中铁二十局" value="06"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select
                  v-model="formSearch.add"
                  style="width:150px"
                  placeholder="输入品名"
                  clearable
                >
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="search-right">
              <el-button @click="clear">清空</el-button>
              <el-button type="primary">查询</el-button>
              <el-button type="primary">
                <a href="data:text/txt;charset=utf-8,导出下载" download="资料查询.xlsx">导出</a>
              </el-button>
            </div>
          </el-form>
        </template>
        <template slot="operation">
          <div class="operation-left">
            <el-button type="primary" icon="el-icon-plus" @click="fourAdd">添加工装件</el-button>
            <el-button type="primary" icon="el-icon-delete">删除</el-button>
          </div>
        </template>
        <template slot="content">
          <el-table height="100%" border stripe :data="tableData" row-key="id">
            <el-table-column type="selection" fixed width="40"></el-table-column>
            <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
            <el-table-column prop="fill_in_date" fixed label="图号" align="center" width="120"></el-table-column>
            <el-table-column prop="notice_number" fixed label="品名" align="center" width="120"></el-table-column>
            <el-table-column prop="order_unit" fixed label="下单人" align="center" width="120"></el-table-column>
            <el-table-column prop="delivery_date" label="数量" sortable align="center" width="120"></el-table-column>
            <el-table-column prop="remark" label="备注" align="center" min-width="120"></el-table-column>
          </el-table>
        </template>
      </layout>
    </el-tab-pane>
    <el-tab-pane label="技术评审" name="five">
      <layout style="padding:0 0;">
        <template slot="search">
          <el-form inline :model="formSearch">
            <div class="search-left">
              <el-form-item>
                <el-select
                  v-model="formSearch.apply_company"
                  style="width:150px"
                  placeholder="输入图号"
                  clearable
                >
                  <el-option label="中国铁建" value="01"></el-option>
                  <el-option label="中土集团" value="02"></el-option>
                  <el-option label="中铁十一局" value="04"></el-option>
                  <el-option label="中铁十二局" value="05"></el-option>
                  <el-option label="中铁二十局" value="06"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select
                  v-model="formSearch.add"
                  style="width:150px"
                  placeholder="评审工序"
                  clearable
                >
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="formSearch.c" style="width:150px" placeholder="状态" clearable>
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="search-right">
              <el-button @click="clear">清空</el-button>
              <el-button type="primary">查询</el-button>
              <el-button type="primary">
                <a href="data:text/txt;charset=utf-8,导出下载" download="资料查询.xlsx">导出</a>
              </el-button>
            </div>
          </el-form>
        </template>
        <template slot="operation">
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit" @click="fiveReview">评 审</el-button>
          </el-button-group>
        </template>
        <template slot="content">
          <el-table height="100%" border stripe :data="tableData" row-key="id">
            <el-table-column type="selection" fixed width="40"></el-table-column>
            <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
            <el-table-column prop="fill_in_date" fixed label="图号" align="center" width="120"></el-table-column>
            <el-table-column prop="notice_number" fixed label="品名" align="center" width="120"></el-table-column>
            <el-table-column prop="delivery_date" label="数量" sortable align="center" width="100"></el-table-column>
            <el-table-column prop="d" label="通知单号" align="center" width="120"></el-table-column>
            <el-table-column prop="p" label="产品工号" align="center" width="120"></el-table-column>
            <el-table-column prop="delivery_place" label="评审工序" align="center" width="120"></el-table-column>
            <el-table-column prop="t" label="发起人" align="center" width="120"></el-table-column>
            <el-table-column prop="state" label="状态" align="center" min-width="120"></el-table-column>
          </el-table>
        </template>
      </layout>
    </el-tab-pane>
    <el-tab-pane label="产品工艺库" name="six">
      <layout style="padding:0 0;">
        <template slot="search">
          <el-form inline :model="formSearch">
            <div class="search-left">
              <el-form-item>
                <el-select
                  v-model="formSearch.apply_company"
                  style="width:150px"
                  placeholder="输入图号"
                  clearable
                >
                  <el-option label="中国铁建" value="01"></el-option>
                  <el-option label="中土集团" value="02"></el-option>
                  <el-option label="中铁十一局" value="04"></el-option>
                  <el-option label="中铁十二局" value="05"></el-option>
                  <el-option label="中铁二十局" value="06"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select
                  v-model="formSearch.add"
                  style="width:150px"
                  placeholder="版本编号"
                  clearable
                >
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="search-right">
              <el-button @click="clear">清空</el-button>
              <el-button type="primary">查询</el-button>
              <el-button type="primary">
                <a href="data:text/txt;charset=utf-8,导出下载" download="资料查询.xlsx">导出</a>
              </el-button>
            </div>
          </el-form>
        </template>
        <template slot="operation">
          <div class="operation-left">
            <el-button type="primary" icon="el-icon-plus" @click="sixAdd">添加工装件</el-button>
            <el-button type="primary" icon="el-icon-delete">删除</el-button>
          </div>
        </template>
        <template slot="content">
          <el-table height="100%" border stripe :data="tableData" row-key="id">
            <el-table-column type="selection" fixed width="40"></el-table-column>
            <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
            <el-table-column prop="order_unit" fixed label="版本编号" align="center" width="150"></el-table-column>
            <el-table-column prop="fill_in_date" fixed label="图号" align="center" width="150"></el-table-column>
            <el-table-column prop="delivery_place" label="品名" align="center" width="150"></el-table-column>
            <el-table-column prop="remark" label="备注" align="center" min-width="100"></el-table-column>
          </el-table>
        </template>
      </layout>
    </el-tab-pane>
    <dialog-detail ref="dialog"></dialog-detail>
  </el-tabs>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Layout from '@/views/_common/Layout.vue'
import DialogDetail from './DialogDetail.vue'

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
  value1: string = ''
  formSearch: any = {
    post: '',
    data: ''
    // keyword:''
  }

  tableData: any[] = [
    {},
    {
      post: '中国铁建',
      type: '管理办法类',
      shouldNum: 9,
      alreadyNum: 3,
      notNum: 0
    },
    {
      post: '中铁一局',
      type: '操作说明类',
      shouldNum: 2,
      alreadyNum: 1,
      notNum: 0
    }
  ]

  secondTable: any[] = [
    {
      name: '软资系统培训说明',
      type: '内训讲师类',
      release: '中国铁建',
      release_by: '李栋',
      state: '启用',
      lookNum: 24
    },
    {
      name: '软资系统使用说明书',
      type: '操作说明类',
      release: '中国铁建',
      release_by: '李栋',
      state: '启用',
      lookNum: 25
    },
    {
      name: '软资系统账号获取说明',
      type: '操作说明类',
      release: '中国铁建',
      release_by: '孟洁雅',
      state: '禁用',
      lookNum: 3
    }
  ]

  thirdTable: any[] = [
    {
      post: '中国铁建',
      depertment: '经济管理部',
      personname: '周本敏',
      userNum: 19
    },
    {
      post: '中国铁建',
      depertment: '海外部',
      personname: '李方洁',
      userNum: 13
    },
    {
      post: '中国铁建',
      depertment: '管理业务部',
      personname: '王青志',
      userNum: 8
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
    this.thirdsum()
  }
  add() {
    this.$refs.dialog.open(true)
  }
  edit() {
    this.$refs.dialog.open(false)
  }
  rowDoubleClick() {
    this.$refs.dialog.open(true)
  }
  firstReview() {}
  thirdReview() {}
  fourAdd() {}
  fiveReview() {}
  sixAdd() {}

  sum() {
    const sumdata = {
      name: '',
      type: '',
      release: '',
      release_by: '',
      state: '合计',
      lookNum: 0
    }

    for (let row of this.tableData) {
      row.notNum = row.shouldNum + row.alreadyNum
    }
    for (let row of this.secondTable) {
      sumdata.lookNum += row.lookNum
    }
    this.secondTable.unshift(sumdata)
  }

  thirdsum() {
    const thirdsum = {
      post: '',
      depertment: '',
      personname: '合计',
      userNum: 0
    }
    for (let row of this.thirdTable) {
      thirdsum.userNum += row.userNum
    }
    this.thirdTable.unshift(thirdsum)
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
        this.$message({
          type: 'info',
          message: '已取消启用'
        })
      })
  }

  refresh() {
    // this.$alert('您选择了2条不是“暂存”或“不通过”状态的数据，不能进行提交操作，请重新选择！', '错误提示', {
    // confirmButtonText: '确定',
    // type: 'error'
    //})
  }
  export() {}
  clear() {
    this.value1 = ''
    // this.formSearch.keyword = ''
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
.p01 {
}
//起止日期
.data {
  height: 30px;
  line-height: 30px;
  // padding: 0 15px !important;
}
.el-date-editor .el-range__icon {
  line-height: 25px;
}
.el-date-editor .el-range-separator {
  line-height: 23px;
}
//起止日期结束

//上传文件
.el-upload {
  display: inline;
}

.el-upload-list,
.el-upload-list--text {
  margin: -38px 0px 0px 160px;
}
//上传文件end
</style>