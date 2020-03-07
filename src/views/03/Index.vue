<template>
<el-tabs value="first" style="width:auto; padding:0 20px; margin-top:0px;">
 <el-tab-pane label="产品派工" name="first">
      <layout style="padding:0 0;">
    <template slot="operation">
      <div class="operation-left">
        <div class="order">
          <div class="order_title" @click="show">
            <p class="text">19-034</p>
            <p class="text">东亚利根</p>
          </div>
        </div>

        <div class="order">
          <div class="order_title" @click="show2">
            <p class="text">19-035</p>
            <p class="text">东亚利根</p>
          </div>
        </div>
      </div>
    </template>
    <template slot="content">
      <div :class="s1">
        <el-form style="background:#fff;padding:10px;">
          <el-row>
            <el-form-item label="基础信息" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
          </el-row>
          <el-table
            height="100%"
            border
            stripe
            :data="basic"
            row-key="id"
            @row-dblclick="DoubleClick2"
            style="margin-bottom: 10px; color:#000">
            <el-table-column prop="f" fixed label="通知单号" align="center" width="120"></el-table-column>
            <el-table-column prop="n" fixed label="订货单位" align="center" width="120"></el-table-column>
            <el-table-column prop="or" fixed label="填单日期" align="center" width="120"></el-table-column>
            <el-table-column prop="da" label="交货日期"  align="center" width="120"></el-table-column>
            <el-table-column prop="p" label="交货地点"  align="center" width="120"></el-table-column>
            <el-table-column prop="dd" label="交货状态" align="center" width="120"></el-table-column>
            <el-table-column prop="r" label="运输方式" align="center" width="120"></el-table-column>
            <el-table-column prop="nn" label="产品工号" align="center" min-width="100"></el-table-column>
        
          </el-table>
          <el-row>
            <el-form-item label="产品信息" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
          </el-row>
          <el-table
            height="100%"
            border
            stripe
            :data="tableData"
            row-key="id"
            @row-dblclick="DoubleClick2">
            <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
            <el-table-column prop="fillInDate" fixed label="图号" align="center" width="100"></el-table-column>
            <el-table-column prop="noticeNumber" fixed label="品名" align="center" width="100"></el-table-column>
            <el-table-column prop="materialQuality" fixed label="材质" align="center" width="100"></el-table-column>
            <el-table-column prop="number" label="数量" sortable align="center" width="100"></el-table-column>
            <el-table-column prop="deliveryPlace" label="交货日期" sortable align="center" width="120"></el-table-column>
            <el-table-column prop="dd" label="状态" align="center" width="100"></el-table-column>
            <el-table-column prop="remark" label="备注" align="center" min-width="100"></el-table-column>
            <el-table-column label="操作" align="center" width="350">
              <template slot-scope="scope">
                <el-button @click="lookRow()" type="text" icon="el-icon-view" size="small">查看</el-button>

                <el-button @click="distribute()" type="text" icon="el-icon-s-order" size="small">派工</el-button>

                <el-button @click="edit()" type="text" icon="el-icon-edit" size="small">修改</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form>
      </div>
      <div :class="s2">
        <el-form style="background:#fff;padding:10px;">
          <el-row>
            <el-form-item label="基础信息" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
          </el-row>
          <el-table
            height="100%"
            border
            stripe
            :data="basic"
            row-key="id"
            @row-dblclick="DoubleClick2"
            style="margin-bottom: 10px; color:#000">
            <el-table-column prop="f" fixed label="通知单号" align="center" width="120"></el-table-column>
            <el-table-column prop="n" fixed label="订货单位" align="center" width="120"></el-table-column>
            <el-table-column prop="or" fixed label="填单日期" align="center" width="120"></el-table-column>
            <el-table-column prop="da" label="交货日期"  align="center" width="120"></el-table-column>
            <el-table-column prop="p" label="交货地点"  align="center" width="120"></el-table-column>
            <el-table-column prop="dd" label="交货状态" align="center" width="120"></el-table-column>
            <el-table-column prop="r" label="运输方式" align="center" width="120"></el-table-column>
            <el-table-column prop="nn" label="产品工号" align="center" min-width="100"></el-table-column>
        
          </el-table>
          <el-row>
            <el-form-item label="产品信息" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
          </el-row>
          <el-table
            height="100%"
            border
            stripe
            :data="tableDatas"
            row-key="id"
            @row-dblclick="DoubleClick2"
          >
            <el-table-column type="index" fixed label="序号" align="right" width="50"></el-table-column>
            <el-table-column prop="fillInDate" fixed label="图号" align="center" width="100"></el-table-column>
            <el-table-column prop="noticeNumber" fixed label="品名" align="center" width="100"></el-table-column>
            <el-table-column prop="materialQuality" fixed label="材质" align="center" width="100"></el-table-column>
            <el-table-column prop="number" label="数量" sortable align="center" width="100"></el-table-column>
            <el-table-column prop="delivery" label="交货日期" sortable align="center" width="120"></el-table-column>
            <el-table-column prop="dd" label="状态" align="center" width="100"></el-table-column>
            <el-table-column prop="remark" label="备注" align="center" min-width="100"></el-table-column>
            <el-table-column label="操作" align="center" width="350">
              <template slot-scope="scope">
                <el-button @click="lookRow()" type="text" icon="el-icon-view" size="small">查看</el-button>
                     <Look ref="look"></Look>
                <el-button @click="distribute()" type="text" icon="el-icon-s-order" size="small">派工</el-button>
                      <Distribute ref="distribute"></Distribute>
                <el-button @click="edit()" type="text" icon="el-icon-edit" size="small">修改</el-button>
              </template>
             
            </el-table-column>
          </el-table>
        </el-form>
      </div>
    </template>
  </layout>
 </el-tab-pane>
 <el-tab-pane label="工装产品下单" name="four">
      <layout style="padding:0 0;">
        <template slot="search">
          <el-form inline :model="basics">
            <div class="search-left">
              <el-form-item>
                <el-select
                  v-model="basics.drawingNumber"
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
                  v-model="basics.na"
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
             <el-button type="primary" icon="el-icon-plus" @click="fourAdd()">添加工装件</el-button>
            <el-button type="primary" icon="el-icon-edit" @click="fourEdit()">修改工装件</el-button>
            <el-button type="primary" icon="el-icon-delete">删除</el-button>
             <four-add ref="four"></four-add>
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
</el-tabs>


