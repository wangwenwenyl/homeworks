<template>
 		 <div class="iterm" style="overflow-Y:scroll;">
        <header>
            <div class="contract-num">数据详情</div>
        </header>
        <section>
            <div class="contract-datalist" v-for="iterm in list">
                <div>
                    <div class="contract-list-name">
                        1.鸿诚祥兆投资担保总公司
                    </div>
                    <div class="contract-list-value">
                        -第一业务部
                    </div>
                     <span class="contract-list-value">
                        -103旅
                    </span>
                    <span class="contract-list-value">
                        -信贷二十部
                    </span>
                </div>
                <div class="iterm-databox">
                    <div class="iterm-data">
                        <img src="../assets/image/dataimg1.png">
                        <span>12个</span>
                    </div>
                    <div class="iterm-data">
                        <img src="../assets/image/dataimg2.png">
                        <span>1个</span>
                    </div>
                    <div class="iterm-data">
                        <img src="../assets/image/dataimg3.png">
                        <span>12个</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
 <script type="text/javascript">
export default {
  data () {
  return {
        list:[1,2,3,4,5]
    }
  },
  mounted:function(){

  }
}        
</script>
<style scoped>
	@import "../assets/css/server.css";
	body{background:#fff !important;}
    .contract-datalist{border-bottom:1px solid #ddd;padding-bottom:15px;}
    .contract-datalist:not(:first-child){margin-top:15px;}
    .contract-list-value{font-size:12px;color:#333;}
    .iterm{margin-top:0px;border-top:10px solid #efeff4;}
    .iterm-data{display:inline-block;width:32%;text-align: center;}
    .iterm-data img{width:18px;vertical-align: middle;margin-right:5px;}
    .iterm-databox{margin-top:15px;}
</style>
