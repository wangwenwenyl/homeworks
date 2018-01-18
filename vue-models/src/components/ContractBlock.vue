<template>
  <div id="appBlock" style="overflow-Y:scroll">
  <div class="iterms">
        <div class="follow-space"></div>
        <header>
            <div class="contract-num">{{ message.type }}:</div>
            <div class="contract-nums">{{ message.contractNum }}</div>
        </header>
        <section>
            <!-- <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        抵押贷
                    </div>
                </div>
            </div> -->
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        客户姓名：
                    </div>
                    <div class="contract-list-value">
                        {{ message.custName }}
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        跟进节点：
                    </span>
                    <span class="contract-list-value">
                        {{ message.state }}
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        贷款性质：
                    </div>
                    <div class="contract-list-value">
                        {{ message.bankType }}
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        点位：
                    </span>
                    <span class="contract-list-value">
                        {{ parseFloat(message.point) }}
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        借款人：
                    </div>
                    <div class="contract-list-value">
                        {{ message.borrower }}
                    </div>
                </div>
                 <div class="contract-list-right">
                    <span class="contract-list-name">
                        台账号：
                    </span>
                    <span class="contract-list-value">
                        {{ message.accountNum }}
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        客户经理：
                    </div>
                    <div class="contract-list-value">
                        {{ message.bankCustManager }}
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        银行：
                    </span>
                    <span class="contract-list-value">
                        {{ message.bank }}
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        尾款额度：
                    </div>
                    <div class="contract-list-value">
                        {{ dealmoney(message.finalPayment) }}
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        额度：
                    </span>
                    <span class="contract-list-value">
                        {{ dealmoney(message.amount) }}
                    </span>
                </div>
            </div>
            <div class="contract-list">
                  <div class="contract-list-left">
                    <div class="contract-list-name">
                        面签时间:
                    </div>
                    <div class="contract-list-value">
                        {{ dealtime(message.updateTime) }}
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        所在部门：
                    </span>
                    <span class="contract-list-value">
                        {{ message.deptname }}
                    </span>
                </div>
            </div>
        </section>
        <footer style="display:flex;justify-content: flex-end;">
             <router-link :to="{ name:'follow',params:{schedule: message.scheduleId,id:message.id }}" style="text-decoration:none;" class="contract-btn">跟进</router-link>
             <!--<span @click="check">跟进</span>-->
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
      console.log(this.message);
  },
  props:["message"],
    methods:{
      dealmoney(money){
          if(money){
              return parseFloat(money)+"万元";
          }else{
              return "";
          }
      },
//      check(){
//            this.$router.push({name: 'follow', params:{schedule: message.scheduleId,id:message.id }});
//        },
        dealtime(time){
            if(time){
                return time.split(" ")[0];
//                var date = new Date(time);
//                return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            }else{
                return "";
            }
        },
    }
}
</script>
