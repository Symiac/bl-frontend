<template>
  <div class="outer">
    <div class="header">
        <!-- sdads -->
      <div class="form">
        <el-select class="select"  placeholder="活动区域" v-model="form.nn">
          <el-option label="------2019--------" value="shanghai"></el-option>
          <el-option label="------2019--------" value="beijing"></el-option>
        </el-select>
        <el-select class="select"  placeholder="半年" v-model="form.nn">
          <el-option label="------2019--------" value="shanghai"></el-option>
          <el-option label="------2019--------" value="beijing"></el-option>
        </el-select>
        <el-select class="select" placeholder="月份" v-model="form.nn">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="2"></el-option>
          <el-option label="4" value="2"></el-option>
          <el-option label="5" value="2"></el-option>
        </el-select>
        <el-select class="select" placeholder="季度" v-model="form.nn">
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
        <el-table-column prop="date" label="日期" width="100"></el-table-column>
        <el-table-column prop="submit_num" label="线路单号"></el-table-column>
        <el-table-column prop="submit_once_num" label="图号"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="trash_num" label="工序"></el-table-column>
        <el-table-column prop="once_success_rate" label="投产数量"></el-table-column>
        <el-table-column prop="return_rate" label="合格数量"></el-table-column>
        <el-table-column prop="trash_rate" label="废料"></el-table-column>
        <el-table-column prop="trash_rate" label="工废"></el-table-column>
        <el-table-column prop="trash_rate" label="工时"></el-table-column>
        <el-table-column prop="trash_rate" label="价钱"></el-table-column>
        <el-table-column prop="trash_rate" label="总工时"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tableData: [
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' },
        { date: '2019-2-1', submit_num: 100, submit_once_num: 80, name: '台车轴', trash_num: 10, once_success_rate: '80', return_rate: '10', trash_rate: '10' }
      ],
      form:{

      }
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