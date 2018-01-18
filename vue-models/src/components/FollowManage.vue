<template>
  <div id="app" style="overflow-Y:scroll;">
      <div class="follow-box" style="position: fixed;z-index:999;width:100%;background:#fff;">
        <div class="follow-left" v-on:click="childmsg1">
          跟进记录
        </div>
        <div class="follow-right follow-active" v-on:click="childmsg2">
          跟进处理
        </div>
      </div>
      <FollowManageBlock v-if="recordshow"  v-bind:scheduleid="scheduleid" v-bind:id="id"></FollowManageBlock>
      <FollowManageBlock2 v-else  v-bind:id="id"  v-bind:scheduleid="scheduleid"></FollowManageBlock2>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import FollowManageBlock from '@/components/FollowManageBlock';
import FollowManageBlock2 from '@/components/FollowManageBlock2';
import axios from 'axios';
import { Button } from 'mint-ui';
export default {
  data () {
  return {
    manege:2,
    }
  },
  mounted:function(){

  },
  props:["recordshow","id","scheduleid"],
  methods:{
    childmsg1(){
      this.$emit("childmsg2","a");
    },
    childmsg2(){
      this.$emit("childmsg2","b");
    },
    goTop(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

  },
  components:{
	'ContractTop':ContractTop,
	'FollowManageBlock':FollowManageBlock,
  'FollowManageBlock2':FollowManageBlock2
  }
}
</script>
<style scoped>
	@import "../assets/css/server.css";
  body{background:#fff;}
	.mint-popup-bottom {
    width: 100%;
  }
</style>
