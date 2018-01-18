<template>
  <div id="appHead" style="overflow-Y:scroll;">
     <div class="iterms" v-for="message in contracts">
       <div class="follow-space"></div>
        <header>
            <div class="contract-num">合同编号：</div>
            <div class="contract-nums">{{message.contractNum}}</div>
            <div class="contract-check">
                <img src="../assets/image/check.png" alt="" class="check-img"/>
                <router-link :to="{name:'contractdetail',params:{contractnum:message.contractNum,typeid:message.typeId,contractid:message.contractId}}" style="text-decoration: none;color:#fbaf37;">
                    查看
                </router-link>
            </div>
        </header>
        <section>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                          {{message.typeName}}
                    </div>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        客户姓名：
                    </div>
                    <div class="contract-list-value">
                        {{message.custName}}
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        贷款额度：
                    </span>
                    <span class="contract-list-value">
                        {{message.loanamountmoney}}
                    </span>
                </div>
            </div>
            <div class="contract-list">
                <div class="contract-list-left">
                    <div class="contract-list-name">
                        签单时间：
                    </div>
                    <div class="contract-list-value">
                        {{ dealtime(message.signDate) }}
                    </div>
                </div>
                <div class="contract-list-right">
                    <span class="contract-list-name">
                        完成时间：
                    </span>
                    <span class="contract-list-value">
                        {{ dealtime(message.endDate) }}
                    </span>
                </div>
            </div>
        </section>
        <footer>
            <div class="contract-btn" v-show="message.state<10">
              <router-link :to="{name:'yinHangMianQian',params:{amount:message.amount,bankType:message.bankType,bank:message.bank,chargeTime:message.chargeTime,loanAttache:message.loanAttache,facesignTime:message.facesignTime,chargeAmount:message.chargeAmount,typeId:message.typeId,contractNum:message.contractNum,typeName:message.typeName,loanAttache:message.loanAttache,contractId:message.contractId}}" class="routerLink">
                银行面签
              </router-link>
            </div>
            <div class="contract-btn" v-show="message.state==1||message.state==3||message.state==11||message.state==13">
              <router-link :to="{name:'piDai',params:{state:message.state,id:message.id,contractid:message.contractId,contractnum:message.contractNum}}" class="routerLink">
                批贷
              </router-link>
            </div>
            <div class="contract-btn" v-show="message.state==1||message.state==2||message.state==11||message.state==12">
              <router-link :to="{name:'fangKuan',params:{state:message.state,id:message.id,contractid:message.contractId,contractnum:message.contractNum}}" class="routerLink">
                放款
              </router-link>
            </div>
            <div class="contract-btn" v-show="message.ischanged==0">
              <router-link  :to="{name:'huanHangGaiQian',params:{amount:message.amount,bank:message.bank,changeService:message.changeService,changePoint:message.changePoint,id:message.id}}" class="routerLink">
                换行改签
              </router-link>
            </div>
        </footer>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  import { Toast } from 'mint-ui';
export default {
  data () {
  return {
      statePi:'',
      stateFang:'',
    }
  },
  created(){

  },
  mounted:function(){

  },
  methods:{
    dealtime(times){
        if(times){
            console.log(times);
            return times.split(" ")[0];
//            var date = new Date(times);
//            return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        }else{
            return "";
        }
    },
  },
  props:["contracts"],
  components:{
  }
}
</script>
<style scoped>
  header{border-bottom:1px solid #ddd;}
  .routerLink{text-decoration:none;color:#FBAF37;}
</style>
