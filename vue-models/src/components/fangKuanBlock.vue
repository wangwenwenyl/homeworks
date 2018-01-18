<template>
  <div class="iterm-box" style="overflow-Y:scroll;">
    <div class="follow-space" ></div>
    <div class="follow-content">
        <div class="follow-iterm">
            <div class="follow-iterm-left">
                <label for="">贷款金额(万元)：</label>
            </div>
            <div class="follow-iterm-right">
                <input type="text" class="follow-input" id="loanmoney" v-on:blur="dealMoney" v-model="loanmoney"/>
            </div>
        </div>
        <div class="follow-iterm">
            <div class="follow-iterm-left" style="vertical-align:top;">
                <label for="">贷款类型：</label>
            </div>
            <div class="follow-iterm-right">
                <input type="text" class="follow-input"  id="loantype" v-model="loantype"/>
            </div>
        </div>
        <div class="follow-iterm">
            <div class="follow-iterm-left">
                <label for="">贷款期限：</label>
            </div>
            <div class="follow-iterm-right">
                <input type="text" class="follow-input" id="loanperiod" v-model="loanperiod"/>
            </div>
        </div>
      <div class="follow-iterm">
        <div class="follow-iterm-left">
          <label for="">贷款利率：</label>
        </div>
        <div class="follow-iterm-right">
          <input type="text" class="follow-input" id="loanrate" v-on:blur="dealRate" v-model="loanrate"/>
        </div>
      </div>
      <div class="follow-iterm">
        <div class="follow-iterm-left">
          <label for="">还款方式：</label>
        </div>
        <div class="follow-iterm-right">
          <input type="text" class="follow-input" id="paymethod" v-model="paymethod"/>
        </div>
      </div>
      <div class="follow-iterm">
        <div class="follow-iterm-left">
          <label for="">银行类别：</label>
        </div>
        <div class="follow-iterm-right">
          <input type="text" class="follow-input" id="paybank" v-model="paybank"/>
        </div>
      </div>
      <div class="follow-iterm">
        <div class="follow-iterm-left">
          <span class="follow-star">*</span><label for="">银行：</label>
        </div>
        <div class="follow-iterm-right">
          <input type="text" class="follow-input" id="bank" v-model="bank"/>
        </div>
      </div>
        <div class="search-iterm">
            <genginriqi v-on:date="start" v-bind:title="genjindate" v-bind:staror="staror" v-bind:time="loanDate"></genginriqi>
        </div>
      <div class="search-iterm">
         <genginriqi v-on:date="start2" v-bind:title="genjindate2" v-bind:time="loanStartDate"></genginriqi>
      </div>
        <div class="follow-iterm btn-box">
            <div class="follow-cancel" @click="tiaozhuan">取消</div>
            <div class="follow-sure" @click="determine">确定</div>
        </div>
    </div>
</div>
</template>
<script>
import deptselect from '@/components/search-select';
import genginriqi from '@/components/search-date3';
import { MessageBox } from 'mint-ui';
import { Header } from 'mint-ui';
import axios from 'axios';
import qs from 'qs';
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
export default {
  data () {
  return {
        userid:'',
        loanmoney:'',
        loanmoney2:'',
        loantype:'',
        loanperiod:'',
        loanrate:'',
        paymethod:'',
        paybank:'',
        bank:'',
        loanDate:'',//批贷日期
        loanStartDate:'',//还款起始日期
        staror:true,
        switched:"false",
        popupVisible4: false,
        open:false,
        genjindate:'放款日期',
        genjindate2:'还款起始日',
    }
  },

  created:function(){
     this.contractId = this.$route.params.contractId;
     this.userid=this.$cookie.get("uid");
    axios.post(hostapi+"/yhmq/finloanapproval",qs.stringify({
      contractId:this.contractid,
    })).then(response=>{
      if(response.data.data != null){
      this.loanmoney=Math.floor(response.data.data.loanMoney*100)/100;
      this.loanmoney2=Math.floor(response.data.data.loanMoney*100)/100;
      this.loantype=response.data.data.loanType;
      this.loanperiod=response.data.data.loanPeriod;
      this.loanrate=response.data.data.loanRate;
      this.paymethod=response.data.data.payMethod;
      this.paybank=response.data.data.payBank;
      this.bank=response.data.data.bank;
      this.loanDate=response.data.data.loanDate;
      this.loanStartDate=response.data.data.loanStartDate;
      }
    }).catch(function(){
      Toast("操作失败");
    })
  },
  methods:{
    start(time){
        this.loanDate = time;
    },
    start2(time){
        this.loanStartDate = time;
    },
      checkRates(str){
          var re = /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;
          //判断字符串如果是整数不能以0开头后面加正整数，如果是浮点数整数部分不能为两个0：如00.00，如果是整数，
          var Sure;
          if (!re.test(str)){
              Sure =false;
          }else{
              Sure =true;
          }
          return Sure;
      },
      returnFloat(value){
          if(this.checkRates(value)){
              var value=Math.round(parseFloat(value)*100)/100;
              var xsd=value.toString().split(".");
              if(xsd.length==1){
                  value=value.toString()+".00";
                  return value;
              }
              if(xsd.length>1){
                  if(xsd[1].length<2){
                      value=value.toString()+"0";
                  }
                  return value;
              }
          }else{
              Toast("请填入数字或小数");
          }
      },
    dealMoney(){
      if(!this.checkRates(this.loanmoney)) {
        this.loanmoney="";
      }else{
        this.loanmoney2=this.returnFloat(this.loanmoney);
        this.loanmoney = this.loanmoney2+"万元";
      }
    },
    dealRate(){
      if(this.loanrate=="") return "";
      this.loanrate = this.returnFloat(this.loanrate);
    },
    determine(){
      if(this.bank=="" || this.bank==null){
        Toast("银行不能为空");
        return false;
      }
      if(this.loanDate=="" || this.loanDate==null){
        Toast("放款日期不能为空");
        return false;
      }
      this.submit();
    },
    submit:function(){
      Indicator.open();
        axios.post(hostapi+'/yhmq/pidai',qs.stringify({
          loanMoney:this.loanmoney2,
          loanType:this.loantype,
          id:this.id,
          userid:this.userid,
          state:this.state,
          loanPeriod:this.loanperiod,
          loanRate:this.loanrate,
          payMethod:this.paymethod,
          payBank:this.paybank,
          bank:this.bank,
          loanDate:this.loanDate,
          loanStartDate:this.loanStartDate,
          contractId:this.contractid,
          contractNum:this.contractnum,
          type:2,
        })).then(response=>{
          if(response.data.code=="200"){
            Indicator.close();
            this.$router.push({path:"/bankInterview",params:{}});
          }else{
            Indicator.close();
            Toast("操作失败");
          }
        }).catch(function(err){
          Indicator.close();
          Toast("网络异常");
        });
    },
    tiaozhuan:function(){
      this.$router.push({path:"/bankInterview",params:{}});
    },
    subcancel:function(){

    }

  },
   props:["state","id","contractid","contractnum"],
  components:{
      'deptselect':deptselect,
      'genginriqi':genginriqi
  }
}
</script>
<style scoped>
  .iterm-box{top:44px !important;}
  .mintui{font-size:28px;margin-left:12px;}
  .picker-toolbar{background:#ddd !important;}
  /*.follow-iterm-left{width:38% !important;}*/
</style>
