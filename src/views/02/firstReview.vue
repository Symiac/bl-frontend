<template>
  <el-dialog
    width="900px"
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="visible"
    append-to-body
    class="first"
  >
    <el-form>
      <el-row class="information">
        <el-col :span="7">
          <el-form-item label="图号" label-width="120px" prop="name">
            <el-input
              class="inline-input"
              style="width:100%"
              v-model="basics.drawingNumber"
              placeholder="自动填充"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="产品名称" label-width="120px" prop="type">
            <el-select
              v-model="basics.name"
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
            <el-select v-model="basics.number" style="width:150px" placeholder="产品工号" clearable>
              <el-option label="BL1901" value="01"></el-option>
              <el-option label="BL1902" value="02"></el-option>
              <el-option label="（历史记录）" value="03"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="table">
        <el-table height="100%" style="margin-top:10px" border stripe :data="product" row-key="id">
          <el-table-column type="index" fixed label="工序号" align="right" width="70"></el-table-column>
          <el-table-column prop="name" fixed label="工序名称" align="left" width="120"></el-table-column>
          <el-table-column prop="department" fixed label="部门/执行" align="center" width="120"></el-table-column>
          <el-table-column prop="equipmentID" fixed label="设备/供应商" align="center" width="120"></el-table-column>
          <el-table-column prop="debugHour" label="定额工时" align="center" width="120"></el-table-column>
          <el-table-column prop="quotaHour" label="调试工时" align="center" width="120"></el-table-column>
          <el-table-column prop="remark" label="备注" align="center" min-width="120"></el-table-column>
        </el-table>
      </div>
      <el-row>
        <el-form-item label="审核" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
      </el-row>
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
            <el-input type="textarea" :row="5" v-model="formDetail.handleRemark"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="save">保存</el-button>
      <el-button @click="close">关闭</el-button>
    </div>
  </el-dialog>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

@Component({
  components: {}
})
export default class DialogDetail extends Vue {
  public $refs!: {
    form: any
  }

  title: string = '审核'
  visible: boolean = false
  formDetail: any = {
    con: ''
  }
   basics: any = {
    name: 'D1118-02',
    orderUnit: 'NP-700齿轮',
    num: '5'
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

 

  open(isNew = true) {
    if (isNew) {
      this.title = '审核'
    } else {
      this.title = ''
    }
    this.visible = true
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
.first{
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
      .table {
        height: 35vh;
        margin-bottom: 20px;
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
