<template>  
  <div id="appBlock">  
    <div class="iterm" style="margin-top:0px;">
        <div style="width:100%;height:10px;background:#efeff4;"></div>
        <header>
            <div class="contract-num">抵押贷:</div>
            <div class="contract-nums">WD2018{{message.phone}}</div>
            <div class="contract-check"><img src="../../assets/image/check.png" alt="" class="check-img"/></div> 
        </header>
        <section>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        客户姓名：
                    </div>
                    <div class="contract-list-value">
                        邓文迪
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        应收服务费(元)：
                    </span>
                    <span class="contract-list-value">
                        100.00
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        签订日期：
                    </div>
                    <div class="contract-list-value">
                        2017-11-10
                    </div>
                </div>
            </div>
        </section>
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
  props:["message"],

}  
</script>  
   
<style scoped>  
  body{background:#fff;}
</style> 