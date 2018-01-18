<template>  
  <div id="appBlock">  
  <div class="iterm" style="margin-top:0px;">
        <div style="width:100%;height:10px;background:#efeff4;"></div>
        <header>
            <div class="contract-num">抵押贷:</div>
            <div class="contract-nums">WD2018{{message.phone}}</div>
        </header>
        <section>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        台账号：
                    </div>
                    <div class="contract-list-value">
                        HXY00640
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        合同状态：
                    </span>
                    <span class="contract-list-value">
                        审核中
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        维护人：
                    </div>
                    <div class="contract-list-value">
                        邓文迪
                    </div>
                </div>
                <div class="contract-list-right">
                      <div class="contract-list-name">
                        更新时间：
                    </div>
                    <div class="contract-list-value">
                        2017-11-10
                    </div>
                    
                </div>
            </div>
        </section>
        <footer>
            <div class="contract-btn">查看</div>
            <div class="contract-btn">业绩调拨</div>
        </footer>
    </div>
  </div>  
</template>  
   
<script>  
export default {  
  data () {  
  return {  
        reador:""
    }  
  },  
  mounted:function(){  
   
  },
  props:["message","readOrNo"]
}  
</script>