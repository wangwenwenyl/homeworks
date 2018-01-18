<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div id="main" style="width: 300px;height: 400px;overflow-Y:scroll;"></div>
  
</template>
<script>
  import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
               
            }
        },
        methods:{
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['直接访问','间接访问']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '8%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['第一业务部','第二业务部','第三业务部','第四业务部','第五业务部','第六业务部','第七业务部'],
                            axisLabel: {
                            interval: 0,
                            rotate: 40,
                            },
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'间接访问',
                            type:'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },    
                    ]
               })
            }
        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('main')
            })
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>