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
              v-model="basics.drawingNumber"
              placeholder="自动填充"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="产品名称" label-width="120px" prop="type">
            <el-input v-model="basics.name" style="width:120px" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="数量" label-width="120px" prop="area">
            <el-input v-model="basics.number" style="width:120px" placeholder="产品工号" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 22px" :class='add'>
        <el-button type="primary" icon="el-icon-plus" @click="Add">添加工艺表</el-button>
      </el-row>
      <div class="tab">
        <div class="t1">
          <el-row>
            <el-form-item
              label="工艺表"
              v-model="basics.nnn"
              style=" width:100%;font-weight:bold;background:#fafafa;margin-bottom: 0px"
            >
              
              <el-input-number
                v-model="basics.number1"
                placeholder="数量"
                size="small"
                style="width:150px"
                :min="0"
                :max="5"
              ></el-input-number>
              <el-select
                v-model="basics.version"
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
              <el-button-group>
                <el-button type="text" icon="el-icon-plus" @click="thirdadd">新建工艺版本</el-button>
                <el-button type="text" icon="el-icon-edit" @click="thirdadd2">修改工艺版本</el-button>
                <el-tooltip content="删除此工艺表" placement="top-start" effect="light">
                </el-tooltip>
              </el-button-group>
            </el-form-item>
          </el-row>
          <el-table
            :style="theight"
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
              <template slot-scope="scope">
                <el-input v-model="scope.row.remark"></el-input>
              </template>
            </el-table-column>
            <!--
            <el-table-column label="操作" align="center" width="110">
              <template slot-scope="scope">
                <el-tooltip content="添加设备" placement="top-start" effect="light">
                  <el-button type="text" icon="el-icon-plus" size="small"></el-button>
                </el-tooltip>
                <el-tooltip content="删除本道工序" placement="top-end" effect="light">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, product)"
                    type="text"
                    icon="el-icon-delete"
                    size="small"
                  ></el-button>
                </el-tooltip>
              </template>
            </el-table-column>
            -->
          </el-table>
        </div>
        <!-- 新增的工艺表  -->
        <div :class="t2">
          <el-row>
            <el-form-item
              label="工艺表二"
              style=" width:100%;font-weight:bold;background:#fafafa;margin-bottom: 0px; margin-top:20px"
            >
              
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
              <el-button-group>
                <el-button type="text" icon="el-icon-plus" @click="thirdadd">新建工艺版本</el-button>
                <el-button type="text" icon="el-icon-edit" @click="thirdadd2">修改工艺版本</el-button>
                <el-tooltip content="删除此工艺表" placement="top-start" effect="light">
                  <el-button type="text" icon="el-icon-delete" @click="thirddelete">删除</el-button>
                </el-tooltip>
              </el-button-group>
            </el-form-item>
          </el-row>
          <el-table
            :style="theight"
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
              <template slot-scope="scope">
                <el-input v-model="scope.row.remark"></el-input>
              </template>
            </el-table-column>
            <!--
            <el-table-column label="操作" align="center" width="110">
              <template slot-scope="scope">
                <el-tooltip content="添加设备" placement="top-start" effect="light">
                  <el-button type="text" icon="el-icon-plus" size="small"></el-button>
                </el-tooltip>
                <el-tooltip content="删除本道工序" placement="top-end" effect="light">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, product2)"
                    type="text"
                    icon="el-icon-delete"
                    size="small"
                  ></el-button>
                </el-tooltip>
              </template>
            </el-table-column>
            -->
          </el-table>
        </div>
      </div>
      <six-add ref="six"></six-add>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="close">提交</el-button>
      <el-button @click="close">关闭</el-button>
    </div>
  </el-dialog>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import SixAdd from './sixAdd.vue'

@Component({
  components: {
      SixAdd
  }
})
export default class DialogDetail extends Vue {
  public $refs!: {
     six: any
  }

  theight: string = ''
  t2: string = 't2'
  add:string='a'
  title: string = '新增生产通知单'
  visible: boolean = false
  formDetail: any = {
    con: ''
  }
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
  basics: any = {
    drawingNumber: 'D1118-02',
    name: 'NP-700齿轮',
    number: '5',
    number1: '',
    number2: '',
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
    }
  ]
  product2: any[] = [
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },{
      orderNumber: ''
    },{
      orderNumber: ''
    },{
      orderNumber: ''
    }
  ]

  thirdadd() {
    /*
    const add = {
      name: '输入...'
    }

    this.product.unshift(add)
    this.theight = 'height:100%'
    */
       this.$refs.six.open(true)
  }
  thirdadd2() {
       this.$refs.six.open(false)
  }

  thirddelete() {
    this.t2 = 't2'
  }
  deleteRow(index, rows) {
    rows.splice(index, 1)
  }
  Add() {
    this.t2 = 't'
  }
  open(isNew) {
    switch (isNew) {
      case '2': {
        this.title = '产品通知工艺设计'
        this.add='add'
        this.visible = true
        break
      }
      case '3': {
        this.add='a'
        this.title = '返修处理'
        this.visible = true
        break
      }
      case '4': {
        this.add='add'
        this.title = '工装产品工艺设计'
        this.visible = true
        break
      }
    }
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
      .information {
        margin-top: 20px;
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
.add{
  display: none;
}
</style>
