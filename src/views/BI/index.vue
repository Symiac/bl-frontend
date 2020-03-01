<template>
    <div class="bi">
       <div class="outer">
           <div class="left">
               <div class="l-top">
                   <div class="l-t-left">
                       <h3>累计定单数</h3>
                       <p>2,365 <span>单</span></p>
                       <h3>累计产品数</h3>
                       <p>568,952 <span>件</span></p>
                   </div>
                   <div class="l-t-right">
                       <div class="l-r-t-l">
                        <ul>
                            <li><label for="name">正在进行</label> <span>3</span></li>
                            <li><label for="name">正在进行</label> <span>3</span></li>
                            <li><label for="name">正在进行</label> <span>3</span></li>
                            <li><label for="name">正在进行</label> <span>3</span></li>
                        </ul>
                       </div>
                       <div class="l-r-t-r">
                           
                       </div>
                   </div>
               </div>
               <div class="l-bottom">
                   <div class="l-b-l">
                       <img src="../../assets/agv_sallary.png" alt="">
                   </div>
                   <div class="l-b-r">
                       <img id="summary" src="../../assets/summary.png" alt="">
                   </div>
               </div>
           </div>
           <div class="right"></div>
       </div>
    </div>
</template>

<script>
    export default {
       data(){
           return {
               tableData:[
                   {}
               ]
           }
       },
       create(){

       }
    }
</script>

<style lang="scss" scoped>
    .bi{
        width: 100%;
        height: 100%;
        // padding: 80px 50px;
        // background: #333;
        .outer{
            .left{
                width:60%;
                height: 100%;
                // background: #452;
                float: left;
                .l-top{
                    width: 100%;
                    height: 40%;
                    // border: 2px solid #777;
                    .l-t-left{
                        width: 30%;
                        height: 100%;
                        float: left;
                        margin-left: 10px;
                        border: solid 3px #3336;
                    }
                    .l-t-right{
                        width: 65%;
                        height: 100%;
                        float: right;
                        border: solid 3px #3336;
                        margin-left: 10px;
                        .l-r-t-l{
                            float: left;
                            height: 100%;
                            width: 30%;
                            ul{
                                list-style: none;
                                height: 100%;
                                li{
                                    list-style: none;
                                    width: 100%;
                                    height: 25%;
                                    label{
                                        float: left;
                                    }
                                    span{
                                        float: right;
                                    }
                                }
                            }
                        }
                        .l-r-t-r{

                        }
                    }
                    
                }
                .l-bottom{
                    height: 45%;
                    border: solid 2px #3333;
                    margin-top: 12px;
                    margin-left: 10px;
                    padding:0;
                    .l-b-l >    img{
                        width: 280px;
                        height: 280px;
                        float: left;
                        margin-top:10px;
                        margin-bottom:0;
                        padding:0;
                    }
                    .l-b-r >    img{
                        width: 260px;
                        height: 260px;
                        float: right;
                        margin-top: 10px;
                        margin-bottom:0;
                        padding:0
                    }
                    .l-b-l,.l-b-r{
                        padding:0;
                        margin:0;
                    }
                }
            }
            .right{
                 width: 38%;
                height: 87%;
                background: rgba(38, 81, 145,.4);
                float: right;
            }
            width: 100%;
            height: 100%;
            padding: 80px 58px;
            // background: #459
        }
        
    }
    
</style>