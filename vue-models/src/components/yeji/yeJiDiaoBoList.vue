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
              合同名称：
            </div>
            <div class="contract-list-value">
              HXY00640
            </div>
          </div>
        </div>
        <div class="contract-list">
          <div class="contract-list-left">
            <div class="contract-list-name">
              合同类型：
            </div>
            <div class="contract-list-value">
              信用贷
            </div>
          </div>
          <div class="contract-list-right">
            <div class="contract-list-name">
              维护人：
            </div>
            <div class="contract-list-value">
              杨荣伟
            </div>
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
          <div class="contract-list-right">
            <span class="contract-list-name">
                 合同状态：
            </span>
            <span class="contract-list-value">
                已归档
            </span>
          </div>
        </div>
      </section>
      <footer>
        <router-link :to="{ name: 'yeJiDiaoBoDetail', params: { userId: 123, tle:'业绩调拨' }}" style="color:#333;text-decoration:none;">
          <div class="contract-btn">{{luRuName}}</div>
        </router-link>
        <router-link :to="{ name: 'chaKanDiaobo', params: { userId: 123 }}" style="color:#333;text-decoration:none;">
          <div class="contract-btn">查看</div>
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
