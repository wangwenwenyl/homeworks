<template>
  <div id="app" style="overflow-Y:scroll;">
    <div class="follow-box" style="top:0px;position: fixed;z-index:999;width:100%;">
        <mt-button icon="back" @click="route" slot="left" style="width:30px;color:#333;position: fixed;left:0px;line-height:41px;background:#fff;box-shadow:none;">
        </mt-button>
      <div class="follow-left" v-bind:class="{'follow-active':tabnow}" v-on:click="childmsg1">
        合同申领
      </div>
      <div class="follow-right " v-bind:class="{'follow-active':!tabnow}" v-on:click="childmsg2">
        合同订单
      </div>
    </div>
    <serverHeTongApply style="margin-top:44px;" v-if="tabnow"></serverHeTongApply>
    <serverHeTongDingDan style="margin-top:44px;" v-else></serverHeTongDingDan>
  </div>
</template>
<script>
  import serverHeTongApply from '@/components/old/serverHeTongApply';
  import serverHeTongDingDan from '@/components/old/serverHeTongDingDan';
  import { InfiniteScroll } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  import axios from 'axios';
  import { Button } from 'mint-ui';
  import qs from 'qs';
  export default {
    data () {
      return {
        tabnow:true,
        paths:"/index"
      }
    },
    mounted:function(){

    },
    methods:{
      childmsg1(){
        this.tabnow=true;
      },
      childmsg2(){
        this.tabnow=false;
      },
        route(){
          this.$router.go(-1);
        }
    },
    components:{
      'serverHeTongApply':serverHeTongApply,
      'serverHeTongDingDan':serverHeTongDingDan,
    },
  }
</script>
<style scoped>
  @import "../../assets/css/server.css";
  .big-save{width:100%;height:39px;background:#fbaf37;color:#fff;
    text-align:center;line-height:39px;border-radius:5px;margin-top:20px;}
  .mint-popup-bottom {
    width: 100%;
  }
  .arrow-up {
    width: 0px;
    height: 0px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #efeff4;
    /*以下属性可以是IE5兼容*/
    font-size: 0px;
    line-height: 0px;
    margin-top:-12px;
    margin-left:80px;
  }
</style>
