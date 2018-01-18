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
                        驳回人：
                    </span>
                    <span class="contract-list-value">
                        李贵菊
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        客户姓名：
                    </div>
                    <div class="contract-list-value">
                        王梦柯
                    </div>
                </div>
                <div class="contract-list-right">
                    <div class="contract-list-name">
                        录入金额(元)：
                    </div>
                    <div class="contract-list-value">
                        3333
                    </div>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                  <div class="contract-list-name">
                    业绩归属人：
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
            <div class="contract-list">
              <div>
                <div class="contract-list-name" style="display:inline-block;">
                    驳回原因：
                  <span style="color:#666;line-height:25px;">拉冯绍峰的李撒打发斯蒂芬阿什顿发斯蒂芬拉冯绍峰的李撒打发斯蒂芬阿什顿发斯蒂芬</span>
                </div>
              </div>
            </div>
        </section>
        <footer>
            <div class="contract-btn" >
              <router-link :to="{name:'dingJinYeJiLuRu',params:{tle:'重新录入'}}" class="main-link">
                重新提交
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
  props:["message"],
}
</script>

<style scoped>
  body{background:#fff;}
  .main-link{color:#FBAF37;text-decoration:none;}
</style>
