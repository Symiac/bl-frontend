<template>
    <div class="outer">
        <div class="header"></div>
        <div class="tbody">
            <el-table
                :data="tableData"
                height='600px'
                width='400'
                border
                stripe
                style="width: 100%">
                <el-table-column
                label="序号"
                type='index'
                width="80">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="80">
                </el-table-column>
                <el-table-column
                prop="submit_num"
                label="交验数">
                </el-table-column>
                <el-table-column
                prop="submit_once_num"
                label="一次校验合格数">
                </el-table-column>
                <el-table-column
                prop="return_num"
                label="返修数">
                </el-table-column>
                <el-table-column
                prop="trash_num"
                label="废品数">
                </el-table-column>
                <el-table-column
                prop="once_success_rate"
                label="一次校验合格率">
                </el-table-column>
                <el-table-column
                prop="return_rate"
                label="返修率">
                </el-table-column>
                <el-table-column
                prop="trash_rate"
                label="废品率">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data:()=>{
            return {
                tableData: [
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    {name: '王小虎',submit_num: 100,submit_once_num:80,return_num:10,trash_num:10,once_success_rate:'80%',return_rate:'10%',trash_rate:'10%'},
                    ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tbody{
        width:800px;
        margin:0 auto;
        padding: 0;
    }
</style>