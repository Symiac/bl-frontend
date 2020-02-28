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
          <el-col :span="7">
            <el-form-item label="图号" label-width="120px" prop="name">
              <el-input
                class="inline-input"
                style="width:100%"
                v-model="basics.name"
                placeholder="自动填充"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="产品名称" label-width="120px" prop="type">
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
            <el-form-item label="数量" label-width="120px" prop="area">
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

          <el-table height="100%" style="margin-top:10px" border stripe :data="product" row-key="id">
            <el-table-column type="selection" fixed width="40"></el-table-column>
            <el-table-column type="index" fixed label="工序号" align="right" width="70"></el-table-column>
            <el-table-column prop="fill_in_date" fixed label="工序名称" align="left" width="120"></el-table-column>
            <el-table-column prop="notice_number" fixed label="部门/执行" align="center" width="120"></el-table-column>
            <el-table-column prop="order_unit" fixed label="设备/供应商" align="center" width="120"></el-table-column>
            <el-table-column prop="delivery_date" label="定额工时" align="center" width="120"></el-table-column>
            <el-table-column prop="delivery_place" label="调试工时" align="center" width="120"></el-table-column>
            <el-table-column prop="state" label="备注" align="center" min-width="120"></el-table-column>
          </el-table>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="close">关闭</el-button>
      </div>
    </el-dialog>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'



@Component({
  components: {

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
      this.title = '查看设计详情'
    } else {
      this.title = '设计详情'
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
    height: 90vh;
    margin-top: 5vh !important;
    display: flex;
    flex-direction: column;
    .el-dialog__body {
      flex: 1;
      // height: 450px;
      overflow: auto;
      .information{
        margin-top: 20px;
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
