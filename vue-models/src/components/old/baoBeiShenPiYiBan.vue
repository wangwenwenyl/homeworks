<template>
  <div id="app" style="overflow-Y:scroll;">
    <ContractTop tle="报备审批" tleurl="/index" style="position:fixed;top:0px;z-index:999;"></ContractTop>
    <baoBeiShenPiYiBanBlock style="margin-top:44px;"></baoBeiShenPiYiBanBlock>
  </div>
</template>
<script>
  import ContractTop from '@/components/ContractTop';
  import baoBeiShenPiYiBanBlock from '@/components/old/baoBeiShenPiYiBanBlock';
  import { InfiniteScroll } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  import axios from 'axios';
  import { Button } from 'mint-ui';
  export default {
    data () {
      return {

      }
    },
    mounted:function(){

    },
    methods:{

    },
    components:{
      'ContractTop':ContractTop,
      'baoBeiShenPiYiBanBlock':baoBeiShenPiYiBanBlock
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
