<template>
  <div class="iterm-box" style="overflow-Y:scroll;">
    <div class="follow-space" ></div>
    <div class="follow-content">
        <div class="follow-iterm">
            <div class="follow-iterm-left">
                <label for="">贷款金额：</label>
            </div>
            <div class="follow-iterm-right">
                <input type="text" class="follow-input" id="amount" v-on:blur="dealMoney" v-model="changeAmount"/>
            </div>
        </div>
        <div class="follow-iterm">
            <div class="follow-iterm-left" style="vertical-align:top;">
                <label for="">面签点位：</label>
            </div>
            <div class="follow-iterm-right">
                <input type="text" class="follow-input"  id="changePoint" v-model="changePoint"/>
            </div>
        </div>
        <div class="follow-iterm">
          <div class="follow-iterm-left">
              <label for="">银行：</label>
          </div>
          <div class="follow-iterm-right">
            <input type="text" class="follow-input" id="bank" v-model="changeBank"/>
          </div>
        </div>
        <div class="follow-iterm">
          <div class="follow-iterm-left">
            <span class="follow-star">*</span><label for="">服务费：</label>
          </div>
          <div class="follow-iterm-right">
            <input type="text" class="follow-input" id="changeService" v-model="changeService"/>
          </div>
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
      changeAmount:'',
      changeAmount2:'',
      changeBank:'',
        changePoint:'',
        changeService:'',
        id:'',
        staror:true,
        switched:"false",
        popupVisible4: false,
        open:false,
    }
  },
  mounted:function(){
//      this.userid=this.getCookie("uid");
//    this.amount = this.$route.params.amount;
//    this.bank = this.$route.params.bank;
//    this.changeService = this.$route.params.changeService;
//    this.changePoint = this.$route.params.changePoint;
    this.id = this.$route.params.id;
    console.log(this.id);
  },

  methods:{
    dealMoney(){
      if(!this.checkRates(this.changeAmount)) {
        this.changeAmount="";
      }else{
        this.changeAmount2=this.returnFloat(this.changeAmount);
        this.changeAmount = this.changeAmount2+"万元";
      }
    },
    checkRates(str){
//      var re = /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;
      var re = /[1-9](\d)*(.\d{1,2})?/;
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
    determine(){
      if(this.changeAmount2==""||this.changeAmount2==null){
        if(this.checkRates(this.changeAmount2)){
          Toast("贷款金额不能为空");
          return false;
        }else{
          Toast("请填入数字或小数");
          return false;
        }
      }
      if(this.changeService==""||this.changeService==null){
        Toast("服务费不能为空");
        return false;
      }
      this.subsure();
    },
    subsure:function(){
      Indicator.open();
        axios.post(hostapi+'/yhmq/huanhanggaiqian',qs.stringify({
          changeAmount: this.changeAmount2,
          changeBank:this.changeBank,
          changeService:this.changeService,
          changePoint:this.changePoint,
          id:this.id
        })).then(response=>{
          if(response.data.code=='200'){
            Indicator.close();
            this.$router.push({path:"/bankInterview",params:{}});
          }else{
            Toast("操作失败");
            Indicator.close();
          }
        }).catch(function(err){
          Indicator.close();
          Toast("操作失败");
        });
    },
    subcancel:function(){

    }
  },
  props:["message","scheduleid"],
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
