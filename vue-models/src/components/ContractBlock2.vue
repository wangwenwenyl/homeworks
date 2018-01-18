<template>
  <div id="appBlock" style="overflow-Y:scroll">
    <div class="iterms" v-for="contract in contracts">
        <div class="follow-space"></div>
        <header style="position:relative;">
            <div class="contract-num">合同编号：</div>
            <div class="contract-nums">{{ contract.contractnum }}</div>
            <div class="contract-check" @click="check(contract)"><img src="../assets/image/check.png" alt="" class="check-img"/>查看</div>
        </header>
        <section>
            <!--<div class="contract-list">-->
                <!--<div class="contract-list-left">-->
                    <!--<div class="contract-list-name">-->
                        <!--{{ contract.typename }}-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        台账号：
                    </div>
                    <div class="contract-list-value">
                        {{ contract.accountNum }}
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        区域：
                    </span>
                    <span class="contract-list-value">
                        {{ contract.parentDept }}
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        部门：
                    </div>
                    <div class="contract-list-value">
                        {{ contract.deptName }}
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        报备人姓名：
                    </span>
                    <span class="contract-list-value">
                        {{ contract.reportName }}
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        客户姓名：
                    </div>
                    <div class="contract-list-value">
                        {{ contract.custName }}
                    </div>
                </div>
                <div class="contract-list-right">
                    <div class="contract-list-name">
                        报备时间：
                    </div>
                    <div class="contract-list-value">
                        {{ contract.reportTime }}
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
  props:["contracts"],
    methods:{
      check(contract){
          this.$router.push({name: 'contractdetail', params: {contractnum: contract.contractnum, typeid: 4,contractid:contract.contractid}});
      }
    }
}
</script>
<style  scoped>

</style>
