<template>
  <div id="appBlock" style="overflow-Y:scroll">
  <div class="iterms">
      <div class="follow-space"></div>
      <header>
          <div class="contract-num">实用工具</div>
      </header>
        <div class="tool-box">
          <a href="http://ts.hcxzdanbao.com/map/html/map1.html">
              <div class="tool-iterm">
              <img src="../assets/img/建委.png" alt="" class="tool-img" >
              <div>建委查询</div>
            </div>
          </a>
          <a href="http://ts.hcxzdanbao.com/map/html/map2.html">
          <div class="tool-iterm">
            <img src="../assets/img/征信.png" alt="" class="tool-img">
            <div>征信查询</div>
          </div>
          </a>
          <a href="http://ts.hcxzdanbao.com/map/html/map3.html">
          <div class="tool-iterm">
            <img src="../assets/img/公证-.png" alt="" class="tool-img">
            <div>公证处查询</div>
          </div>
          </a>
        </div>       
        <div class="tool-box">
          <a href="http://ts.hcxzdanbao.com/map/html/map4.html">
          <div class="tool-iterm">
            <img src="../assets/img/公积金.png" alt="" class="tool-img" >
            <div>公积金查询</div>
          </div>
          </a>
          <a href="http://ts.hcxzdanbao.com/map/html/map5.html">
          <div class="tool-iterm">
            <img src="../assets/img/抵押.png" alt="" class="tool-img">
            <div>抵押登记查询</div>
          </div>
          </a>
          <a href="http://ts.hcxzdanbao.com/map/html/fang1.html">
          <div class="tool-iterm">
            <img src="../assets/img/计算器.png" alt="" class="tool-img">
            <div>计算器</div>
          </div>
          </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
  return {

    }
  },
  mounted:function(){

  },
    methods:{

    }
}
</script>
<style scoped>
    .tool-box:after{display:table;content:"";clear:both;}
    .tool-iterm{width:33.3%;border-right:1px solid #ddd;float:left;text-align: center;
      font-size:12px;  color:#333;padding:16px 0px;}
  .tool-img{width:30px;margin-bottom:5px;}
  .tool-box{border-bottom:1px solid #ddd;}
</style>
