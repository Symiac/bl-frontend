<template>
  <el-dialog
    width="1000px"
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="visible"
    append-to-body
    class="look"
  >
    <layout :search="false">
      <template slot="operation">
        <div class="operation-left">
          <el-button type="primary" icon="el-icon-plus" @click="add()">添加派工单</el-button>
        </div>
      </template>

      <template slot="content">
        <el-form style="background:#fff;padding:10px;">
          <div class="d1">
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
                  v-model="basics.number"
                  placeholder="数量"
                  size="small"
                  style="width:150px;margin-left:20px"
                  :min="0"
                  :max="200"
                ></el-input-number>
                <el-button type="text" size="small" icon="el-icon-s-claim" :disabled="disable" @click="review()">单双机审核</el-button>
                <el-button type="text" size="small" icon="el-icon-check" :disabled="disable" @click="success()">完工确认</el-button>
                <el-button
                  type="text"
                  size="small"
                  icon="el-icon-warning-outline"
                  :disabled="disable"
                  @click="stop()"
                >终止</el-button>
                <el-button type="text" icon="el-icon-delete" disabled>删除</el-button>
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
            <el-table-column type="selection" fixed width="40"></el-table-column>
              <el-table-column type="index" fixed label="工序号" align="right" width="70"></el-table-column>
              <el-table-column prop="fillInDate" fixed label="工序名称" align="center" width="120"></el-table-column>
              <el-table-column prop="noticeNumber" label="部门" align="center" width="120"></el-table-column>
              <el-table-column prop="orderUnit" label="设备" align="center" width="120"></el-table-column>
              <el-table-column prop="p" label="姓名" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.p"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="number" label="数量" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.number"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="deliveryDate" label="定额工时" align="center" width="120"></el-table-column>
              <el-table-column prop="deliveryPlace" label="调试工时" align="center" width="120"></el-table-column>
              <el-table-column prop="d" label="实动工时" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.d"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="h" label="合格" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.h"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="dt" label="调试合格" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.dt"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="s" label="待处理" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.s"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="ee" label="工废" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.ee"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="e" label="废料" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.e"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="state" label="质检确认" align="center" min-width="120"></el-table-column>
            </el-table>
          </div>
          <div :class="d2">
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
                ></el-input-number>
                <el-button type="text" size="small" icon="el-icon-s-claim" :disabled="disable" @click="review()">单双机审核</el-button>
                <el-button type="text" size="small" icon="el-icon-check" :disabled="disable" @click="success()">完工确认</el-button>
                <el-button
                  type="text"
                  size="small"
                  icon="el-icon-warning-outline"
                  :disabled="disable"
                  @click="stop()"
                >终止</el-button>
                <el-button
                  type="text"
                  icon="el-icon-delete"
                  :disabled="disable"
                  @click="deletes()"
                >删除</el-button>
              </el-form-item>
            </el-row>

            <el-table
              height="100%"
              border
              stripe
              style="margin-bottom:10px"
              :data="products"
              row-key="id"
            >
            <el-table-column type="selection" fixed width="40"></el-table-column>
              <el-table-column type="index" fixed label="工序号" align="right" width="70"></el-table-column>
              <el-table-column prop="fillInDate" fixed label="工序名称" align="center" width="120"></el-table-column>
              <el-table-column prop="noticeNumber" label="部门" align="center" width="120"></el-table-column>
              <el-table-column prop="orderUnit" label="设备" align="center" width="120"></el-table-column>
              <el-table-column prop="p" label="姓名" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.p"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="number" label="数量" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.number"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="deliveryDate" label="定额工时" align="center" width="120"></el-table-column>
              <el-table-column prop="deliveryPlace" label="调试工时" align="center" width="120"></el-table-column>
              <el-table-column prop="d" label="实动工时" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.d"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="h" label="合格" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.h"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="dt" label="调试合格" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.dt"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="s" label="待处理" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.s"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="ee" label="工废" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.ee"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="e" label="废料" align="center" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.e"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="state" label="质检确认" align="center" min-width="120"></el-table-column>
            </el-table>
          </div>
        </el-form>
      </template>
    </layout>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="save">提交</el-button>
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

  visible: boolean = false
  disable: boolean = false
  title: string = '派工'
  d2: string = 'd'
  basics: any = {
    danhao: '2019001',
    number: '50',
    danhao2: '2019002',
    number2: '150'
  }
  products: any[] = [
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
  add() {
    this.d2 = 'd1'
  }
  deletes() {
    this.d2 = 'd'
  }
  open(isNew) {
    if (isNew) {
      this.title = '派工'
    } else {
      this.title = '修改派工单'
    }
    this.visible = true
  }
  close() {
    this.visible = false
  }
  stop(){
    this.$alert('您确定终止本派工单？', '错误提示', {
      confirmButtonText: '确定',
      type: 'error',
      callback: action => {
        // this.$message({
        //   type: 'info',
        //   message: `action: ${action}`
        // })
        if (action === 'confirm') {
          this.$confirm('此操作将终止本派工单, 是否继续?', '操作提示', {
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            type: 'warning'
          })
            .then(() => {
              this.$alert('已终止本派工单！', '操作成功', {
                confirmButtonText: '确定',
                type: 'success'
              })
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '已取消操作'
              })
            })
        }
      }
    })
  }
  success(){
     this.$confirm('是否更改派工单状态为完工?', '操作提示', {
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      type: 'warning'
    })
      .then(() => {
        this.$alert('已确认完工！', '操作成功', {
          confirmButtonText: '确定',
          type: 'success'
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消确认'
        })
      })
  }
   review(){
     this.$confirm('工序4【精车】设计为双机工序,操作者单机完成，如何计算工时？', '操作提示', {
      cancelButtonText: '单机',
      confirmButtonText: '双机',
      type: 'warning'
    })
      .then(() => {
        this.$alert('已确认按双击计算工时！', '操作成功', {
          confirmButtonText: '确定',
          type: 'success'
        })
      })
      .catch(() => {
        this.$alert('将按单机计算工时！', '操作成功', {
          confirmButtonText: '确定',
          type: 'success'
        })
      })
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
.d {
  display: none;
}
</style>