<template>
  <div id="app">
        <div class="follow-box" style="position: fixed;z-index:999;width:100%;background:#fff;overflow-Y:scroll;">
            <div class="follow-left follow-active" v-on:click="childmsg1" >
              跟进记录
            </div>
            <div class="follow-right" v-on:click="childmsg2">
              跟进处理
            </div>
        </div>
      <FollowRecordBlock v-if="recordshow"  v-bind:messages="records"></FollowRecordBlock>
      <FollowRecordBlock2 v-else ></FollowRecordBlock2>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import FollowRecordBlock2 from '@/components/FollowRecordBlock2';
import FollowRecordBlock from '@/components/FollowRecordBlock';
import axios from 'axios';
import { Button } from 'mint-ui';
export default {
  data () {
  return {

    }
  },
  mounted:function(){

  },
  props:['recordshow','records'],
  methods:{
      childmsg1(){
          this.$emit("childmsg1","a");
      },
      childmsg2(){
          this.$emit("childmsg1","b");
      },
      goTop(){
          document.body.scrollTop = document.documentElement.scrollTop = 0;
      },
      load(){

      },
  },
  components:{
	'ContractTop':ContractTop,
	'FollowRecordBlock2':FollowRecordBlock2,
  'FollowRecordBlock':FollowRecordBlock
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
