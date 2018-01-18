<template>
  <div class="iterm-box" style="overflow-Y:scroll;">
    <!--<div class="follow-box">-->
        <!--<div class="follow-left">-->
             <!--<router-link :to="{ name: 'FollowRecordYes', params: { userId: 123}}" style="color:#333;text-decoration:none;">跟进记录</router-link>-->
        <!--</div>-->
        <!--<div class="follow-right follow-active">-->
            <!--跟进处理-->
        <!--</div>-->
    <!--</div>-->
    <div class="follow-space" ></div>
    <div class="follow-content">
        <div class="follow-iterm">
            <div class="follow-iterm-left">
                <span class="follow-star">*</span><label for="">借款人：</label>
            </div>
            <div class="follow-iterm-right">
                <input type="text" class="follow-input" id="loadName" v-model="loadName"/>
            </div>
        </div>
        <div class="follow-iterm">
            <div class="follow-iterm-left" style="vertical-align:top;">
                <span class="follow-star">*</span><label for="">尾款额度：</label>
            </div>
            <div class="follow-iterm-right">
                <span>是 <input type="radio" name="num"  @click="showor=false;switched=true" /></span>
                <span style="margin-left:20px;">否 <input type="radio" name="num" checked   @click="showor=true;switched=false"/></span>
                <input type="text" class="follow-input follow-inputed" v-bind:disabled="showor" id="weikuan" v-model="weikuan"/><span v-show="!showor" style="top:-25px;left:-15px;position: relative;">元</span>
            </div>
        </div>
        <div class="follow-iterm">
            <div class="follow-iterm-left">
                <span class="follow-star">*</span><label for="">银行客户经理：</label>
            </div>
            <div class="follow-iterm-right">
                <input type="text" class="follow-input" id="clientManager" v-model="clientManager"/>
            </div>
        </div>
        <div class="search-iterm">
            <genginriqi v-on:date="start" v-bind:title="genjindate" ></genginriqi>
        </div>
        <div class="search-iterm">
            <deptselect v-bind:selecttitle="titles" v-bind:datas="depts" v-on:listionChildEvent="parent" v-on:select="confirmdept"></deptselect>
        </div>
        <div class="follow-iterm">
            <div class="follow-iterm-left" style="vertical-align:top;">
               <label for="">跟进备注：</label>
            </div>
            <div class="follow-iterm-right">
                <textarea name="" id="" style="width:100%;resize:none;border:1px solid #ddd;" v-model="beizhu" rows="5"></textarea>
            </div>
        </div>
        <div class="follow-iterm btn-box">
            <div class="follow-cancel" @click="subcancel">取消</div>
            <div class="follow-sure" @click="subsure">确定</div>
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
        loadName:'',
        weikuan:'',
        clientManager:'',
        switched:"false",
        beizhu:'',
        jiedian:"",
        showor:"false",
        popupVisible4: false,
        open:false,
        signdatestart:'',
        state1:'',
        state2:'',
        types:[{
            flex: 1,
            values:['请选择','抵押贷','信用贷','质押贷'],
            textAlign:'center',
            className: 'slot1',
        }],
         depts:[{
              flex: 1,
              values:['补件','件齐','做卷','报分行','换行改签','审批','补调','复议','被拒','已批贷','解押中','送房本','抵押中','回它项','暂停','已放款','毙单','打官司'],
              textAlign: 'center',
              className: 'slot1',
          }],
        titles:'跟进节点',
        genjindate:'跟进日期',
    }
  },
  mounted:function(){
      this.userid=this.$cookie.get("uid");
  },
  methods:{
      getCookie(cname){
          var name = cname + "=";
          var ca = document.cookie.split(";");
          for(var i=0;i<ca.length;i++){
              var c = ca[i];
              if(c=='') return "";
              while(c.charAt(0)=='') c=c.substring(1);
              if(c.indexOf(name)!=-1) return c.substring(name.length,c.length);
          }
          return "";
      },
    start(time){
        this.signdatestart = time;
    },
    opendialog:function(){
        this.$emit("openfatherdialog","123");
    },
    closedialog:function(){
        this.$emit("closefatherdialog","123");
    },
    confirmdept:function(value){
        this.department=value;
    },
    parent(data){
       this.jiedian=data;
    },
    parents(data){

    },
    subsure:function(){
        if(document.getElementById("loadName").value==""){
             MessageBox.alert('请输入贷款人姓名!', '提示');
              return false;
        }else if(this.showor==false&&document.getElementById("weikuan").value==""){
             MessageBox.alert('请输入尾款额度!', '提示');
              return false;
        }else if(document.getElementById("clientManager").value==""){
            MessageBox.alert('请输入客户经理姓名!', '提示');
            return false;
        }else if(document.getElementById("jiedian").value==""){
            MessageBox.alert('请输入节点!', '提示');
            return false;
        }else{
           Indicator.open();
        axios.post(hostapi+'/follow/addhead',qs.stringify({
          id: this.id,
          borrower:this.loadName,
          weikuan:this.switched,
          finalPayment:this.weikuan,
          bankCustManager:this.clientManager,
        })).then(response=>{
          if(response.data.code=='200'){
            Indicator.close();
            this.state1=true;
            if(this.state1==true&&this.state2==true){
              Indicator.close();
              this.$router.push({name:"bankClient",params:{}});
            }
//            if(response.data.data==''){
//              this.records=[];
//              this.recordshow=false;
//            }else{
//              this.records = this.records.concat(response.data.data);
//              console.log(response.data.data);
//            }
          }else{
            Toast("操作失败");
            Indicator.close();
          }
        }).catch(function(err){
          Toast("网络异常");
          Indicator.close();
        });
        axios.post(hostapi+'/follow/adddetail',qs.stringify({
          userId:this.userid,
          createdate: this.signdatestart,
          node:this.jiedian,
          scheduleId:this.scheduleid,
          remark:this.beizhu
        })).then(response=>{
          if(response.data.code=='200'){
            this.state2=true;
            if(this.state1==true&&this.state2==true){
              Indicator.close();
               this.$router.push({name:"bankClient",params:{}});
            }
//            if(response.data.data==''){
//              this.records=[];
//              this.recordshow=false;
//            }else{
//              this.records = this.records.concat(response.data.data);
//              console.log(response.data.data);
//            }
          }else{
            Toast("操作失败");
            Indicator.close();
          }
        }).catch(function(err){
          Toast("网络异常");
          Indicator.close();
        });
        };
      
    },
    subcancel:function(){
        this.$route.go(-1);
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
  .iterm-box{top:84px !important;}
  .mintui{font-size:28px;margin-left:12px;}
  .picker-toolbar{background:#ddd !important;}
  /*.follow-iterm-left{width:38% !important;}*/
</style>
