<template>
  <div id="app" style="overflow-Y:scroll;">
    <ContractTop tle="作废/撤单审批" tleurl="/index" style="position:fixed;top:0px;z-index:999;"></ContractTop>
    <FollowRecordBlock2 style="position:fixed;top:44px;" v-if="showor"></FollowRecordBlock2>
    <cheDanShenPiBlock style="margin-top:44px;" v-else></cheDanShenPiBlock>
  </div>
</template>
<script>
  import ContractTop from '@/components/ContractTop';
  import FollowRecordBlock2 from '@/components/FollowRecordBlock2';
  import cheDanShenPiBlock from '@/components/old/cheDanShenPiBlock';
  import { InfiniteScroll } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  import axios from 'axios';
  import { Button } from 'mint-ui';
  import qs from 'qs';
  export default {
    data () {
      return {
        showor:false,
      }
    },
    mounted:function(){

    },
    methods:{

    },
    components:{
      'ContractTop':ContractTop,
      'FollowRecordBlock2':FollowRecordBlock2,
      'cheDanShenPiBlock':cheDanShenPiBlock
    }
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
