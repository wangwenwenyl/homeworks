<template>
  <div id="app">
	<ContractTop tle="支出凭单" tleurl="/index" style="position:fixed;top:0px;"></ContractTop>
	 <tuiDingJinPingDanBlock style="margin-top:43px;"></tuiDingJinPingDanBlock>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import tuiDingJinPingDanBlock from '@/components/yeji/tuiDingJinPingDanBlock';
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
		goTop(){
			//document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
  },
  components:{
	'ContractTop':ContractTop,
  'tuiDingJinPingDanBlock':tuiDingJinPingDanBlock
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
