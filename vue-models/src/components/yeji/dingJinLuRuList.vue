<template>
  <div id="appBlock">
    <div style="width:100%;height:10px;background:#efeff4;"></div>
    <div class="iterm" style="margin-top:0px;">

        <header>
            <div class="contract-num">抵押贷:</div>
            <div class="contract-nums">WD2018{{message.phone}}</div>
        </header>
        <section>
            <div class="contract-list">
              <div class="contract-list-left">
                <div class="contract-list-name">
                  合同编号：
                </div>
                <div class="contract-list-value">
                  HXY00640
                </div>
              </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                      客户姓名：
                    </div>
                    <div class="contract-list-value">
                        {{message.name}}
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                         维护人：
                    </span>
                    <span class="contract-list-value">
                        邓文迪
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                      合同状态：
                    </div>
                    <div class="contract-list-value">
                      审核中
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
          <router-link :to="{ name: 'dingJinYeJiLuRu', params: { userId: 123, tle: this.luRuName }}" style="color:#333;text-decoration:none;">
            <div class="contract-btn">{{luRuName}}</div>
          </router-link>
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
  props:["message","luRuName"],
}
</script>
