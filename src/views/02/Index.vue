<template>
  <el-tabs value="first" style="width:auto; padding:0 20px; margin-top:0px;">
    <el-tab-pane label="首页" name="first">
      <layout style="padding:0 0;">
        <template slot="search">
          <el-form inline :model="formSearch">
            <div class="search-left">
              <el-form-item>
                <el-select
                  v-model="formSearch.drawingNumber"
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
                  v-model="formSearch.workingNumber"
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
                <el-select v-model="formSearch.state" style="width:150px" placeholder="状态" clearable>
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="formSearch.type" style="width:150px" placeholder="类型" clearable>
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="formSearch.noticeNumber" style="width:150px" placeholder="通知单号" clearable>
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
            <el-table-column prop="drawingNumber" fixed label="图号" align="center" width="100"></el-table-column>
            <el-table-column prop="name" fixed label="品名" align="center" width="100"></el-table-column>
            <el-table-column prop="materialQuality" fixed label="材质" align="center" width="100"></el-table-column>
            <el-table-column prop="number" label="数量" sortable align="center" width="100"></el-table-column>
            <el-table-column prop="deliveryDate" label="交货日期" sortable align="center" width="120"></el-table-column>
            <el-table-column prop="noticeNumber" label="通知单号" align="center" width="100"></el-table-column>
            <el-table-column prop="workingNumber" label="产品工号" align="center" width="100"></el-table-column>
            <el-table-column prop="type" label="类型" align="center" width="100"></el-table-column>
            <el-table-column prop="state" label="状态" align="center" width="100"></el-table-column>
            <el-table-column prop="remark" label="备注" align="center" min-width="100"></el-table-column>
          </el-table>
        </template>
      </layout>
    </el-tab-pane>
    <el-tab-pane label="产品通知" name="second">
      <layout style="padding:0 0;">
        <template slot="operation">
          <div class="operation-left">
            <div class="total">
              <div class="total_title" @click="show">
                <el-progress
                  type="dashboard"
                  :percentage="60"
                  color="#1989fa"
                  style="margin-top:20px"
                ></el-progress>
                <p class="text">19-034</p>
                <p class="text">东亚利根</p>
              </div>
            </div>
            <div class="total">
              <div class="total_title" @click="show2">
                <el-progress
                  type="dashboard"
                  :percentage="50"
                  color="#1989fa"
                  style="margin-top:20px"
                ></el-progress>
                <p class="text">19-035</p>
                <p class="text">东亚利根</p>
              </div>
            </div>
          </div>
        </template>
        <template slot="content">
          <div :class="s1">
            <el-form style="background:#fff">
              <el-row>
                <el-col :span="7">
                  <el-form-item label="通知单号" label-width="120px" prop="name">
                    <el-input
                      class="inline-input"
                      style="width:100%"
                      v-model="basics.noticeNumber"
                      placeholder
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="订货单位" label-width="120px" prop="type">
                    <el-select
                      v-model="basics.orderUnit"
                      style="width:150px"
                      placeholder="输入产品名称"
                      clearable
                    >
                      <el-option label="BL1901" value="01"></el-option>
                      <el-option label="BL1902" value="02"></el-option>
                      <el-option label="（历史记录）" value="03"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-table
                height="100%"
                border
                stripe
                :data="tableData"
                row-key="id"
                @row-dblclick="DoubleClick2"
              >
                <el-table-column type="selection" fixed width="40"></el-table-column>
                <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
                <el-table-column prop="drawingNumber" fixed label="图号" align="center" width="100"></el-table-column>
                <el-table-column prop="name" fixed label="品名" align="center" width="100"></el-table-column>
                <el-table-column prop="materialQuality" fixed label="材质" align="center" width="100"></el-table-column>
                <el-table-column
                  prop="number"
                  label="数量"
                  sortable
                  align="center"
                  width="100"
                ></el-table-column>
                <el-table-column
                  prop="deliveryDate"
                  label="交货日期"
                  sortable
                  align="center"
                  width="120"
                ></el-table-column>
                <el-table-column prop="state" label="状态" align="center" width="100"></el-table-column>
                <el-table-column prop="remark" label="备注" align="center" min-width="100"></el-table-column>
              </el-table>
            </el-form>
          </div>
          <div :class="s2">
            <el-form style="background:#fff">
              <el-row>
                <el-col :span="7">
                  <el-form-item label="通知单号" label-width="120px" prop="name">
                    <el-input
                      class="inline-input"
                      style="width:100%"
                      v-model="basics.noticeNumbers"
                      placeholder
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="订货单位" label-width="120px" prop="type">
                    <el-select
                      v-model="basics.orderUnit"
                      style="width:150px"
                      placeholder="输入产品名称"
                      clearable
                    >
                      <el-option label="BL1901" value="01"></el-option>
                      <el-option label="BL1902" value="02"></el-option>
                      <el-option label="（历史记录）" value="03"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-table
                height="100%"
                border
                stripe
                :data="tableDatas"
                row-key="id"
                @row-dblclick="DoubleClick2"
              >
                <el-table-column type="selection" fixed width="40"></el-table-column>
                <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
                <el-table-column prop="drawingNumber" fixed label="图号" align="center" width="100"></el-table-column>
                <el-table-column prop="name" fixed label="品名" align="center" width="100"></el-table-column>
                <el-table-column prop="materialQuality" fixed label="材质" align="center" width="100"></el-table-column>
                <el-table-column
                  prop="number"
                  label="数量"
                  sortable
                  align="center"
                  width="100"
                ></el-table-column>
                <el-table-column
                  prop="deliveryDate"
                  label="交货日期"
                  sortable
                  align="center"
                  width="120"
                ></el-table-column>
                <el-table-column prop="state" label="状态" align="center" width="100"></el-table-column>
                <el-table-column prop="remark" label="备注" align="center" min-width="100"></el-table-column>
              </el-table>
            </el-form>
          </div>
        </template>
      </layout>
    </el-tab-pane>
    <el-tab-pane label="返修处理" name="third">
      <layout style="padding:0 0;">
        <template slot="search">
          <el-form inline :model="formSearch">
            <div class="search-left">
              <el-form-item>
                <el-select
                  v-model="formSearch.drawingNumber"
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
                  v-model="formSearch.faultProcedure"
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
                <el-select v-model="formSearch.state" style="width:150px" placeholder="状态" clearable>
                  <el-option label="管理工作类" value="01"></el-option>
                  <el-option label="业务学习类" value="02"></el-option>
                  <el-option label="操作说明类" value="03"></el-option>
                  <el-option label="内训讲师类" value="05"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="search-right">
              <el-button>清空</el-button>
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
            <el-table-column prop="faultProcedure" label="失误工序" fixed align="center" width="120"></el-table-column>
            <el-table-column prop="drawingNumber" fixed label="图号" align="center" width="120"></el-table-column>
            <el-table-column prop="name" fixed label="品名" align="center" width="120"></el-table-column>
            <el-table-column prop="materialQuality" fixed label="材质" align="center" width="120"></el-table-column>
            <el-table-column prop="number" label="数量" sortable align="center" width="120"></el-table-column>
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
                  v-model="formSearch.drawingNumber"
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
                  v-model="formSearch.name"
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
              <el-button>清空</el-button>
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
            <el-table-column prop="drawingNumber" fixed label="图号" align="center" width="120"></el-table-column>
            <el-table-column prop="name" fixed label="品名" align="center" width="120"></el-table-column>
             <el-table-column prop="materialQuality" fixed label="材质" align="center" width="100"></el-table-column>
            <el-table-column prop="orderBy" fixed label="下单人" align="center" width="120"></el-table-column>
            <el-table-column prop="number" label="数量" sortable align="center" width="120"></el-table-column>
            <el-table-column prop="state" label="状态"  align="center" width="120"></el-table-column>
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
                  v-model="formSearch.drawingNumber"
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
                  v-model="formSearch.reviewProcess"
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
                <el-select v-model="formSearch.state" style="width:150px" placeholder="状态" clearable>
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
            <el-table-column prop="drawingNumber" fixed label="图号" align="center" width="120"></el-table-column>
            <el-table-column prop="name" fixed label="品名" align="center" width="120"></el-table-column>
            <el-table-column prop="number" label="数量" sortable align="center" width="100"></el-table-column>
            <el-table-column prop="noticeNumber" label="通知单号" align="center" width="120"></el-table-column>
            <el-table-column prop="workingNumber" label="产品工号" align="center" width="120"></el-table-column>
            <el-table-column prop="reviewProcess" label="评审工序" align="center" width="120"></el-table-column>
            <el-table-column prop="originator" label="发起人" align="center" width="120"></el-table-column>
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
                  v-model="formSearch.drawingNumber"
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
                  v-model="formSearch.workingNumber"
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
            <el-button type="primary" icon="el-icon-plus" @click="sixAdd">添加工艺版本</el-button>
            <el-button type="primary" icon="el-icon-delete">删除</el-button>
          </div>
        </template>
        <template slot="content">
          <el-table height="100%" border stripe :data="tableData" row-key="id">
            <el-table-column type="selection" fixed width="40"></el-table-column>
            <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
            <el-table-column prop="orderUnit" fixed label="版本编号" align="center" width="150"></el-table-column>
            <el-table-column prop="drawingNumber" fixed label="图号" align="center" width="150"></el-table-column>
            <el-table-column prop="name" label="品名" align="center" width="150"></el-table-column>
            <el-table-column prop="remark" label="备注" align="center" min-width="100"></el-table-column>
          </el-table>
        </template>
      </layout>
    </el-tab-pane>
    <dialog-detail ref="dialog"></dialog-detail>
    <first-review ref="first"></first-review>
    <third-review ref="third"></third-review>
    <four-add ref="four"></four-add>
    <five-review ref="five"></five-review>
    <six-add ref="six"></six-add>
  </el-tabs>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Layout from '@/views/_common/Layout.vue'
