<template>
    <el-dialog
      width="900px"
      :close-on-click-modal="false"
      :title="title"
      :visible.sync="visible"
      append-to-body
      class="dd"
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
                          <el-input v-model="basics.orderUnit" style="width:120px" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="数量" label-width="120px" prop="area">
                          <el-input v-model="basics.num" style="width:120px" placeholder="产品工号" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>

         <div class="tab">
        <div>
          <el-row>
            <el-form-item
              label="工艺表一"
              v-model="basics.nnn"
              style=" width:100%;font-weight:bold;background:#fafafa;margin-bottom: 0px"
            >
            <!--
              <el-button-group>
                <el-button type="text" icon="el-icon-plus" @click="thirdadd">新增</el-button>
                <el-tooltip content="删除此工艺表" placement="top-start" effect="light">
                  <el-button type="text" icon="el-icon-delete" @click="thirddelete" disabled>删除</el-button>
                </el-tooltip>
              </el-button-group>
              -->
              <el-input-number
                v-model="basics.number1"
                placeholder="数量"
                size="small"
                style="width:150px"
                :min="0"
                :max="5"
                disabled
              ></el-input-number>
              <el-select
                v-model="basics.version"
                placeholder="选择工艺版本"
                style="width:150px;margin-left:10px;"
                clearable
                disabled
              >
                <el-option label="版本A" value="01"></el-option>
                <el-option label="版本B" value="02"></el-option>
                <el-option label="版本C" value="04"></el-option>
                <el-option label="版本D" value="05"></el-option>
                <el-option label="（可以选择的版本列表）" value="06"></el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <el-table
            style="margin-top:0px"
            border
            stripe
            :data="product"
            row-key="id"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
          >
            <el-table-column type="index" fixed label="工序号" align="right" width="70"></el-table-column>
            <el-table-column prop="name" fixed label="工序名称" align="left" width="110"></el-table-column>
            <el-table-column prop="department" fixed label="部门/执行" align="center" width="120"></el-table-column>
            <el-table-column prop="equipmentID" fixed label="设备/供应商" align="center" width="120"></el-table-column>
            <el-table-column prop="debugHour" label="定额工时" align="center" width="110"></el-table-column>
            <el-table-column prop="quotaHour" label="调试工时" align="center" width="110"></el-table-column>
            <el-table-column prop="remark" label="备注" align="center" min-width="100">
            </el-table-column>
           
          </el-table>
        </div>
        <!-- 新增的工艺表  -->
        <div>
          <el-row>
            <el-form-item
              label="工艺表二"
              style=" width:100%;font-weight:bold;background:#fafafa;margin-bottom: 0px; margin-top:20px"
            >
             <!--   
               <el-button-group>
              <el-button type="text" icon="el-icon-plus" @click="thirdadd2">新增</el-button>  
                <el-tooltip content="删除此工艺表" placement="top-start" effect="light">
                  <el-button type="text" icon="el-icon-delete" @click="thirddelete">删除</el-button>
                </el-tooltip>
              </el-button-group>
              -->
              <el-input-number
                v-model="basics.number2"
                placeholder="数量"
                size="small"
                style="width:150px"
                :min="0"
                :max="5"
              ></el-input-number>
              <el-select
                v-model="basics.version2"
                placeholder="选择工艺版本"
                style="width:150px;margin-left:10px;"
                clearable
              >
                <el-option label="版本A" value="01"></el-option>
                <el-option label="版本B" value="02"></el-option>
                <el-option label="版本C" value="04"></el-option>
                <el-option label="版本D" value="05"></el-option>
                <el-option label="（可以选择的版本列表）" value="06"></el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <el-table
            style="margin-top:0px"
            border
            stripe
            :data="product2"
            row-key="id"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
          >
            <el-table-column type="index" fixed label="工序号" align="right" width="70"></el-table-column>
            <el-table-column prop="name" fixed label="工序名称" align="left" width="110"></el-table-column>
            <el-table-column prop="department" fixed label="部门/执行" align="center" width="120"></el-table-column>
            <el-table-column prop="equipmentID" fixed label="设备/供应商" align="center" width="120"></el-table-column>
            <el-table-column prop="debugHour" label="定额工时" align="center" width="110"></el-table-column>
            <el-table-column prop="quotaHour" label="调试工时" align="center" width="110"></el-table-column>
            <el-table-column prop="remark" label="备注" align="center" min-width="100">
            </el-table-column>
          </el-table>
        </div>
      </div>
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

  }

  title: string = '新增生产通知单'
  visible: boolean = false
  formDetail: any = {
    con: ''
  }
   basics: any = {
    name: 'D1118-02',
    orderUnit: 'NP-700齿轮',
    num: '5',
    number1:'',
    number2:'',
    version: '工艺版本A',
    version2: '工艺版本B'
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
  ]
product2: any[] = [
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
]
  handle: any[] = [
    {
      handleName: '系统数据',
      handleBy: ''
    },
    {
      handleName: '',
      handleBy: ''
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
.dd{
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
