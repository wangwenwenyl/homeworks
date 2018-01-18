<template>
  <div id="app">
	<ContractTop tle="回款录入" tleurl="/index" style="position:fixed;top:0px;"></ContractTop>
	<div class="follow-box" style="position:fixed;top:44px;width:100%;border-bottom:1px solid #ddd;">
			<div class="follow-left" v-bind:class="[{'follow-active':!classor}]" v-on:click="tabshow">
					回款历史
			</div>
			<div class="follow-right" v-bind:class="[{'follow-active':classor}]"  v-on:click="tabshow">
					款项信息
			</div>
  </div>
	<huiKuanLuRuBlock style="margin-top:84px;" v-show="classor"></huiKuanLuRuBlock>
  <huiKuanLuRuHistoryBlock style="margin-top:84px;" v-show="!classor"></huiKuanLuRuHistoryBlock>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import huiKuanLuRuBlock from '@/components/yeji/huiKuanLuRuBlock';
import huiKuanLuRuHistoryBlock from '@/components/yeji/huiKuanLuRuHistoryBlock';
import { InfiniteScroll } from 'mint-ui';
import { Indicator } from 'mint-ui';
import axios from 'axios';
import { Button } from 'mint-ui';
export default {
  data () {
  return {
        classor:true
    }
  },
  mounted:function(){

  },
  methods:{
    tabshow(){
      if(this.classor){this.classor=false;}else{this.classor=true;}
    },
		goTop(){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
  },
  components:{
	'ContractTop':ContractTop,
  'huiKuanLuRuBlock':huiKuanLuRuBlock,
  'huiKuanLuRuHistoryBlock':huiKuanLuRuHistoryBlock
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
