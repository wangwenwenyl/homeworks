<template>
  <div id="app" style="overflow-Y:scroll">
		<ContractTop tle="合同数据" tleurl="/shouye" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
	  <div id="appHead" style="width:100%;position:fixed;top:44px;background:#fff;z-index: 999;">
		  <div class="search-btn" @click="trans()">
			  {{ open ? '关闭' : '展开搜索' }}
		  </div>
		  <div class="search-box" v-show="open">
			  <div class="search-iterm">
				  <div class="follow-iterm-left">
					  <label class="contract-list-name">台 账 号 ：</label>
				  </div>
				  <div class="follow-iterm-right">
					  <input type="text" class="follow-input" v-model="accountNum"/>
				  </div>
			  </div>
			  <div class="search-iterm">
				  <div class="follow-iterm-left" >
					  <label class="contract-list-name">合同编号：</label>
				  </div>
				  <div class="follow-iterm-right">
					  <input type="text" class="follow-input" v-model="contractNum"/>
				  </div>
			  </div>
			  <div class="search-iterm">
				  <div class="follow-iterm-left">
					  <label class="contract-list-name">业 务 员 ：</label>
				  </div>
				  <div class="follow-iterm-right">
					  <input type="text" class="follow-input" v-model="userName"/>
				  </div>
			  </div>
			  <div class="search-iterm">
				  <deptselect v-bind:selecttitle="titles" v-bind:datas="depts" v-on:select="confirmdept"></deptselect>
			  </div>
			  <div class="search-iterm">
				  <starttime v-on:date="start" v-bind:title="starttitle"></starttime>
			  </div>
			  <div class="search-iterm">
				  <endtime v-on:date="end" v-bind:title="endtitle"></endtime>
			  </div>
			  <div class="search-iterm" v-if="type==8">
				  <typeselect v-bind:selecttitle="typetitle" v-bind:datas="types" v-on:select="confirmtype"></typeselect>
			  </div>
			  <div class="search-btn" @click="contidion">
				  查询
			  </div>
		  </div>
	  </div>
	  <mt-loadmore
			  :top-method="handleTopChange"
			  :bottom-method="handleBottomChange"
			  :bottom-all-loaded="allLoaded"
			  :auto-fill="false"
			  ref="loadmore"
			  :class="cls"
	  >
	  <ContractBlock3 v-bind:contracts="items"></ContractBlock3>
	  	<noData :class="cls" v-show="show"></noData>
	  </mt-loadmore>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import ContractBlock3 from '@/components/ContractBlock3';
import starttime from '@/components/search-date';
import endtime from '@/components/search-date';
import deptselect from '@/components/search-select';
import typeselect from '@/components/search-select';
import axios from 'axios';
import noData from '@/components/noData';
import qs from 'qs';
import {Loadmore} from 'mint-ui';
import { Toast } from 'mint-ui';

export default {
  data (){
    return {
        userid:'',
        type:'',
        show:false,
        popupVisible4: false,
        open:false,
        types:[{
            flex: 1,
            values:[],
            textAlign:'center',
            className: 'slot1',
        }],
        depts:[{
            flex: 1,
            values: [],
            textAlign: 'center',
            className: 'slot1',
        }],
        starttitle:'起始时间',
        endtitle:'终止时间',
        titles:'所属部门',
        typetitle:'合同类型',
		items:[],
        department:'',    //所属部门
        accountNum:'',   //台账号
        contractNum:'',   //合同编号
        userName:'',      //业务员
        signDateStart:'', //起始时间
        signDateEnd:'',   //终止时间
        typeId:'',        //合同类型 0抵押1信用2质押
		page:1,
        pageSize:15,
		cls:'class1',
        topStatus: '',
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
	}
  },
  created (){
       this.userid = this.$cookie.get("uid");
      axios.post(hostapi+'/auth/allbumen',qs.stringify({
            userId:this.userid,
        })).then(response=>{
          console.log(response);
          if(response.data.code=='200'){
              this.depts[0].values=response.data.data;
              this.types[0].values=['抵押贷','信用贷'];
              this.department = response.data.data[0];
          }
      }).catch(function(err){
          Toast('操作失败');
      });
      this.userid=this.$cookie.get('uid');
      //当短融部的人登录时，修改返回的合同类型为质押贷，否则默认显示全部
      this.type=this.$cookie.get('utype');
      if(this.type==7){
          this.typeId=2;
	  }
//      this.signDateStart=this.origintime();
//      this.signDateEnd=this.origintime();
	this.load();
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
      contidion(){
        this.items=[];
        this.load();
        this.open=false;
        this.cls="class1";
	  },
      origintime(){
          var date = new Date();
          return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
      },
      trans(){
          this.open=! this.open;
          if(this.open){
              this.cls="class2";
          }else{
              this.cls="class1";
          }
      },
      handleTopChange() {
          // 加载更多数据
          setTimeout(() => {
              this.page=1;
              this.items=[];
              this.load();
              this.$refs.loadmore.onTopLoaded();
          }, 1500);

      },
      handleBottomChange() {
          // 加载更多数据
//                this.allLoaded = true;// 若数据已全部获取完毕
//                this.$refs.loadmore.onBottomLoaded();
          setTimeout(() => {
              this.page +=1;
              this.load();
              this.$refs.loadmore.onBottomLoaded();
          }, 1500);
      },
      start(time){
          this.signDateStart = time;
          console.log(this.signDateStart);
      },
      end(time){
          this.signDateEnd = time;
          console.log(this.signDateEnd);
      },
      confirmdept:function(value){
          this.department=value;
      },
      confirmtype:function(value){
          if("抵押贷"==value){
              this.typeId=0;
          }else if("信用贷"==value){
              this.typeId=1;
          }else if("质押贷"==value){
              this.typeId=2;
          }
          console.log(this.typeId);
      },
      load(){
          //获取合同数据
          	axios.post(hostapi+'/contract/list', qs.stringify({
                accountNum:this.accountNum,
                contractNum:this.contractNum,
                userName:this.userName,
                department:this.department,
                signDateStart:this.signDateStart,
                signDateEnd:this.signDateEnd,
                typeId:this.typeId,
                page:this.page,
                pageSize:this.pageSize,
				userId:this.userid,
				})).then(response=>{
          			if(response.data.code=='200'){
						this.show=false;
						if(response.data.data=='' && this.page==1){
						    this.show=true;
                            this.allLoaded = true;
                            this.items=[];
						}else{
                            this.items = this.items.concat(response.data.data);
                            console.log(response.data.data);
                            if(response.data.data==''){
                                this.allLoaded = true;
                            }
						}
		  			}
			}).catch(function(err){
                Toast('操作失败');
			});
	  }
  },
  components:{
	'ContractTop':ContractTop,
	'ContractBlock3':ContractBlock3,
    'noData':noData,
    'starttime':starttime,
    'endtime':endtime,
    'deptselect':deptselect,
    'typeselect':typeselect,
    'v-loadmore':Loadmore,
  }
}
</script>
<style scoped>
	@import "../assets/css/server.css";
	.class1{
		margin-top:100px;
	}
	.class2{
		margin-top:544px;
	}
</style>
