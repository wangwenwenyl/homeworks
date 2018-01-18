<template>
  <div id="app" style="overflow-Y:scroll;">
    <ContractTop tle="跟进" tleurl="/index" style="position:fixed;top:0px;z-index:999;"></ContractTop>
    <!--<div class="follow-box">-->
      <!--<div class="follow-left"  v-bind:class="[{'follow-active':genJinTab}]" v-on:click="genJinTab">-->
        <!--跟进记录-->
      <!--</div>-->
      <!--<div class="follow-right" v-bind:class="[{'follow-active':!genJinTab}]"  v-on:click="!genJinTab">-->
        <!--跟进处理-->
      <!--</div>-->
    <!--</div>-->
    <FollowRecord v-show="genJinTab==1" v-on:childmsg1="parent" v-bind:recordshow="recordshow" v-bind:records="records" style="margin-top: 44px;"></FollowRecord>
    <FollowManage v-show="genJinTab==2" v-on:childmsg2="parent" v-bind:recordshow="recordshow" v-bind:id="id" v-bind:scheduleid="scheduleid" style="margin-top: 44px;"></FollowManage>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import FollowRecord from '@/components/FollowRecord';
import FollowManage from '@/components/FollowManage';
import { InfiniteScroll } from 'mint-ui';
import axios from 'axios';
import qs from 'qs';
import { Toast } from 'mint-ui';
export default {
  data () {
      return {
          genJinTab:1,
          scheduleid:'',
          records:'',
          id:'',
          recordshow:true
      }
  },
  mounted:function(){
      this.scheduleid = this.$route.params.schedule;
      this.id = this.$route.params.id;
      this.recordhistory();
  },
  methods:{
      parent(childs){
          if(childs=="a"){
              this.genJinTab=1;
              this.recordhistory();
          }else if(childs=="b"){
              this.genJinTab=2;
          }
      },
      recordhistory(){
          axios.post(hostapi+'/follow/followlist',qs.stringify({
              scheduleid:this.scheduleid,
          })).then(response=>{
            console.log(response);
              if(response.data.code=='200'){
                  if(response.data.data==''){
                      this.records=[];
                      this.recordshow=false;
                  }else{
                      this.records = response.data.data;
                      console.log(response.data.data);
                  }
              }
          }).catch(function(err){
              Toast('操作失败');
          });
      },
  },
  components:{
	'ContractTop':ContractTop,
    "FollowRecord":FollowRecord,
    "FollowManage":FollowManage
  }
}
</script>

<style scoped>
	@import "../assets/css/server.css";
</style>