import DialogDetail from './DialogDetail.vue'
import FirstReview from './firstReview.vue'
import ThirdReview from './thirdReview.vue'
import FourAdd from './fourAdd.vue'
import FiveReview from './fiveReview.vue'
import SixAdd from './sixAdd.vue'

@Component({
  components: {
    Layout,
    DialogDetail,
    FirstReview,
    ThirdReview,
    FourAdd,
    FiveReview,
    SixAdd
  }
})
export default class Index extends Vue {
  public $refs!: {
    dialog: any
    first: any
    third: any
    four: any
    five: any
    six: any
  }
  selected: boolean = false
  singleSelected: boolean = false
  selection: any[] = []
  value1: string = ''
  s1: string = 's1'
  s2: string = 's2'
  formSearch: any = {
   
    // keyword:''
  }
  basics: any = {
    noticeNumber: '19-034',
    noticeNumbers:'19-035',
    orderUnit: '东亚利根'
  }

 tableData: any[] = [
    {
      state: '待处理'
    },
    {
      state: '待处理'
    },
    {
      state: '已处理'
    },
    {
      state: '已处理'
    },
    {
      state: '已处理'
    }
  ]

  tableDatas: any[] = [
    {
      state: '待处理'
    },
    {
      state: '待处理'
    },
    {
      state: '待处理'
    },
    {
      state: '待处理'
    },
    {
      state: '已处理'
    },
    {
      state: '已处理'
    },
    {
      state: '已处理'
    },
    {
      state: '已处理'
    }
  ]

