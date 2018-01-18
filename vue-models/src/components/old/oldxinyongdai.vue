<template>
  <div id="appdiyadai" style="text-align: left;background:#fff;color:#ccc;overflow-Y:scroll;">
    <ContractTop v-bind:submit="headone" v-on:submitone="submitone" tle="信用贷" tleurl="/index" style="position:fixed;top:0px;z-index:999;background:#fff;"></ContractTop>
    <mt-navbar v-model="selected" style="width:100%;position:fixed;top:44px;z-index:999;background:#fff;" value=1>
      <div style="width:620px;">
        <mt-tab-item id="1">信用贷合同</mt-tab-item>
        <mt-tab-item id="2">流程附件</mt-tab-item>
        <mt-tab-item id="3">交接单</mt-tab-item>
        <mt-tab-item id="4">承诺函</mt-tab-item>
        <mt-tab-item id="5" v-if="dianwei <1.8 ? true:false">点位说明</mt-tab-item>
        <mt-tab-item id="6" v-if="yijian">意见审批</mt-tab-item>
      </div>
    </mt-navbar>

    <mt-tab-container v-model="selected"  :swipeable='true' style="margin-top:98px;" >
      <mt-tab-container-item id="1">
        <xinyongdaicontract v-bind:xinyongdaiall="xinyongdaicontent"></xinyongdaicontract>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <liuchengfujian v-on:liuchengflag="liuchengflag" v-bind:showsave="showsave"  v-bind:liuchengall="liuchengcontent" v-bind:contracttype="2" v-bind:contractid="contractid" v-bind:contractnum="contractnum" v-bind:showor="showor"></liuchengfujian>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <jiaojiedan v-on:jiaojiedanflag="jiaojiedanflag" v-bind:jiaojiedanall="jiaojiedancontent" v-bind:showsave="showsave" v-bind:showor="showor" v-bind:contractid="contractid" v-bind:contractnum="contractnum" v-bind:dingjin="dingjin" v-bind:fuwufei="fuwufei"></jiaojiedan>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <chengnuohan  v-on:chengnuohanflag="chengnuohanflag" v-bind:chengnuohanall="chengnuohancontent" v-bind:contractid="contractid" v-bind:contractnum="contractnum"  v-bind:showsave="showsave" v-bind:showor="showor"></chengnuohan>
      </mt-tab-container-item>
      <mt-tab-container-item id="5" v-if="dianwei <1.8 ? true:false">
        <dianweishuoming v-bind:zongjian="zongjian" v-on:dianweishuomingflag="dianweishuomingflag" v-bind:contractid="contractid" v-bind:contractnum="contractnum" v-bind:showsave="showsave"  v-bind:dianweishuomingall="dianweishuomingcontent" v-bind:showor="showor" v-bind:shopownername="shopownername"></dianweishuoming>
      </mt-tab-container-item>
      <mt-tab-container-item id="6"  v-if="yijian">
        <shenpiyijian v-on:approve="approve" v-bind:showhistory="showhistory" v-bind:history="history"  v-on:unapprove="unapprove"></shenpiyijian>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import { MessageBox } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  import { TabContainer, TabContainerItem } from 'mint-ui';
  import axios from 'axios';
  import { Tabbar, TabItem } from 'mint-ui';
  import { Toast } from 'mint-ui';
  import ContractTop from '@/components/ContractTop';
  import xinyongdaicontract from '@/components/old/xinyongdaicontract';
  import liuchengfujian from '@/components/old/liuchengfujian';
  import jiaojiedan from '@/components/old/jiaojiedan';
  import chengnuohan from '@/components/old/chengnuohan';
  import dianweishuoming from '@/components/old/dianweishuoming';
  import shenpiyijian from '@/components/old/shenpiyijian';
  import qs from 'qs';
  export default {
    data () {
      return {
        headone:'',
        uuid:'',
        name:'',
        zongjian:'',
        showor:'',
        yijian:'',
        showsave:'',
        userid:'',
        selected:'1',
        contractid:'',
        xinyongdaicontent:{},
        liuchengcontent:{},
        chengnuohancontent:{},
        dianweishuomingcontent:{},
        dianwei:'',
        jiaojiedancontent:{},
        showhistory:true,
        history:{},
        contractnum:'',
        step:'',
        typeid:'',
        processinstanceid:'',
        shopownername:'',
        liuchengflagone:false,
        dianweishuomingflagone:false,
        chengnuohanflagone:false,
         jiaojiedanflagone:false,
        dingjin:'',
        fuwufei:'',
          newarr:{'approvePerson':'','approveIdea':'','contractnum':'','managersign':'',},
      }
    },
    created(){
      this.name=this.$cookie.get('uname');
       this.newarr.approvePerson=this.name;
       this.newarr.managersign=this.name;
      this.contractnum = this.$route.params.contractnum;
      this.contractid = this.$route.params.contractid;
      this.processinstanceid=this.$route.params.processinstanceid;
      this.step=this.$route.params.step;
      this.userid=this.$cookie.get('uid');
      this.uuid=this.$cookie.get('uuid');
       if(this.step==0){
            this.showor=false;
          this.yijian=false;
            this.showsave=true;
            this.zongjian=false;
            this.headone=true;
        }else if(this.step==1){
             this.showor=true;
            this.yijian=true;
            this.showsave=false;
            this.zongjian=false;
            this.headone=false;
        }else{
            this.showor=true;
            this.yijian=true;
            this.showsave=false;
            this.zongjian=true;
            this.headone=false;

        }
      console.log(this.showsave);
      //合同正文的回显
      axios.post(host+"/app/loadCreditContractMain?contractnum="+this.contractnum,{
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      })
        .then(response=>{
          console.log(response.data.data);
          response.data.data.xinyong['contractId']=response.data.data.normal['contractId'];
          response.data.data.xinyong['clerkEmail']=response.data.data.normal['clerkEmail'];
          response.data.data.xinyong['clerkName']=response.data.data.normal['clerkName'];
          response.data.data.xinyong['clerkPhone']=response.data.data.normal['clerkPhone'];
          response.data.data.xinyong['custAddress']=response.data.data.normal['custAddress'];
          response.data.data.xinyong['custEmail']=response.data.data.normal['custEmail'];
          response.data.data.xinyong['custName']=response.data.data.normal['custName'];
          response.data.data.xinyong['custNum']=response.data.data.normal['custNum'];
          response.data.data.xinyong['custPhone']=response.data.data.normal['custPhone'];
          response.data.data.xinyong['emergencyContact']=response.data.data.normal['emergencyContact'];
          response.data.data.xinyong['emergencyContactPhone']=response.data.data.normal['emergencyContactPhone'];
          this.xinyongdaicontent=response.data.data.xinyong;
          this.xinyongdaicontent.contractnum=this.contractnum;
          this.dianwei=response.data.data.xinyong.point;
          this.dingjin=response.data.data.xinyong.depositAmount;
          this.fuwufei=response.data.data.xinyong.onceAmount;
          if(this.dianwei>1.8){
            this.typeid=0;
          }else{
             this.typeid=1;
          }

        }).catch(function(err){
        Toast('操作失败');;
      })
       axios.get(host+"/getaccessory?contractid="+this.contractid,{
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
          }).then(response=>{
            this.liuchengcontent=response.data;
            //console.log(this.liuchengcontent);
          }).catch(function(err){
            Toast('操作失败');;
          });
          //审批历史
          axios.post(hostapi+'/contract/optionhistory',qs.stringify({
            contractId:this.contractid,
            isbaobei:false,
          })).then(response=>{
            if(response.data.code=='200'){
              this.history = response.data.data;
            }
          }).catch(function(err){
            Toast('操作失败');;
          });
      //交接单回显
      axios.post(host+"/app/loadcntdeliveryofCredit?contractnum="+this.contractnum,{
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      }).then(response=>{
          console.log('交接单');
        console.log(response.data.data);
        this.jiaojiedancontent=response.data.data;
        this.addZiduan(this.jiaojiedancontent,"touristnum");
        this.addZiduan(this.jiaojiedancontent,"contractnum");
        this.addZiduan(this.jiaojiedancontent,"ledgernum");
        this.addZiduan(this.jiaojiedancontent,"shopownername");
        this.addZiduan(this.jiaojiedancontent,"shopownerphone");
        this.addZiduan(this.jiaojiedancontent,"clerkname");
        this.addZiduan(this.jiaojiedancontent,"clerkphone");
        this.addZiduan(this.jiaojiedancontent,"custname");
        this.addZiduan(this.jiaojiedancontent,"custphone");
        this.addZiduan(this.jiaojiedancontent,"loanamount");
        this.addZiduan(this.jiaojiedancontent,"bankname");
        this.addZiduan(this.jiaojiedancontent,"bankbranch");
        this.addZiduan(this.jiaojiedancontent,"accountmanagername");
        this.addZiduan(this.jiaojiedancontent,"accountmanagerphone");
        this.addZiduan(this.jiaojiedancontent,"propertyaddr");
        this.addZiduan(this.jiaojiedancontent,"loantype");
        this.addZiduan(this.jiaojiedancontent,"banksigned");
        this.addZiduan(this.jiaojiedancontent,"banksignedtime");
        this.addZiduan(this.jiaojiedancontent,"evaluated");
        this.addZiduan(this.jiaojiedancontent,"evaluationvalue");
        this.addZiduan(this.jiaojiedancontent,"depositamount");
        this.addZiduan(this.jiaojiedancontent,"servicecharge");
        this.addZiduan(this.jiaojiedancontent,"chargeperiod");
        this.addZiduan(this.jiaojiedancontent,"borrowername");
        this.addZiduan(this.jiaojiedancontent,"borrowermaterial");
        this.addZiduan(this.jiaojiedancontent,"borrowerothermaterial");
        this.addZiduan(this.jiaojiedancontent,"borrowerspousename");
        this.addZiduan(this.jiaojiedancontent,"borrowerspousematerial");
        this.addZiduan(this.jiaojiedancontent,"borrowerspouseothermaterial");
        this.addZiduan(this.jiaojiedancontent,"commonborrowername");
        this.addZiduan(this.jiaojiedancontent,"commonborrowermaterial");
        this.addZiduan(this.jiaojiedancontent,"commonborrowerothermaterial");
        this.addZiduan(this.jiaojiedancontent,"commonborrowerspousename");
        this.addZiduan(this.jiaojiedancontent,"commonborrowerspousematerial");
        this.addZiduan(this.jiaojiedancontent,"commonborrowerspouseothermaterial");
        this.addZiduan(this.jiaojiedancontent,"mortgagorname");
        this.addZiduan(this.jiaojiedancontent,"mortgagormaterial");
        this.addZiduan(this.jiaojiedancontent,"mortgagorothermaterial");
        this.addZiduan(this.jiaojiedancontent,"mortgagorspousename");
        this.addZiduan(this.jiaojiedancontent,"mortgagorspousematerial");
        this.addZiduan(this.jiaojiedancontent,"mortgagorspouseothermaterial");
        this.addZiduan(this.jiaojiedancontent,"companymaterial");
        this.addZiduan(this.jiaojiedancontent,"remarks");
        this.addZiduan(this.jiaojiedancontent,"managersign");
        this.addZiduan(this.jiaojiedancontent,"managersigndate");
      }).catch(function(err){
        Toast('操作失败');
      })
      //承诺函回显
      axios.post(host+"/app/loadcntpromissoryCredit?contractnum="+this.contractnum,{
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      }).then(response=>{
        //console.log(response);
        this.chengnuohancontent=response.data.data;
        if(this.step==1){
            this.chengnuohancontent.shopownername=this.name;
        }else if(this.step==2){
            this.chengnuohancontent.businessdirectorname=this.name;
        }

        this.addZiduan(this.chengnuohancontent,'commitdate');
        this.addZiduan(this.chengnuohancontent,'committedperson');
        this.addZiduan(this.chengnuohancontent,'contractid');
        this.addZiduan(this.chengnuohancontent,'custid');
        this.addZiduan(this.chengnuohancontent,'custname');
        this.addZiduan(this.chengnuohancontent,'custnum');
        this.addZiduan(this.chengnuohancontent,'isvailid');
        this.addZiduan(this.chengnuohancontent,'ledgernum');
        this.addZiduan(this.chengnuohancontent,'typeid');
        this.addZiduan(this.chengnuohancontent,'typename');
      }).catch(function(err){
        Toast('操作失败');;
      })
      //点位说明回显
      axios.post(host+"/app/loadcntpointmark?contractnum="+this.contractnum,{
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      }).then(response=>{
        console.log(response);
        this.dianweishuomingcontent=response.data.data;
        if(this.dianweishuomingcontent.point==-1){
          this.dianweishuomingcontent.point="/";
        }
         if(this.step==1){
            this.dianweishuomingcontent.shopownername=this.name;
        }else if(this.step==2){
            this.dianweishuomingcontent.businessdirectorname=this.name;
        }
         this.addZiduan(this.dianweishuomingcontent,'usinessdirectorname');
        this.addZiduan(this.dianweishuomingcontent,'custname');
        this.addZiduan(this.dianweishuomingcontent,'ledgernum');
        this.addZiduan(this.dianweishuomingcontent,'point');
        this.addZiduan(this.dianweishuomingcontent,'reason');
        this.addZiduan(this.dianweishuomingcontent,'shopownername');
        this.addZiduan(this.dianweishuomingcontent,'signdate');
      }).catch(function(err){
        Toast('操作失败');;
      })
      this.userid=this.$cookie.get('uid');
    },
    components:{
      'ContractTop':ContractTop,
      'xinyongdaicontract':xinyongdaicontract,
      'liuchengfujian':liuchengfujian,
      'jiaojiedan':jiaojiedan,
      'chengnuohan':chengnuohan,
      'dianweishuoming':dianweishuoming,
      'shenpiyijian':shenpiyijian,
    },
    methods:{
      addZiduan:function(obj,name){
              if(!(obj[name])){
                  this.$set(obj,name,'');
              }
          },
      jiaojiedanflag(){
        this.jiaojiedanflagone=true;
      },
      chengnuohanflag(){
         this.chengnuohanflagone=true;
      },
      submitone(){
        if(!this.liuchengflagone){
             MessageBox('提示', '流程附件未保存');
             return false;
        }
         if(!this.jiaojiedanflagone){
             MessageBox('提示', '交接单未保存');
             return false;
        }
        if(!this.chengnuohanflagone){
          MessageBox('提示', '承诺函未保存');
           return false;
        }
        if(!this.dianweishuomingflagone){
          MessageBox('提示', '点位说明未保存');
          return false;
        }
        MessageBox.confirm('是否确认提交?').then(action => {
           Indicator.open();
           axios.post(host+"/app/loadReportXD?contractid=" + this.contractid + "&userid=" + this.userid + "&uuid=" + this.uuid,
           ).then(response=>{
               if(response.data.data.code==200){
                   Indicator.close();
                    this.$router.go(-1);
               }else{
                  Indicator.close();
                     MessageBox('提示', '提交流程失败');
               }
                }).catch(function(err){
                   Indicator.close();
                    this.$router.go(-1);
                });
        })
      },
      dianweishuomingflag(){
          this.dianweishuomingflagone=true;
      },
      liuchengflag(){
        this.liuchengflagone=true;
      },
      approve:function(data){
        var self=this;
        Indicator.open();
        axios.get(host+"/app/approve?userid=" +this.userid + "&nodeType=0&typeid=" + this.typeid + "&step=" +this.step + "&processinstanceid=" +this.processinstanceid + "&num=0" + "&contractid=" +this.contractid + "&auditoropinion=" + data+ "&uuid=" +this.uuid,qs.stringify({

        })).then(response=>{
           self.newarr.approveIdea=data;
            self.newarr.contractnum=self.contractnum;
          if(response.data.code=="200"){
            if(this.step==1){
               axios.post(host+"/app/savecntdeliveryCredit?uuid=" +this.uuid,this.newarr
             ).then(response=>{
                  if(response.data.data.code=="200"){
                    Indicator.close();
                    this.$router.go(-1);
                  }else{
                    Indicator.close();
                    MessageBox('提示', '保存失败');
                  }
                }).catch(function(err){
                  this.$router.go(-1);
                });
            }else if(this.step==2){
              this.$router.go(-1);
            }

          }else if(response.data.code=="400"){
               Indicator.close();
               MessageBox('提示', '保存失败');
          }else{
            Indicator.close();
            MessageBox('提示', '用户已下线');
          }
        }).catch(function(err){
          this.$router.go(-1);
        });
      },
      unapprove:function(data){
        Indicator.open();
        axios.get(host+"/app/reject?userid=" +this.userid + "&nodeType=0&typeid=" + this.typeid + "&step=" +this.step + "&processinstanceid=" +this.processinstanceid + "&num=0" + "&contractid=" +this.contaracthetongid + "&auditoropinion=" + data+ "&uuid=" +this.uuid,qs.stringify({

        })).then(response=>{
          if(response.data.code=="200"){
              this.$router.go(-1);

          }else if(response.data.code=="400"){
               Indicator.close();
               MessageBox('提示', '保存失败');
          }else{
            Indicator.close();
            MessageBox('提示', '用户已下线');
          }
        }).catch(function(err){
          this.$router.go(-1);
        });
      },
    }
  }
</script>
<style scoped>
  .mint-navbar .mint-tab-item.is-selected{
    color:#fbaf37;
  }
  .mint-navbar .mint-tab-item{
    color:#777;
  }
</style>
