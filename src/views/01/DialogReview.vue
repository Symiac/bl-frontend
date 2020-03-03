<template>
  <div class="dialog-review">
    <el-dialog width="900px" :close-on-click-modal="false" :title="title" :visible.sync="visible">
      <el-tabs v-model="first">
        <el-tab-pane label="通知单详情" name="first" class="information">
          <el-form>
            <el-row>
              <el-form-item label="基础信息" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
            </el-row>
            <el-row>
              <el-col :span="7">
                <el-form-item label="通知单号" label-width="120px" prop="name">
                  <el-input
                    class="inline-input"
                    style="width:100%"
                    v-model="basics.name"
                    placeholder="自动填充"
                    disabled
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="订货单位" label-width="120px" prop="type">
                  <el-select
                    v-model="basics.orderUnit"
                    style="width:150px"
                    placeholder="BL1901"
                    clearable
                    disabled
                  >
                    <el-option label="BL1901" value="01"></el-option>
                    <el-option label="BL1902" value="02"></el-option>
                    <el-option label="（历史记录）" value="03"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="产品工号" label-width="120px" prop="area">
                  <el-select
                    v-model="basics.orderUnit"
                    style="width:150px"
                    placeholder="产品工号"
                    clearable
                    disabled
                  >
                    <el-option label="BL1901" value="01"></el-option>
                    <el-option label="BL1902" value="02"></el-option>
                    <el-option label="（历史记录）" value="03"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="7">
                <el-form-item label="订单状态" label-width="120px" prop="name">
                  <el-input
                    class="inline-input"
                    style="width:100%"
                    v-model="basics.name"
                    placeholder="自动填充"
                    disabled
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="交货地点" label-width="120px" prop="type">
                  <el-select
                    v-model="basics.orderUnit"
                    style="width:150px"
                    placeholder="自动填充"
                    clearable
                    disabled
                  >
                    <el-option label="BL1901" value="01"></el-option>
                    <el-option label="BL1902" value="02"></el-option>
                    <el-option label="（历史记录）" value="03"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="运输方式" label-width="120px" prop="area">
                  <el-select
                    v-model="basics.orderUnit"
                    style="width:150px"
                    placeholder="自动填充"
                    clearable
                    disabled
                  >
                    <el-option label="BL1901" value="01"></el-option>
                    <el-option label="BL1902" value="02"></el-option>
                    <el-option label="（历史记录）" value="03"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="交货方式" label-width="120px" prop="area">
                  <el-radio v-model="basics.radio" label="1">统一</el-radio>
                  <el-radio v-model="basics.radio" label="2">分批</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="交货日期" label-width="120px">
                  <el-date-picker
                    v-model="basics.beginTime"
                    type="date"
                    placeholder="2020-07-28"
                    disabled
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-form-item label="产品信息" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
            </el-row>
            <div class="product">
              <el-table height="100%" border stripe :data="product" row-key="id">
                <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
                <el-table-column prop="fillInDate" fixed label="图号" align="left" width="120"></el-table-column>
                <el-table-column prop="noticeNumber" fixed label="品名" align="center" width="120"></el-table-column>
                <el-table-column prop="materialQuality" fixed label="材质" align="center" width="120"></el-table-column>
                <el-table-column
                  prop="deliveryDate"
                  label="数量"
                  sortable
                  align="center"
                  width="120"
                ></el-table-column>
                <el-table-column
                  prop="deliveryPlace"
                  label="交货日期"
                  sortable
                  align="center"
                  width="120"
                ></el-table-column>
                <el-table-column prop="state" label="备注" align="center" min-width="120"></el-table-column>
              </el-table>
            </div>
            <el-row>
              <el-form-item label="办理记录" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
            </el-row>
            <div class="handle">
              <el-table :data="handle" border class="custom-table">
                <el-table-column type="index" label="序号" align="right" width="50"></el-table-column>
                <el-table-column label="操作" prop="handleName" width="120"></el-table-column>
                <el-table-column label="操作人" prop="handleBy" width="120"></el-table-column>
                <el-table-column label="操作日期" prop="handleTime" width="120"></el-table-column>
                <el-table-column label="操作结论" prop="handleCon" width="120"></el-table-column>
                <el-table-column label="操作意见" prop="handleRemark" min-width="120"></el-table-column>
                <!-- <el-table-column label="状态" prop="state" width="70"></el-table-column> -->
              </el-table>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="审批结论" name="second">
          <el-form>
            <el-row>
              <el-col :span="12">
                <el-form-item
                  label="审批结论"
                  label-width="120px"
                  prop="handleCon"
                  :rules="{required: true, message: '未填写审批结论', trigger: 'blur' }"
                >
                  <el-autocomplete
                    class="inline-input"
                    style="width:100%"
                    clearable
                    v-model="formDetail.handleCon"
                    placeholder="请填写审批结论"
                  ></el-autocomplete>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="审批意见" label-width="120px" prop>
                  <!-- <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="formDetail.adv"
            placeholder="请填写审批结论"
                  ></el-autocomplete>-->
                  <el-input type="textarea" :row="5" v-model="formDetail.handleRemark"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">保存</el-button>
        <el-button @click="close">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
@Component
export default class DialogDetail extends Vue {
  public $refs!: {
    form: any
  }

  datas: any[] = []
  formDetail: any = {
    con: ''
  }
  basics: any = {
    radio: '1'
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

  handle: any[]=[
    {
      handleName:'',
      handleBy:'',
    },
   
  ]
  first: string = 'first'
  visible: boolean = false
  title: string = '审核生产通知单'

  open() {
    this.visible = true
  }

  submitForm() {
    this.visible = false
    this.$alert('保存成功！', '操作成功', {
      confirmButtonText: '确定',
      type: 'success'
    })
  }
  close() {
    this.visible = false
  }
}
</script>
<style lang="scss">
.dialog-review {
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
        .information{
        .el-form-item {
          margin-bottom: 10px;
        }
        }
        .el-input__inner {
          background-color: #fff;
          border-color: #e4e7ed;
          color: #000;
          cursor: not-allowed;
        }
        .product {
          height: 20vh;
          margin-bottom: 10px;
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
}
</style>