  total: any = {
    allTotal: '80',
    submitTotal: '5',
    auditTotal: '5',
    approveTotal: '15',
    inTotal: '30',
    endTotal: '15'
  }

 

  created() {
    // console.log(this.$router)
 
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
  firstReview() {
    this.$refs.first.open(true)
  }
  DoubleClick2(){
    this.$refs.third.open(false)
  }
  thirdReview() {
    this.$refs.third.open(true)
  }
  fourAdd() {
    this.$refs.four.open(true)
  }
  fiveReview() {
    this.$refs.five.open(true)
  }
  sixAdd() {
    this.$refs.six.open(true)
  }

  show() {
    this.s2 = 's2'
    this.s1 = 's'
  }
  show2() {
    this.s1 = 's1'
    this.s2 = 's'
  }
  clear(){}
}
</script>

<style lang="scss">
.total {
  float: left;
  display: inline;
  border: 1px solid #ccc;
  margin-right: 30px;
  .total_title {
    width: 200px;
    color: #000;
    height: 230px;
    line-height: 30px;
    text-align: center;
    .text {
      font-size: 18px;
      font-weight: bold;
      margin: 0 5px;
    }
  }

  &:hover {
    color: #000;
    background: #fff;
  }
}
.s1 {
 
  display: none;
}
.s2 {
  height:100px;
  display: none;
}
</style>