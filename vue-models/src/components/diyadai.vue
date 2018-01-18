<template>
  <div id="appdiyadai" style="text-align: left;overflow-Y:scroll；height:100%;">
		<ContractTop tle="审批" tleurl="/index" v-bind:submit=" role>1?true:false " style="position:fixed;top:0px;z-index:999;background:#fff;" ></ContractTop>
		 <mt-navbar v-model="selected" style="width:100%;position:fixed;top:44px;z-index:999;background:#fff;" value=1>
			<div style="width:620px;">
        <mt-tab-item id="1">抵押贷合同</mt-tab-item>
				<mt-tab-item id="2">流程附件</mt-tab-item>
				<mt-tab-item id="3">交接单</mt-tab-item>
				<mt-tab-item id="4">承诺函</mt-tab-item>
				<mt-tab-item id="5" v-if="dianwei<1.8 ? true: false">点位说明</mt-tab-item>
				<mt-tab-item id="6" >意见审批</mt-tab-item>
			</div>
		</mt-navbar>

		<mt-tab-container v-model="selected"  :swipeable='true' style="margin-top:98px;">
		  <mt-tab-container-item id="1">
			<diyadaicontract v-bind:diyadaiall="diyadaicontent"></diyadaicontract>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
			<liuchengfujian v-bind:liuchengall="liuchengcontent" v-bind:showsave="false" v-bind:contracttype="1"></liuchengfujian>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
			<jiaojiedan v-bind:jiaojiedanall="jiaojiedancontent" v-bind:showsave="false" v-bind:showor="true"></jiaojiedan>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="4">
			<chengnuohan v-bind:chengnuohanall="chengnuohancontent" v-bind:showsave="false" v-bind:showor="true"></chengnuohan>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="5" v-if="dianwei<1.8 ? true: false">
			<dianweishuoming v-bind:dianweishuomingall="dianweishuomingcontent" v-bind:showsave="false" v-bind:showor="true"></dianweishuoming>
		  </mt-tab-container-item>
			<mt-tab-container-item id="6">
			<shenpiyijian v-on:approve="approve" v-bind:showhistory="showhistory" v-bind:history="history"  v-on:unapprove="unapprove" ></shenpiyijian>
		  </mt-tab-container-item>
		</mt-tab-container>
  </div>
</template>

<script>
//1
import { TabContainer, TabContainerItem } from 'mint-ui';
import axios from 'axios';
import { Tabbar, TabItem } from 'mint-ui';
import { Toast } from 'mint-ui';
import ContractTop from '@/components/ContractTop';
import diyadaicontract from '@/components/diyadaicontract';
import liuchengfujian from '@/components/liuchengfujian';
import jiaojiedan from '@/components/jiaojiedan';
import chengnuohan from '@/components/chengnuohan';
import dianweishuoming from '@/components/dianweishuoming';
import shenpiyijian from '@/components/shenpiyijian';
import qs from 'qs';
export default {
  data () {
  return {
      userid:'',
	  role:1,
	  selected:'1',
	  contractid:'',
	  diyadaicontent:[],
	  liuchengcontent:[],
	  chengnuohancontent:[],
	  dianweishuomingcontent:[],
	  dianwei:'',
	  jiaojiedancontent:[],
	  contractnum:'',
	  showhistory:true,
	  history:[],
	  step:'',
	  typeid:'',
	  processinstanceid:'',
    }
  },
  created:function(){
	  this.contractnum = this.$route.params.contractnum;
      this.contractid = this.$route.params.contractid;
      this.processinstanceid=this.$route.params.processinstanceid;
      this.step=this.$route.params.step;
      this.typeid=this.$route.params.typeid;
  },
  mounted:function(){
    this.moveControl();
//		console.log(this.$route.params);
    //   this.contractnum = this.$route.params.contractnum;
    //   this.contractid = this.$route.params.contractid;
    //   this.processinstanceid=this.$route.params.processinstanceid;
    //   this.step=this.$route.params.step;
    //   this.typeid=this.$route.params.typeid;
	 	axios.post(host+"/app/loadGuarantyContractMain?contractnum="+this.contractnum,{
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},
		})
		.then(response=>{
			console.log(response);
			this.diyadaicontent=response.data.data.diya;
			this.diyadaicontent.contractnum=this.contractnum;
//			this.contractid=response.data.data.diya.contractId;
			this.dianwei=response.data.data.diya.point;
			axios.get(host+"/getaccessory?contractid="+this.contractid,{
				headers:{'Content-Type': 'application/x-www-form-urlencoded'},
			}).then(response=>{
				this.liuchengcontent=response.data;
				console.log(this.liuchengcontent);
			}).catch(function(err){
				Toast('操作失败');;
			});
		})
		.catch(function(err){
			Toast('操作失败');;
		})
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
		axios.post(host+"/app/loadcntdeliveryofGuaranty?contractnum="+this.contractnum,{
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},
		})
		.then(response=>{
			console.log(response.data.diya);
			this.jiaojiedancontent=response.data.diya;
//			this.contractid=response.data.diya.contractId;
			console.log('交接单');
			console.log(this.jiaojiedancontent);
		})
		.catch(function(err){
			Toast('操作失败');;
		})
		axios.post(host+"/app/loadcntpromissoryGuaranty?contractnum="+this.contractnum,{
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},
		})
		.then(response=>{
			//console.log(response);
			this.chengnuohancontent=response.data.data;

		})
		.catch(function(err){
			Toast('操作失败');;
		})
		axios.post(host+"/app/loadcntpointmark?contractnum="+this.contractnum,{
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},
		})
		.then(response=>{
			//console.log(response);
			this.dianweishuomingcontent=response.data.data;

		})
		.catch(function(err){
			Toast('操作失败');;
		})
	  this.userid=this.$cookie.get('uid');
  },
  components:{
	'ContractTop':ContractTop,
	'diyadaicontract':diyadaicontract,
	'liuchengfujian':liuchengfujian,
	'jiaojiedan':jiaojiedan,
	'chengnuohan':chengnuohan,
	'dianweishuoming':dianweishuoming,
	'shenpiyijian':shenpiyijian,
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
      approve:function(data){
          axios.post(hostapi+'/contract/approve',qs.stringify({
              processId:this.processinstanceid,
              step:this.step,
              contractId:this.contractid,
              message:data,
              userId:this.userid,
              type:0,
          })).then(response=>{
              console.log(response);
              if(response.data.code=="200"){
				  this.$router.go(-1);
              }
          }).catch(function(err){
              Toast('操作失败');;
          });
      },
      unapprove:function(data){
          axios.post(hostapi+'/contract/disagree',qs.stringify({
              processId:this.processinstanceid,
              step:this.step,
              contractId:this.contractid,
              message:data,
              userId:this.userid,
              type:0,
          })).then(response=>{
              console.log(response);
              if(response.data.code=="200"){
				  this.$router.go(-1);
              }
          }).catch(function(err){
              Toast('操作失败');;
          });
      },
  },
  updated(){
    this.tabItemIntoView();
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
