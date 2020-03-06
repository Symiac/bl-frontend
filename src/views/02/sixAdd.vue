<template>
  <el-dialog
    width="900px"
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="visible"
    append-to-body
    class="six"
  >
    <el-form class="information">
      <el-row>
        <el-col :span="7">
          <el-form-item label="工艺版本" label-width="120px" prop="area">
            <el-select
              v-model="basics.versionId"
              style="width:150px"
              placeholder="输入工艺版本号"
              clearable
            >
              <el-option label="BL1901" value="01"></el-option>
              <el-option label="BL1902" value="02"></el-option>
              <el-option label="（历史记录）" value="03"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="图号" label-width="120px" prop="name">
            <el-input
              class="inline-input"
              style="width:100%"
              v-model="basics.drawingNumber"
              placeholder="输入图号"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="产品名称" label-width="120px" prop="type">
            <el-select
              v-model="basics.name"
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
      <el-row>
        <el-button-group>
          <el-button type="text" icon="el-icon-plus" @click="add">新增</el-button>
        </el-button-group>
      </el-row>
      <el-table
        :style="theight"
        style="margin-top:10px"
        border
        stripe
        :data="product"
        row-key="id"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column type="index" fixed label="工序号" align="right" width="70"></el-table-column>
        <el-table-column prop="name" fixed label="工序名称" align="left" width="110">
          <template slot-scope="scope">
            <el-input v-model="scope.row.name"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="department" fixed label="部门/执行" align="center" width="120">
          <template slot-scope="scope">
            <el-select v-model="scope.row.department" @change="onSelectChange">
              <el-option
                v-for="option in options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="equipmentID" fixed label="设备/供应商" align="center" width="120">
          <template slot-scope="scope">
            <el-input v-model="scope.row.equipmentID"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="debugHour" label="定额工时" align="center" width="110">
          <template slot-scope="scope">
            <el-input v-model="scope.row.debugHour"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="quotaHour" label="调试工时" align="center" width="110">
          <template slot-scope="scope">
            <el-input v-model="scope.row.quotaHour"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注" align="center" min-width="100">
          <template slot-scope="scope">
            <el-input v-model="scope.row.remark"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="110">
          <template slot-scope="scope">
             <el-tooltip content="添加设备" placement="top-start" effect="light">
            <el-button
              @click="addRow()"
              type="text"
              icon="el-icon-plus"
              size="small"
            ></el-button>
             </el-tooltip>
            <el-tooltip content="删除本道工序" placement="top-end" effect="light">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, product)"
              type="text"
              icon="el-icon-delete"
              size="small"
            ></el-button>
            </el-tooltip>
        <add-product ref="addproduct"></add-product>    
          </template>
        </el-table-column>
      </el-table>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="save">提交</el-button>
      <el-button @click="close">关闭</el-button>
    </div>
  </el-dialog>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import AddProduct from './addProduct.vue'

@Component({
  components: {
    AddProduct
  }
})
export default class DialogDetail extends Vue {
  public $refs!: {
    form: any
    addproduct:any
  }
  theight: string = ''
  title: string = '新增工艺版本'
  visible: boolean = false
  formDetail: any = {
    con: ''
  }
  basics: any = {
    radio: '1'
  }
  product: any[] = [
    {
      id: '1',
      orderNumber: '1'
    },
    {
      id: '2',
      orderNumber: '2'
    },
    {
      id: '3',
      orderNumber: '3',
      equipmentID: '加工'
      /* children: [{
              id: '',
              equipmentID:'设备A',
              
            }, {
              id: '',
              equipmentID:'设备B',
          }]
          */
    },
    {
      id: '4',
      orderNumber: '4'
    }
  ]

  options: any[] = [
    {
      value: '00',
      label: '采购'
    },
    {
      value: '01',
      label: '加工'
    },
    {
      value: '02',
      label: '外协'
    }
  ]

  open(isNew = true) {
    if (isNew) {
      this.title = '新增工艺版本'
    } else {
      this.title = '修改工艺版本'
    }
    this.visible = true
  }
  add() {
    const add = {
      name: '输入...'
    }

    this.product.unshift(add)
    this.theight = 'height:100%'
  }

  deleteRow(index, rows) {
    rows.splice(index, 1)
  }
  addRow() {
    this.$refs.addproduct.open()
  }
  onSelectChange() {}
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
.six{
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
}
</style>
