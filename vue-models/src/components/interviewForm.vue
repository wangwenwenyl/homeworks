<template>
 		<div id="myChart" style="width:100%;height:300px;margin:auto;padding-top:20px;overflow-Y:scroll;" ></div>
</template>
 <script type="text/javascript">
 var echarts = require('echarts');
     export default {
  name: 'Bank',
  data () {
    return {
        message:['2','5','5','10','1'],
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
  },
  mounted() {
    /*ECharts图表*/
    var myChart = echarts.init(document.getElementById('myChart'));
    myChart.setOption({
			// title: { text: '各区域门店8月份' },
			legend: {
                data:['有效面谈','无效面谈']
            },
            tooltip: {
                 trigger: 'axis'
            },
            xAxis: {
                data: ["第一业务部","第三业务部","第四业务部","第五业务部","第六业务部"],
                  axisLabel: {
                  interval: 0,
                  rotate: 40,
                },
            },
            yAxis: {
                 type: 'value',
                    min: 0,
                    max: 12,
                 interval:2,
            },
            series: [
                {
                    name: '有效面谈',
                    type: 'bar',
                    data: this.message,
                    label: {
                    normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                },
                {
                    name: '无效面谈',
                    type: 'bar',
                    data: [1, 2, 6, 4, 6],
                    label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                },
            ]
    })
  },
  //props:['message'],
}
    </script>
<style scoped>
	body{background:#fff;}
</style>
