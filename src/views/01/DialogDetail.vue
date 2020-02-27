<template>
    <el-dialog
      width="900px"
      :close-on-click-modal="false"
      :title="title"
      :visible.sync="visible"
      append-to-body
    >
      <el-form class="information">
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
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="订货单位" label-width="120px" prop="type">
              <el-select
                v-model="basics.order_unit"
                style="width:150px"
                placeholder="BL1901"
                clearable
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
                v-model="basics.order_unit"
                style="width:150px"
                placeholder="产品工号"
                clearable
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
                placeholder="可修改"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="交货地点" label-width="120px" prop="type">
              <el-select
                v-model="basics.order_unit"
                style="width:150px"
                placeholder="可修改"
                clearable
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
                v-model="basics.order_unit"
                style="width:150px"
                placeholder="可修改"
                clearable
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
              <el-date-picker v-model="basics.begin_time" type="date" placeholder="2020-07-28"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-form-item label="产品信息" style=" width:100%;font-weight:bold;background:#fafafa">
            <el-button-group>
              <el-button type="text" icon="el-icon-plus" @click="addProduct">新增</el-button>
              <el-button type="text" icon="el-icon-edit" disabled>修改</el-button>
              <el-button type="text" icon="el-icon-delete" disabled>删除</el-button>
            </el-button-group>
            <add-product ref="addProduct"></add-product>
          </el-form-item>
        </el-row>
        <div class="product">
          <el-table height="100%" border stripe :data="product" row-key="id">
            <el-table-column type="selection" fixed width="40"></el-table-column>
            <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
            <el-table-column prop="fill_in_date" fixed label="图号" align="left" width="120"></el-table-column>
            <el-table-column prop="notice_number" fixed label="品名" align="center" width="120"></el-table-column>
            <el-table-column prop="order_unit" fixed label="材质" align="center" width="120"></el-table-column>
            <el-table-column prop="delivery_date" label="数量" sortable align="center" width="120"></el-table-column>
            <el-table-column prop="delivery_place" label="交货日期" sortable align="center" width="120"></el-table-column>
            <el-table-column prop="state" label="备注" align="center" min-width="120"></el-table-column>
          </el-table>
        </div>
        <el-row>
          <el-form-item label="办理记录" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
        </el-row>
        <div class="handle">
          <el-table :data="handle" border class="custom-table">
            <el-table-column type="index" label="序号" align="right" width="50"></el-table-column>
            <el-table-column label="操作" prop="handle_name" width="120"></el-table-column>
            <el-table-column label="操作人" prop="handle_by" width="120"></el-table-column>
            <el-table-column label="操作日期" prop="handle_time" width="120"></el-table-column>
            <el-table-column label="操作结论" prop="handle_con" width="120"></el-table-column>
            <el-table-column label="操作意见" prop="handle_remark" min-width="120"></el-table-column>
            <!-- <el-table-column label="状态" prop="state" width="70"></el-table-column> -->
          </el-table>
        </div>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="save">保存</el-button>
        <el-button @click="close">取消</el-button>
      </div>
    </el-dialog>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import addProduct from './addProduct.vue'


@Component({
  components: {
    addProduct
  }
})
export default class DialogDetail extends Vue {
  public $refs!: {
    form: any,
    addProduct: any
  }

  title: string = '新增生产通知单'
  visible: boolean = false
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

  handle: any[] = [
    {
      handle_name: '系统数据',
      handle_by: ''
    },
    {
      handle_name: '',
      handle_by: ''
    },
  ]

  open(isNew = true) {
    if (isNew) {
      this.title = '新增生产通知单'
    } else {
      this.title = '修改生产通知单'
    }
    this.visible = true
  }
  change(){
    this.title = '更改生产通知单'
    this.visible = true
  }

  addProduct(){
       this.$refs.addProduct.open()
  }
  save() {
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
.el-dialog__wrapper {
  overflow: hidden;
  .el-dialog {
    max-height: 90vh;
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
        height: 25vh;
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
</style>
