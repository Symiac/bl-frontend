<template>
  <el-dialog
    width="1000px"
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="visible"
    append-to-body
    class="look"
  >
    <el-tabs value="first" style="width:auto; padding:0 20px; margin-top:0px;">
      <el-tab-pane label="派工" name="first">
        <layout style="padding:0 0;" :search="false">
          <template slot="operation">
            <div class="operation-left">
              <div class="order">
                <div class="paigong_title" @click="show">
                  <p class="text">工单号：2019001</p>
                  <p class="text">数量：150</p>
                  <p class="text">状态：生产中</p>
                </div>
              </div>

              <div class="order">
                <div class="paigong_title" @click="show2">
                  <p class="text">工单号：2019002</p>
                  <p class="text">数量：50</p>
                  <p class="text">状态：完工</p>
                </div>
              </div>
            </div>
          </template>
          <template slot="search">
            <div class="search-left">
              <el-button type="primary" icon="el-icon-edit">添加派工单</el-button>
              <el-button type="primary" icon="el-icon-edit" :disabled="disable">修 改</el-button>
              <el-button type="primary" icon="el-icon-edit" :disabled="disable">单双机审核</el-button>
              <el-button type="primary" icon="el-icon-edit" :disabled="disable">终止</el-button>
              <el-button type="primary" icon="el-icon-edit" :disabled="disable">完工确认</el-button>
            </div>
          </template>
          <template slot="content">
            <div :class="one">
              <el-form style="background:#fff;padding:10px;">
                <el-row>
                  <el-form-item
                    label="基础信息"
                    style=" width:100%;font-weight:bold;background:#fafafa;margin-bottom: 10px;"
                  ></el-form-item>
                </el-row>
                <el-table
                  height="100%"
                  border
                  stripe
                  :data="basic"
                  row-key="id"
                  style="margin-bottom: 10px; color:#000"
                >
                  <el-table-column prop="f" label="通知单号" align="center" width="120"></el-table-column>
                  <el-table-column prop="nn" label="产品工号" align="center" width="120"></el-table-column>
                  <el-table-column prop="n" label="图号" align="center" width="120"></el-table-column>
                  <el-table-column prop="p" label="产品名称" align="center" width="120"></el-table-column>
                  <el-table-column prop="or" label="填单日期" align="center" width="120"></el-table-column>
                  <el-table-column prop="da" label="完工日期" align="center" min-width="120"></el-table-column>
                </el-table>
                <el-row>
                  <el-form-item
                    label="派工单号"
                    style=" width:100%;font-weight:bold;background:#fafafa;margin-bottom: 0px;"
                  >
                    <el-input
                      v-model="basics.danhao"
                      placeholder="自动填充"
                      size="small"
                      style="width:150px"
                      disabled
                    ></el-input>
                    <el-input-number
                      v-model="basics.number1"
                      placeholder="数量"
                      size="small"
                      style="width:150px;margin-left:20px"
                      :min="0"
                      :max="200"
                      disabled
                    ></el-input-number>
                  </el-form-item>
                </el-row>

                <el-table
                  height="100%"
                  border
                  stripe
                  style="margin-bottom:10px"
                  :data="product"
                  row-key="id"
                >
                  <el-table-column type="index" fixed label="工序号" align="right" width="70"></el-table-column>
                  <el-table-column prop="fillInDate" fixed label="工序名称" align="center" width="120"></el-table-column>
                  <el-table-column prop="noticeNumber" label="部门" align="center" width="120"></el-table-column>
                  <el-table-column prop="orderUnit" label="设备" align="center" width="120"></el-table-column>
                  <el-table-column prop="p" label="姓名" align="center" width="120"></el-table-column>
                  <el-table-column prop="number" label="数量" align="center" width="120"></el-table-column>
                  <el-table-column prop="deliveryDate" label="定额工时" align="center" width="120"></el-table-column>
                  <el-table-column prop="deliveryPlace" label="调试工时" align="center" width="120"></el-table-column>
                  <el-table-column prop="d" label="实动工时" align="center" width="120"></el-table-column>
                  <el-table-column prop="h" label="合格" align="center" width="120"></el-table-column>
                  <el-table-column prop="dt" label="调试合格" align="center" width="120"></el-table-column>
                  <el-table-column prop="s" label="待处理" align="center" width="120"></el-table-column>
                  <el-table-column prop="e" label="工废" align="center" width="120"></el-table-column>
                  <el-table-column prop="e" label="废料" align="center" width="120"></el-table-column>
                  <el-table-column prop="state" label="质检确认" align="center" min-width="120"></el-table-column>
                </el-table>
              </el-form>
            </div>
            <div :class="two">
              <el-form style="background:#fff;padding:10px;">
                <el-row>
                  <el-form-item
                    label="基础信息"
                    style=" width:100%;font-weight:bold;background:#fafafa;margin-bottom: 10px;"
                  ></el-form-item>
                </el-row>
                <el-table
                  height="100%"
                  border
                  stripe
                  :data="basic"
                  row-key="id"
                  style="margin-bottom: 10px; color:#000"
                >
                  <el-table-column prop="f" label="通知单号" align="center" width="120"></el-table-column>
                  <el-table-column prop="nn" label="产品工号" align="center" width="120"></el-table-column>
                  <el-table-column prop="n" label="图号" align="center" width="120"></el-table-column>
                  <el-table-column prop="p" label="产品名称" align="center" width="120"></el-table-column>
                  <el-table-column prop="or" label="填单日期" align="center" width="120"></el-table-column>
                  <el-table-column prop="da" label="完工日期" align="center" min-width="120"></el-table-column>
                </el-table>
                <el-row>
                  <el-form-item
                label="派工单号"
                style=" width:100%;font-weight:bold;background:#fafafa;margin-bottom: 0px;"
              >
                <el-input
                  v-model="basics.danhao2"
                  placeholder="自动填充"
                  size="small"
                  style="width:150px"
                  disabled
                ></el-input>
                <el-input-number
                  v-model="basics.number2"
                  placeholder="数量"
                  size="small"
                  style="width:150px;margin-left:20px"
                  :min="0"
                  :max="200"
                  disabled
                ></el-input-number></el-form-item>
                </el-row>

                <el-table
                  height="100%"
                  border
                  stripe
                  style="margin-bottom:10px"
                  :data="product"
                  row-key="id"
                >
                  <el-table-column type="index" fixed label="工序号" align="right" width="70"></el-table-column>
                  <el-table-column prop="fillInDate" fixed label="工序名称" align="center" width="120"></el-table-column>
                  <el-table-column prop="noticeNumber" label="部门" align="center" width="120"></el-table-column>
                  <el-table-column prop="orderUnit" label="设备" align="center" width="120"></el-table-column>
                  <el-table-column prop="p" label="姓名" align="center" width="120"></el-table-column>
                  <el-table-column prop="number" label="数量" align="center" width="120"></el-table-column>
                  <el-table-column prop="deliveryDate" label="定额工时" align="center" width="120"></el-table-column>
                  <el-table-column prop="deliveryPlace" label="调试工时" align="center" width="120"></el-table-column>
                  <el-table-column prop="d" label="实动工时" align="center" width="120"></el-table-column>
                  <el-table-column prop="h" label="合格" align="center" width="120"></el-table-column>
                  <el-table-column prop="dt" label="调试合格" align="center" width="120"></el-table-column>
                  <el-table-column prop="s" label="待处理" align="center" width="120"></el-table-column>
                  <el-table-column prop="e" label="工废" align="center" width="120"></el-table-column>
                  <el-table-column prop="e" label="废料" align="center" width="120"></el-table-column>
                  <el-table-column prop="state" label="质检确认" align="center" min-width="120"></el-table-column>
                </el-table>
              </el-form>
            </div>
          </template>
        </layout>
      </el-tab-pane>
      <el-tab-pane label="工艺设计" name="second">
        <layout style="padding:0 0;" :operation="false" :search="false">
          <template slot="content">
            <el-form class="information">
              <el-row>
                <el-col :span="7">
                  <el-form-item label="图号" prop="drawingNumber">
                    <el-input
                      class="inline-input"
                      style="width:150px"
                      v-model="basics.drawingNumber"
                      placeholder="自动填充"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="产品名称" prop="name">
                    <el-input v-model="basics.name" style="width:150px" disabled></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="数量" prop="number">
                    <el-input
                      v-model="basics.number"
                      style="width:150px"
                      placeholder="产品工号"
                      disabled
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-form-item
                  label="工艺表一"
                  v-model="basics.nnn"
                  style=" width:100%;font-weight:bold;background:#fafafa;margin-bottom: 0px"
                >
                  <el-input-number
                    v-model="basics.number1"
                    placeholder="数量"
                    size="small"
                    style="width:150px"
                    :min="0"
                    :max="200"
                    disabled
                  ></el-input-number>
                </el-form-item>
              </el-row>
              <el-table
                height="100%"
                border
                stripe
                style="margin-bottom:20px"
                :data="product"
                row-key="id"
              >
                <el-table-column type="index" fixed label="工序号" align="right" width="70"></el-table-column>
                <el-table-column prop="fillInDate" fixed label="工序名称" align="left" width="120"></el-table-column>
                <el-table-column prop="noticeNumber" fixed label="部门/执行" align="center" width="120"></el-table-column>
                <el-table-column prop="orderUnit" fixed label="设备/供应商" align="center" width="120"></el-table-column>
                <el-table-column prop="deliveryDate" label="定额工时" align="center" width="120"></el-table-column>
                <el-table-column prop="deliveryPlace" label="调试工时" align="center" width="120"></el-table-column>
                <el-table-column prop="state" label="备注" align="center" min-width="120"></el-table-column>
              </el-table>

              <el-row>
                <el-form-item
                  label="工艺表二"
                  v-model="basics.nnn"
                  style=" width:100%;font-weight:bold;background:#fafafa;margin-bottom: 0px"
                >
                  <el-input-number
                    v-model="basics.number2"
                    placeholder="数量"
                    size="small"
                    style="width:150px"
                    :min="0"
                    :max="200"
                    disabled
                  ></el-input-number>
                </el-form-item>
              </el-row>
              <el-table height="100%" border stripe :data="products" row-key="id">
                <el-table-column type="index" fixed label="工序号" align="right" width="70"></el-table-column>
                <el-table-column prop="fillInDate" fixed label="工序名称" align="left" width="120"></el-table-column>
                <el-table-column prop="noticeNumber" fixed label="部门/执行" align="center" width="120"></el-table-column>
                <el-table-column prop="orderUnit" fixed label="设备/供应商" align="center" width="120"></el-table-column>
                <el-table-column prop="deliveryDate" label="定额工时" align="center" width="120"></el-table-column>
                <el-table-column prop="deliveryPlace" label="调试工时" align="center" width="120"></el-table-column>
                <el-table-column prop="state" label="备注" align="center" min-width="120"></el-table-column>
              </el-table>
            </el-form>
          </template>
        </layout>
      </el-tab-pane>
    </el-tabs>

    <div slot="footer" class="dialog-footer">
      <el-button @click="close">关闭</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Layout from '@/views/_common/Layout.vue'

