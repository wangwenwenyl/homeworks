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
                    <div>
                        <div class="contract-list-name">
                            合同编号：
                        </div>
                        <div class="contract-list-value">
                            XXX39239923
                        </div>
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
                          合同状态：
                        </div>
                        <div class="contract-list-value">
                          已归档
                        </div>
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        <div class="contract-list-name">
                          归属人：
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
                <router-link :to="{ name: 'zhiChuShenQingPingDan', params: this.message }" class="contract-btn" v-if="message.type">申请支出</router-link>
                <div class="noMoney" v-else>暂无支出可用</div>
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
  a{
      text-decoration: none;
  }
  .noMoney{
    font-size: 12px;
    line-height: 26px;
  }
</style>
