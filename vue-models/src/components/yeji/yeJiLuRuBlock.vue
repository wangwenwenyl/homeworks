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
                        XXX39239923
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
                        王梦柯
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
          <router-link :to="{ name: 'huiKuanLuRu', params: { userId: 123}}" style="color:#333;text-decoration:none;">
              <div class="contract-btn">{{luRuName}}</div>
          </router-link>
            <!--<div class="contract-btn">{{luRuName}}</div>-->
        </footer>
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
  props:["message","luRuName"],
}
</script>

<style scoped>
  body{background:#fff;}
</style>
