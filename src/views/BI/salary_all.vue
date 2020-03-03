<template>
  <div class="outer">
    <div class="header">
        <!-- sdads -->
      <div class="form">
        <el-select class="select"  placeholder="活动区域">
          <el-option label="------2019--------" value="shanghai"></el-option>
          <el-option label="------2019--------" value="beijing"></el-option>
        </el-select>
        <el-select class="select"  placeholder="半年">
          <el-option label="------2019--------" value="shanghai"></el-option>
          <el-option label="------2019--------" value="beijing"></el-option>
        </el-select>
        <el-select class="select" placeholder="月份">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="2"></el-option>
          <el-option label="4" value="2"></el-option>
          <el-option label="5" value="2"></el-option>
        </el-select>
        <el-select class="select" placeholder="季度">
          <el-option label="------1--------" value="shanghai"></el-option>
          <el-option label="------2--------" value="beijing"></el-option>
          <el-option label="------4--------" value="beijing"></el-option>
          <el-option label="------3--------" value="beijing"></el-option>
        </el-select>
      </div>
    </div>
    <div class="tbody">
      <el-table :data="tableData" height="600px" width="400" border stripe style="width: 100%">
        <el-table-column label="序号" type="index" width="80"></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="m_time" label="机车产品工时"></el-table-column>
        <el-table-column prop="m_price" label="机车产品价钱"></el-table-column>
        <el-table-column prop="d_hour" label="日工小时数"></el-table-column>
        <el-table-column prop="d_price" label="日工价钱"></el-table-column>
        <el-table-column prop="a_hour" label="总工时"></el-table-column>
        <el-table-column prop="a_price" label="工时总价"></el-table-column>
        <el-table-column prop="a_salary" label="总价钱"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tableData: [
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
        {  name: '张三',m_time:805.35,m_price:6040.125,d_hour:6,d_price:1080,a_hour:805.35,a_price:6040.125,a_salary:7120.125 },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
    height: 50px !important;
    width:100%;
    display: block;
    // background: #444;
    .form{
        margin-left: 30px;
        .select{
            float: left;
            width: 180px;
            display: block;
        }
    }
    

}
.tbody {
  width: 800px;
  margin: 0 auto;
  padding: 0;
  
  display: block;
}
</style>