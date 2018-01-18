<template>
  <div id="appBlock">
  <div class="iterm" style="margin-top:0px;">
        <div style="width:100%;height:10px;background:#efeff4;"></div>
        <header>
            <div class="contract-num">抵押贷:</div>
            <div class="contract-nums">WD2018{{message.phone}}</div>
             <!--<div class="contract-check"><img src="../../assets/image/check.png" alt="" class="check-img"/></div> -->
        </header>
        <section>
            <div class="contract-list">
                台账号:xxxxxx
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        分配人：
                    </div>
                    <div class="contract-list-value">
                        王梦柯
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        应收服务费：
                    </span>
                    <span class="contract-list-value">
                        100.00
                    </span>
                </div>
            </div>
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
                      <div class="contract-list-name">
                        签订日期：
                    </div>
                    <div class="contract-list-value">
                        2017-11-10
                    </div>

                </div>
            </div>
            <div class="contract-list">
                <span class="contract-list-name">
                        分配金额：
                </span>
                <span class="contract-list-value">
                    <input type="text" value="100.00" v-bind:readonly="readOrNo" style="border:1px solid #ddd;color:#333;padding:5px;">
                </span>
            </div>
        </section>
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