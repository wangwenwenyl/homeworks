<template>
  <div class="iterm-box" style="overflow-Y:scroll;">
    <div class="follow-space" ></div>
    <div class="follow-content">
        <div class="follow-iterm">
            <div class="follow-iterm-left">
              <span class="follow-star">*</span><label for="">贷款金额(万元)：</label>
            </div>
            <div class="follow-iterm-right">
                <input type="text" class="follow-input" id="amount" v-on:blur="dealMoney" v-model="amount"/>
            </div>
        </div>
        <div class="follow-iterm">
            <div class="follow-iterm-left" style="vertical-align:top;">
              <span class="follow-star">*</span><label for="">贷款性质：</label>
            </div>
            <div class="follow-iterm-right">
                <input type="text" class="follow-input"  id="bankType" v-model="bankType"/>
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
      <div class="follow-iterm">
        <div class="follow-iterm-left">
          <span class="follow-star">*</span><label for="">收费时段：</label>
        </div>
        <div class="follow-iterm-right">
          <input type="text" class="follow-input" id="chargeTime" v-model="chargeTime"/>
        </div>
      </div>
      <div class="follow-iterm">
        <div class="follow-iterm-left">
          <span class="follow-star">*</span><label for="">信贷专员：</label>
        </div>
        <div class="follow-iterm-right">
          <input type="text" class="follow-input" id="loanAttache" v-model="loanAttache"/>
        </div>
      </div>
      <div class="follow-iterm">
        <div class="follow-iterm-left">
          <span class="follow-star">*</span><label for="">收费金额(元)：</label>
        </div>
        <div class="follow-iterm-right">
          <input type="text" class="follow-input" id="chargeAmount" v-model="chargeAmount"/>
        </div>
      </div>
        <div class="search-iterm">
            <genginriqi v-on:date="start" v-bind:title="'面签日期'"  v-bind:staror=this.staror></genginriqi>
        </div>
        <div class="follow-iterm btn-box">
            <div class="follow-cancel" @click="subcancel">取消</div>
            <div class="follow-sure" @click="determine">确定</div>
        </div>
    </div>
</div>
</template>
<script>
import deptselect from '@/components/search-select';
import genginriqi from '@/components/search-date';
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
        amount:'',
        amount2:'',
        bankType:'',
        bank:'',
        chargeTime:'',
        loanAttache:'',
        chargeAmount:'',
        typeId:'',
        contractNum:'',
        contractId:'',
        typeName:'',
        staror:false,
        switched:"false",
        popupVisible4: false,
        open:false,
        signdatestart:'',
    }
  },
  created:function(){
    this.userid=this.$cookie.get('uid');
  },
  mounted:function(){
//      this.userid=this.getCookie("uid");
    this.amount = this.$route.params.amount;
    this.bank = this.$route.params.bank;
    this.typeId = this.$route.params.typeId;
    this.contractNum = this.$route.params.contractNum;
    this.bankType = this.$route.params.bankType;
    this.chargeTime = this.$route.params.chargeTime;
    this.loanAttache = this.$route.params.loanAttache;
    this.chargeAmount = this.$route.params.chargeAmount;
    this.typeName = this.$route.params.typeName;
    this.loanAttache = this.$route.params.loanAttache;
    this.contractId = this.$route.params.contractId;
  },
  methods:{
    start(time){
        this.signdatestart = time;
    },
    start2(time){
        this.signdatestart2 = time;
    },
    dealMoney(){
      if(!this.checkRates(this.amount)) {
        this.amount="";
      }else{
        this.amount2=this.returnFloat(this.amount);
        this.amount = this.amount2+"万元";
      }
    },
    checkRates(str){
//      var re = /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;
      var re = /^[1-9](\d)*(.\d{1,2})?$/;
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
//      if(this.checkRates(value)){
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
//      }else{
//        Toast("请填入数字或小数");
//      }
    },
    determine(){
      if(this.amount2==""||this.amount2==null){
        if(this.checkRates(this.amount2)){
          Toast("贷款金额不能为空");
          return false;
        }else{
          Toast("请填入数字或小数");
          return false;
        }
      }
      if(this.bankType==""||this.bankType==null){
        Toast("贷款性质不能为空");
        return false;
      }
      if(this.bank==''||this.bank==null){
        Toast("银行不能为空");
        return false;
      }
      if(this.chargeTime==""||this.chargeTime==null){
        Toast("收费时段不能为空");
        return false;
      }
      if(this.loanAttache==""||this.loanAttache==null){
        Toast("信贷专员不能为空");
        return false;
      }
      if(this.chargeAmount==""||this.chargeAmount==null){
        Toast("收费金额不能为空");
        return false;
      }
      if(this.signdatestart==""||this.signdatestart==null){
        Toast("批贷日期不能为空");
        return false;
      }
      this.subsure();
    },

    subsure:function(){
      Indicator.open();
        axios.post(hostapi+'/yhmq/mianqianapprove',qs.stringify({
          userId:this.userid,
          typeName:this.typeName,
          contractNum:this.contractNum,
          typeId:this.typeId,
          amount:this.amount2,
          bank:this.bank,
          bankType:this.bankType,
          chargeAmount:this.chargeAmount,
          facesignTime:this.signdatestart,
          loanAttache:this.loanAttache,
          chargeTime:this.chargeTime,
          contractId:this.contractId,
        })).then(response=>{
          if(response.data.code=='200'){
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
    subcancel:function(){

    }
  },
  props:["message","id","scheduleid"],
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
