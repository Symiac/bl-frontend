<template>
  <div>
    <div class="outer">
    <div class="header"></div> 
    <div class="summary">
        
    </div>
    <div class="charts">
        <div id="myChart" class="chart" :style="{width: '360px', height: '360px'}">工时统计</div>
        <div id="myChart1" :style="{width: '360px', height: '360px'}">机器利用率</div>
    </div>
    </div>
    
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name:'euqipment',
    data:()=>{
        return {
            msg:''
        }
    },
    mounted(){
        window.setInterval(10,this.drawinit())
    },
    created(){
        
    }
    ,
    methods:{
        drawinit:()=>{
            // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        let myChart2 = echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        let dataAxis = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        let data = [148,125,138,124,123,145,126,178,126,127,98,129];
        let data2 = [1.48,1.25,1.38,1.24,1.23,1.45,1.26,1.78,1.26,1.27,.98,1.29];

        myChart.setOption({
            title: { text: '工时统计' },
            tooltip: {},
            xAxis: {
                data: dataAxis
            },
            yAxis: {},
            series: [{
                name: '工时',
                type: 'bar',
                data: data
            }]
        });
        myChart2.setOption({
            title: { text: '机器利用率' },
            tooltip: {},
            xAxis: {
                data: dataAxis
            },
            yAxis: {},
            series: [{
                name: '工时',
                type: 'line',
                data: data2
            }]
        });
        }
    }
}
</script>

<style lang="css" scoped>
    .outer{
        height: 100%;
        width: 100%;
    }
    .header{
        width: 100%;
        height: 120px;
        background: linear-gradient(#334,rgb(0, 148, 153));
        /* margin-top:120px; */
    }
    .summary{
        width: 100%;
        height: 120px;
        background: linear-gradient(rgb(118, 138, 106),rgb(0, 148, 153));
    }
    #myChart{
        float: left;
        margin-left: 120px;
    }
    #myChart1{
        float: right;
        margin-right: 120px;
    }
</style>