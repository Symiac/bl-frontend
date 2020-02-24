<template>
  <div class="a23-q">
    
    <el-form-item prop>
      <el-input style="width:100px" v-model="formQuery.manufacturer" clearable placeholder="生产厂商"></el-input>
    </el-form-item>
    <el-form-item prop="name">
      <el-input style="width:100px" v-model="formQuery.variety" clearable placeholder="办理单位"></el-input>
    </el-form-item>
    <el-form-item prop="keyword">
      <el-input style="width:100px" v-model="formQuery.keyword" clearable placeholder="办理人"></el-input>
    </el-form-item>

    <el-form-item>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="办理时间"
        end-placeholder="办理时间"
        class="data"
        prefix-icon="date-icon"
      ></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-select
        v-model="formQuery.state"
        style="width:150px"
        placeholder="状态"
        clearable
        multiple
        collapse-tags
      >
        <el-option label="已提交" value="01"></el-option>
        <el-option label="已通过" value="02"></el-option>
       
      </el-select>
    </el-form-item>
    <!--
      <el-form-item style="padding-left:20px">
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
  value1: string = ''
}
</script>
<style lang="scss">
.a23-q {
  //起止日期
  .el-date-editor--daterange.el-input__inner {
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
}
</style>