</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Layout from '@/views/_common/Layout.vue'
import Look from './look.vue'
import Distribute from './distribute.vue'
import FourAdd from '../02/fourAdd.vue'

@Component({
  components: {
    Layout,
    Look,
    Distribute,
    FourAdd 
  }
})
export default class Index extends Vue {
  public $refs!: {
    look: any,
    distribute: any,
    four: any
  }

  s1: string = 's1'
  s2: string = 's2'
first: string ='first'
  basics: any = {
    name: '19-034',
    names: '19-035',
    orderUnit: '东亚利根'
  }

basic:any[]=[{
    f:'19-034',
    n:'东亚利根',
    or:'2020-03-20',
    p:'大窑湾港',
    da:'2020-09-21',
    dd:'成品',
    r:'汽运',
    nn:'BL1901'
}]
  tableData: any[] = [
    {
      number:'200',
      dd: '待处理'
    },
    {
   number:'100',
      dd: '待处理'
    },
    {
    number:'250',
      dd: '已处理'
    },
    {
       number:'300',
      dd: '已处理'
    },
    {
       number:'200',
      dd: '已处理'
    }
  ]

  tableDatas: any[] = [
    {
       number:'200',
      dd: '待处理'
    },
    {
       number:'100',
      dd: '待处理'
    },
    {
       number:'100',
      dd: '待处理'
    },
    {
       number:'200',
      dd: '待处理'
    },
    {
       number:'200',
      dd: '已处理'
    },
    {
       number:'300',
      dd: '已处理'
    },
    {
       number:'300',
      dd: '已处理'
    },
    {
       number:'250',
      dd: '已处理'
    }
  ]
  show() {
      
    this.s2 = 's2'
    this.basic[0].f='19-034'
    this.basic[0].or='2020-02-30'
    this.basic[0].nn='BL1901'
    this.s1 = 's'
  }
  show2() {
    this.s1 = 's1'
    this.basic[0].f='19-035'
    this.basic[0].or='2020-03-01'
    this.basic[0].nn='BL1902'
    this.s2 = 's'
  }
  lookRow(){
    this.$refs.look.open()
  }
  distribute(){
    this.$refs.distribute.open(true)
  }
  edit() {
    this.$refs.distribute.open(false)
  }
   fourAdd() {
    this.$refs.four.open(true)
  }
  fourEdit() {
    this.$refs.four.open(false)
  }
  DoubleClick2(){}
}
</script>

<style lang="scss">
.order {
  float: left;
  display: inline;
  border: 1px solid #ccc;
  margin-right: 30px;
  border-radius: 15px;
  .order_title {
    width: 120px;
    color: #000;
    height: 60px;
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
  height: 100px;
  display: none;
}
</style>