@Component({
  components: {
    Layout
  }
})
export default class DialogDetail extends Vue {
  public $refs!: {}

  one: string = 'one'
  two: string = 'one'
  visible: boolean = false
  disable: boolean = true
  title: string = '查看信息'
  level: number = 1
  form: object = {
    radio: '1'
  }

  rules: object = {
    pp: [{ required: true, message: '请填写', trigger: 'blur' }],

    radio: [{ required: true, message: '', trigger: 'blur' }]
  }

  basics: any = {
    drawingNumber: 'D1118-02',
    name: 'NP-700齿轮',
    number: '200',
    number1: '150',
    danhao2: '2019002',
    danhao: '2019001',
    number2: '50'
   
  }
 
  product: any[] = [
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    }
  ]
  products: any[] = [
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    }
  ]

  basic: any[] = [
    {
      f: '19-034',
      n: 'B1118-025',
      or: '2020-03-20',
      p: 'NP-700齿轮',
      da: '2020-09-21',
      dd: '150',
      r: '2019001',
      nn: 'BL1901'
    }
  ]

  open() {
    this.visible = true
  }
  close() {
    this.visible = false
  }
  show() {
    this.two = 'one'
    this.basic[0].r = '2019001'
    this.basic[0].dd = '150'
    this.one = 't'
  }
  show2() {
    this.one = 'one'
    this.basic[0].r = '2019002'
    this.basic[0].dd = '50'
    this.two = 't'
  }
  save() {
    this.visible = false
    this.$alert('保存成功！', '操作成功', {
      confirmButtonText: '确定',
      type: 'success'
    })
  }
}
</script>

<style lang="scss">
.el-dialog__wrapper {
  overflow: hidden;
  .el-dialog {
    height: 90vh;
    margin-top: 5vh !important;
    display: flex;
    flex-direction: column;
    .el-dialog__body {
      flex: 1;
      // height: 450px;
      overflow: auto;
      .information {
        // margin-top: 20px;
      }
      .el-input__inner {
        background-color: #fff;
        border-color: #e4e7ed;
        color: #000;
        cursor: not-allowed;
      }
      .tab {
        height: 50vh;
        .t2 {
          display: none;
        }
      }
    }
    .el-dialog__footer {
      border-top: 1px solid #eee;
      padding: 10px 20px;
      background: #fefefe;
    }
    .custom-table {
      // 取消表格下边线
      tbody tr:last-child td {
        border-bottom: none !important;
      }
    }
  }
}

.order {
  float: left;
  display: inline;
  border: 1px solid #ccc;
  background: #fafafa;
  margin-right: 30px;
  border-radius: 15px;
  .paigong_title {
    width: 125px;

    color: #000;
    height: 60px;
    line-height: 20px;
    text-align: center;
    .text {
      font-size: 14px;
      font-weight: bold;
      margin: 0 5px;
    }
  }
}

.one {
  display: none;
}
</style>