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
                       <canvas id="l-b-l"></canvas>
                   </div>
                   <div class="l-b-r">
                       <canvas id="l-b-r"></canvas>
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
           return {}
       },
       create(){

       }
    }
</script>

<style lang="scss" scoped>
    .bi{
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
                    height: 55%;
                    border: solid 3px #000;
                    margin-top: 12px;
                    margin-left: 10px;
                }
            }
            .right{
                 width: 38%;
                height: 100%;
                // background: rgb(38, 81, 145);
                float: right;
            }
            width: 100%;
            height: 100%;
            padding: 80px 58px;
            // background: #459
        }
        width: 100%;
        height: 100%;
        padding: 80px 50px;
        // background: #333;
    }
</style>