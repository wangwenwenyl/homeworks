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
                        部门：
                    </span>
                    <span class="contract-list-value">
                        信贷七十三部
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        业务员：
                    </div>
                    <div class="contract-list-value">
                        王梦柯
                    </div>
                </div>
                <div class="contract-list-right">
                    <div class="contract-list-name">
                        应收金额(元)：
                    </div>
                    <div class="contract-list-value">
                        10002
                    </div>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        定金到账总额(元)：
                    </div>
                    <div class="contract-list-value">
                        15800
                    </div>
                </div>
                <div class="contract-list-right">
                    <div class="contract-list-name">
                        款项类别：
                    </div>
                    <div class="contract-list-value">
                        定金
                    </div>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        可支配总额(元)：
                    </div>
                    <div class="contract-list-value">
                        15800
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class="contract-btn" >
                <router-link :to="{name:'dingJinZhuangYeJi',params:{tle:'定金转业绩'}}" class="main-link">
                    转业绩申请
                </router-link>
            </div>
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
  section{padding:16px 10px;}
  .main-link{text-decoration:none;color:#FBAF37;}
</style>
