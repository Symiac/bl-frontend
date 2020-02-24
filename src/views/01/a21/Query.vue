<template>
  <div>
    
    <el-form-item label prop="category1">
      <el-select style="width:120px" v-model="formQuery.category1" placeholder="类目一" clearable>
        <el-option label="服务器用" value="01"></el-option>
        <el-option label="个人终端" value="02"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label prop="category2">
      <el-select style="width:120px" v-model="formQuery.category2" placeholder="类目二" clearable>
        <el-option label="操作系统" value="01"></el-option>
        <el-option label="数据库" value="02"></el-option>
        <el-option label="中间件" value="03"></el-option>
        <el-option label="安全杀毒" value="04"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="name">
      <el-input style="width:100px" v-model="formQuery.variety" clearable placeholder="软件品种"></el-input>
    </el-form-item>
    <el-form-item prop>
      <el-input style="width:100px" v-model="formQuery.keyword" clearable placeholder="软件规格"></el-input>
    </el-form-item>
    <el-form-item prop>
      <el-input style="width:100px" v-model="formQuery.name" clearable placeholder="软件版本"></el-input>
    </el-form-item>
   
    <el-form-item>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="申请时间"
              end-placeholder="申请时间"
              class="data"
              prefix-icon="date-icon"
            ></el-date-picker>
          </el-form-item>
           <el-form-item>
      <el-select
        v-model="formQuery.state"
        style="width:140px"
        placeholder="状态"
        clearable
        multiple
        collapse-tags
      >
      <el-option label="暂存" value="00"></el-option>
        <el-option label="已提交" value="01"></el-option>
        <el-option label="已通过" value="02"></el-option>
        <el-option label="不通过" value="03"></el-option>
      </el-select>
    </el-form-item>
    <!--
    <el-form-item style="padding-left:20px">
      <el-checkbox checked>填报中</el-checkbox>
      <el-checkbox checked>待审核</el-checkbox>
      <el-checkbox checked>已审核</el-checkbox>
    </el-form-item>
    -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'


const vuex = namespace('A21')

@Component
export default class Index extends Vue {
  @Prop({ type: Object, default: () => ({}) }) readonly formQuery //    详情表单
  value1: string =''
}
</script>


<style lang="scss">

  //起止日期
  .el-date-editor--daterange.el-input__inner{
    width: 250px;
  }
  .data {
    width: 100px;
    height: 30px;
    line-height: 30px;
    // padding: 0 15px !important;
    .el-icon-circle-close {
    line-height: 22px;
  }
  }
  .el-date-editor .el-range__icon {
    line-height: 25px;
  }
  .el-date-editor .el-range-separator {
    line-height: 23px;
  }
 
  //起止日期结束
</style>